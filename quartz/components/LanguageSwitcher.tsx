import { QuartzComponentConstructor } from "./types"
import style from "./styles/languageSwitcher.scss"

interface Options {}

export default (() => {
  function LanguageSwitcher() {
    return (
      <div class="language-switcher">
        <button id="language-button">
          <span class="current-language"></span>
        </button>
      </div>
    )
  }

  LanguageSwitcher.css = style

  LanguageSwitcher.afterDOMLoaded = `
    const languageButton = document.getElementById('language-button')
    
    function toggleLanguage() {
      const currentPath = window.location.pathname
      const isEnglish = currentPath.includes('/en/')
      const newPath = isEnglish 
        ? currentPath.replace('/en/', '/zh/') 
        : currentPath.replace('/zh/', '/en/')
      
      window.location.href = newPath
    }

    if (languageButton) {
      languageButton.addEventListener('click', toggleLanguage)
      
      // Update button text based on current path
      const currentLang = window.location.pathname.includes('/en/') ? 'EN' : '中'
      const langSpan = languageButton.querySelector('.current-language')
      if (langSpan) langSpan.textContent = currentLang
    }
  `

  return LanguageSwitcher
}) satisfies QuartzComponentConstructor
