import { Locale } from '@/i18n'
import { useI18n } from 'vue-i18n'
import Eventbus from '@/common/api/Eventbus'

export function useLocale() {
  const defaultLocale = localStorage.getItem('locale') || 'en'
  const { locale } = useI18n()
  locale.value = defaultLocale
  const locales = [
    ['en', 'English'],
    ['zh', '中文 (简体)'],
    ['jp', '日本語'],
    ['kr', '한국어'],
    ['sp', 'Español'],
  ]
  function setLocale(v: Locale) {
    localStorage.setItem('locale', v)
    locale.value = v
    // document.title = t('')
    Eventbus.emit('setLocale', v)
  }

  const keyMap = {
    en: 'en',
    zh: 'cn',
    korea: 'kr',
    jp: 'jp',
    sp: 'sp',
  }

  function getApiLocaleValue(key: string, obj: any) {
    const en = obj[`en_${key}`]
    return obj[`${keyMap[locale.value as 'en']}_${key}`] || en
  }

  return { locale, locales, setLocale, getApiLocaleValue }
}
