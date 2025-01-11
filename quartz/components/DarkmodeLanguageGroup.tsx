import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import * as Component from "."

interface Options {}

const defaultOptions: Partial<Options> = {}

export default ((userOpts?: Partial<Options>) => {
  const opts = { ...defaultOptions, ...userOpts }
  
  // 獲取子組件的實例
  const DarkmodeComponent = Component.Darkmode()
  const LanguageSwitcherComponent = Component.LanguageSwitcher()
  
  function DarkmodeLanguageGroup(props: QuartzComponentProps) {
    return (
      <div class="darkmode-language-group">
        <DarkmodeComponent {...props} />
        <LanguageSwitcherComponent {...props} />
      </div>
    )
  }

  // 合併子組件的樣式
  DarkmodeLanguageGroup.css = `
    .darkmode-language-group {
      display: flex;
      align-items: center;
      gap: 0rem;
    }
    
    ${DarkmodeComponent.css}
    ${LanguageSwitcherComponent.css}
  `

  // 合併子組件的腳本
  DarkmodeLanguageGroup.beforeDOMLoaded = `
    ${DarkmodeComponent.beforeDOMLoaded ?? ''}
  `

  DarkmodeLanguageGroup.afterDOMLoaded = `
    ${DarkmodeComponent.afterDOMLoaded ?? ''}
    ${LanguageSwitcherComponent.afterDOMLoaded ?? ''}
  `

  return DarkmodeLanguageGroup
}) satisfies QuartzComponentConstructor
