import { createContext, useContext } from 'react'
import { en } from './en'
import { pl } from './pl'
import { routeIds } from './types'
import type { Content, RouteId } from './types'

export const langs = ['pl', 'en'] as const

export type Lang = (typeof langs)[number]

export const defaultLang: Lang = 'pl'

export const content: Readonly<Record<Lang, Content>> = { pl, en }

export function hrefFor(lang: Lang, id: RouteId) {
  const parts = [lang === defaultLang ? '' : lang, content[lang].nav[id].path]
  return '/' + parts.filter(Boolean).join('/')
}

export function currentRouteId(pathname: string, lang: Lang): RouteId {
  const base = lang === defaultLang ? pathname : pathname.slice(lang.length + 1)
  const segment = base.split('/').filter(Boolean)[0] ?? ''
  return routeIds.find((id) => content[lang].nav[id].path === segment) ?? 'home'
}

export const LangContext = createContext<Lang>(defaultLang)

export function useLang() {
  return useContext(LangContext)
}

export function useSite() {
  return content[useLang()]
}

export * from './shared'
export * from './types'
