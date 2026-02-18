import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  const description = fileData.frontmatter?.description
  if (title) {
    return (
      <div class={classNames(displayClass, "article-title-wrapper")}>
        <h1 class="article-title">{title}</h1>
        {description && <p class="article-description">{description}</p>}
      </div>
    )
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}

.article-description {
  font-size: 1.5rem;
  margin: 1.2rem 0 1rem 0;
  font-style: italic;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
