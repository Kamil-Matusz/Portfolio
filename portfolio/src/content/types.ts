export const routeIds = ['home', 'experience', 'education', 'projects', 'stack', 'contact'] as const

export type RouteId = (typeof routeIds)[number]
export type PageId = Exclude<RouteId, 'home'>

export const pageIds = routeIds.filter((id): id is PageId => id !== 'home')

export type IconKey =
  | 'java'
  | 'spring'
  | 'csharp'
  | 'dotnet'
  | 'javascript'
  | 'typescript'
  | 'vuejs'
  | 'react'
  | 'docker'
  | 'kubernetes'
  | 'azure'
  | 'mysql'
  | 'postgresql'
  | 'mssql'
  | 'mongodb'
  | 'rabbitmq'
  | 'influxdb'
  | 'redis'
  | 'hibernate'
  | 'electron'
  | 'python'
  | 'neo4j'
  | 'efcore'

export interface Tech {
  readonly name: string
  readonly icon: IconKey
}

export interface Metric {
  readonly value: string
  readonly unit: string
  readonly label: string
}

export interface Role {
  readonly title: string
  readonly period: string
  readonly summary: string
  readonly points: readonly string[]
}

export interface Job {
  readonly company: string
  readonly meta: string
  readonly location: string
  readonly period: string
  readonly roles: readonly Role[]
  readonly stack: readonly string[]
}

export interface Education {
  readonly school: string
  readonly degree: string
  readonly field: string
  readonly period: string
}

export interface Project {
  readonly name: string
  readonly year: string
  readonly summary: string
  readonly stack: readonly string[]
  readonly href: string
}

export interface StackGroup {
  readonly group: string
  readonly items: readonly Tech[]
}

export interface Content {
  readonly locale: string
  readonly profile: {
    readonly role: string
    readonly availableNote: string
    readonly intro: readonly string[]
    readonly metrics: readonly Metric[]
    readonly work: readonly Job[]
    readonly education: readonly Education[]
    readonly projects: readonly Project[]
    readonly stack: readonly StackGroup[]
  }
  readonly nav: Readonly<Record<RouteId, { readonly path: string; readonly label: string }>>
  readonly pages: Readonly<Record<PageId, { readonly title: string; readonly lead: string }>>
  readonly ui: {
    readonly siteTitle: string
    readonly skip: string
    readonly nav: string
    readonly language: string
    readonly status: string
    readonly available: string
    readonly busy: string
    readonly next: string
    readonly about: string
    readonly certifications: string
    readonly back: string
    readonly home: string
    readonly notFoundLead: string
  }
}
