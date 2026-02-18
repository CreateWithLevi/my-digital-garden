import { QuartzEmitterPlugin } from "../types"
import { QuartzComponentProps } from "../../components/types"
import HeaderConstructor from "../../components/Header"
import BodyConstructor from "../../components/Body"
import { pageResources, renderPage } from "../../components/renderPage"
import { ProcessedContent, QuartzPluginData, defaultProcessedContent } from "../vfile"
import { FullPageLayout } from "../../cfg"
import {
  FilePath,
  FullSlug,
  getAllSegmentPrefixes,
  joinSegments,
  pathToRoot,
} from "../../util/path"
import { defaultListPageLayout, sharedPageComponents } from "../../../quartz.layout"
import { TagContent } from "../../components"
import { write } from "./helpers"
import { i18n } from "../../i18n"
import DepGraph from "../../depgraph"

const LANG_PREFIXES = ["en", "zh"]

interface TagPageOptions extends FullPageLayout {
  sort?: (f1: QuartzPluginData, f2: QuartzPluginData) => number
}

export const TagPage: QuartzEmitterPlugin<Partial<TagPageOptions>> = (userOpts) => {
  const opts: FullPageLayout = {
    ...sharedPageComponents,
    ...defaultListPageLayout,
    pageBody: TagContent({ sort: userOpts?.sort }),
    ...userOpts,
  }

  const { head: Head, header, beforeBody, pageBody, afterBody, left, right, footer: Footer } = opts
  const Header = HeaderConstructor()
  const Body = BodyConstructor()

  return {
    name: "TagPage",
    getQuartzComponents() {
      return [
        Head,
        Header,
        Body,
        ...header,
        ...beforeBody,
        pageBody,
        ...afterBody,
        ...left,
        ...right,
        Footer,
      ]
    },
    async getDependencyGraph(ctx, content, _resources) {
      const graph = new DepGraph<FilePath>()

      for (const [_tree, file] of content) {
        const sourcePath = file.data.filePath!
        const slug = file.data.slug!
        const lang = LANG_PREFIXES.find((l) => slug.startsWith(l + "/"))
        if (!lang) continue

        const tags = (file.data.frontmatter?.tags ?? []).flatMap(getAllSegmentPrefixes)
        if (tags.length > 0) {
          tags.push("index")
        }

        for (const tag of tags) {
          graph.addEdge(
            sourcePath,
            joinSegments(ctx.argv.output, lang, "tags", tag + ".html") as FilePath,
          )
        }
      }

      return graph
    },
    async emit(ctx, content, resources): Promise<FilePath[]> {
      const fps: FilePath[] = []
      const allFiles = content.map((c) => c[1].data)
      const cfg = ctx.cfg.configuration

      // Group files by language
      for (const lang of LANG_PREFIXES) {
        const langFiles = allFiles.filter((f) => f.slug?.startsWith(lang + "/"))
        if (langFiles.length === 0) continue

        const tags: Set<string> = new Set(
          langFiles
            .flatMap((data) => data.frontmatter?.tags ?? [])
            .flatMap(getAllSegmentPrefixes),
        )

        // add base tag index
        tags.add("index")

        const tagDescriptions: Record<string, ProcessedContent> = Object.fromEntries(
          [...tags].map((tag) => {
            const title =
              tag === "index"
                ? i18n(cfg.locale).pages.tagContent.tagIndex
                : `${i18n(cfg.locale).pages.tagContent.tag}: ${tag}`
            return [
              tag,
              defaultProcessedContent({
                slug: joinSegments(lang, "tags", tag) as FullSlug,
                frontmatter: { title, tags: [] },
              }),
            ]
          }),
        )

        // Check if any content files provide custom tag descriptions
        for (const [tree, file] of content) {
          const slug = file.data.slug!
          const tagPrefix = lang + "/tags/"
          if (slug.startsWith(tagPrefix)) {
            const tag = slug.slice(tagPrefix.length)
            if (tags.has(tag)) {
              tagDescriptions[tag] = [tree, file]
              if (file.data.frontmatter?.title === tag) {
                file.data.frontmatter.title = `${i18n(cfg.locale).pages.tagContent.tag}: ${tag}`
              }
            }
          }
        }

        for (const tag of tags) {
          const slug = joinSegments(lang, "tags", tag) as FullSlug
          const [tree, file] = tagDescriptions[tag]
          const externalResources = pageResources(pathToRoot(slug), file.data, resources)
          const componentData: QuartzComponentProps = {
            ctx,
            fileData: file.data,
            externalResources,
            cfg,
            children: [],
            tree,
            allFiles: langFiles,
          }

          const renderedContent = renderPage(cfg, slug, componentData, opts, externalResources)
          const fp = await write({
            ctx,
            content: renderedContent,
            slug: file.data.slug!,
            ext: ".html",
          })

          fps.push(fp)
        }
      }
      return fps
    },
  }
}
