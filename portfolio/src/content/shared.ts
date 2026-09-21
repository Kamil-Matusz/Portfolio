import type { Tech } from './types'

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
