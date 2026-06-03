import { createI18n } from 'vue-i18n'

import { getUrlQueries } from '@/common/utils'
import en from './en'
import zh from './zh'
import kr from './kr'
import jp from './jp'
import sp from './sp'

export type Locale = 'zh' | 'en' | 'kr' | 'jp' | 'sp'

const messages = {
  en,
  zh,
  kr,
  jp,
  sp
}

const { lang } = getUrlQueries()

const language = lang || localStorage.getItem('locale') || navigator.language
const langArr: Locale[] = ['zh', 'en', 'kr', 'jp', 'sp']
const locale: Locale = langArr.find((_) => language.includes(_)) || 'en'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  fallbackLocale: 'en',
  locale,
  messages,
})

export default i18n
