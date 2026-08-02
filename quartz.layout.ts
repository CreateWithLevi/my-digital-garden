import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import type { FileNode, Options as ExplorerOptions } from "./quartz/components/ExplorerNode"

const explorerOptions = {
  folderClickBehavior: "link",
  sortFn: (a: FileNode, b: FileNode) => {
    if (a.file && b.file) {
      const dateDifference =
        (b.file.dates?.created.getTime() ?? 0) - (a.file.dates?.created.getTime() ?? 0)
      return (
        dateDifference || a.displayName.localeCompare(b.displayName, undefined, { numeric: true })
      )
    }

    if (a.file) return -1
    if (b.file) return 1

    return a.displayName.localeCompare(b.displayName, undefined, { numeric: true })
  },
} satisfies Partial<ExplorerOptions>

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/CreateWithLevi",
      Linkedin: "https://www.linkedin.com/in/li-wei-huang/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DarkmodeLanguageGroup(),
    Component.DesktopOnly(Component.Explorer(explorerOptions)),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DarkmodeLanguageGroup(),
    Component.DesktopOnly(Component.Explorer(explorerOptions)),
  ],
  right: [],
}
