import type { IconKey, Tech } from './types'

export const identity = {
  firstName: 'Kamil',
  lastName: 'Matusz',
  location: 'Rzeszów, PL',
  timezone: 'Europe/Warsaw',
  available: true,
} as const

export const links = [
  { label: 'E-mail', value: 'matuszkamil076@gmail.com', href: 'mailto:matuszkamil076@gmail.com' },
  { label: 'GitHub', value: 'https://github.com/Kamil-Matusz', href: 'https://github.com/Kamil-Matusz' },
  { label: 'LinkedIn', value: 'https://www.linkedin.com/in/kamil-matusz/', href: 'https://www.linkedin.com/in/kamil-matusz/' },
] as const

export const certifications: readonly Tech[] = [
  { name: 'Azure Fundamentals (AZ-900)', icon: 'azure' },
]

export const stackGroups = {
  backend: [
    { name: 'Java', icon: 'java' },
    { name: 'Spring', icon: 'spring' },
    { name: 'C#', icon: 'csharp' },
    { name: '.NET', icon: 'dotnet' },
  ],
  frontend: [
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Vue.js', icon: 'vuejs' },
    { name: 'React', icon: 'react' },
  ],
  containers: [
    { name: 'Docker', icon: 'docker' },
    { name: 'Kubernetes', icon: 'kubernetes' },
  ],
  cloud: [{ name: 'Azure', icon: 'azure' }],
  databases: [
    { name: 'MySQL', icon: 'mysql' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'MSSQL', icon: 'mssql' },
    { name: 'MongoDB', icon: 'mongodb' },
  ],
} as const satisfies Record<string, readonly Tech[]>

const techIcons = {
  'java': 'java',
  'spring': 'spring',
  'spring boot': 'spring',
  'spring framework': 'spring',
  'hibernate': 'hibernate',
  'c#': 'csharp',
  '.net': 'dotnet',
  'asp.net': 'dotnet',
  'ef core': 'efcore',
  'javascript': 'javascript',
  'typescript': 'typescript',
  'vue': 'vuejs',
  'vue.js': 'vuejs',
  'react': 'react',
  'electron': 'electron',
  'docker': 'docker',
  'kubernetes': 'kubernetes',
  'azure': 'azure',
  'mysql': 'mysql',
  'postgresql': 'postgresql',
  'mssql': 'mssql',
  'mongodb': 'mongodb',
  'redis': 'redis',
  'influxdb': 'influxdb',
  'neo4j': 'neo4j',
  'cypher': 'neo4j',
  'rabbitmq': 'rabbitmq',
  'python': 'python',
} as const satisfies Record<string, IconKey>

export function iconFor(name: string): IconKey | undefined {
  const key = name.toLowerCase().replace(/\s+\d+(\.\d+)*$/, '')
  return (techIcons as Record<string, IconKey>)[key]
}
