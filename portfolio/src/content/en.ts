import { stackGroups } from './shared'
import type { Content } from './types'

export const en: Content = {
  locale: 'en-GB',
  profile: {
    role: 'Junior Backend Engineer',
    availableNote: 'Open to opportunities',
    thesis:
      'I build backend systems that are still maintainable a year after I stop working on them.',
    intro: [
      'I design and develop services that carry production traffic - from the domain model and the API, through the data layer, to observability and deployment.',
      'I am at my best where an existing system needs untangling: pulling dependencies apart, adding tests and getting the team shipping quickly again.',
    ],
    metrics: [
      { value: '8', unit: 'yrs', label: 'in commercial backend' },
      { value: '20+', unit: '', label: 'services shipped' },
      { value: '99.9', unit: '%', label: 'uptime on the production I maintain' },
    ],
    work: [
      {
        company: 'Kinguin',
        meta: 'Contract',
        location: 'Remote',
        period: 'Aug 2024 / now',
        roles: [
          {
            title: 'Junior Backend Developer',
            period: 'Feb 2025 / now',
            summary: '',
            points: [],
          },
          {
            title: 'Intern Backend Developer',
            period: 'Aug 2024 / Feb 2025',
            summary: '',
            points: [
              'Onboarding into the company and the way its teams work.',
              'Support with software development.',
            ],
          },
        ],
        stack: ['Java', 'Spring Framework'],
      },
      {
        company: 'Ideo Software',
        meta: 'Internship',
        location: 'Rzeszów, hybrid',
        period: 'Feb 2024 / Mar 2024',
        roles: [
          {
            title: 'Junior .NET Developer',
            period: 'Feb 2024 / Mar 2024',
            summary:
              'Student internship. Work on an internal microservice-based project.',
            points: [],
          },
        ],
        stack: ['C#', 'ASP.NET'],
      },
      {
        company: 'Ideo Sp. z o.o.',
        meta: 'Internship',
        location: 'Rzeszów, hybrid',
        period: 'Jul 2023',
        roles: [
          {
            title: 'Junior .NET Developer',
            period: 'Jul 2023',
            summary:
              'One-month graduate internship. Work on updating the company internal software.',
            points: [],
          },
        ],
        stack: ['Vue.js', '.NET'],
      },
    ],
    education: [
      {
        school: 'University of Information Technology and Management in Rzeszów',
        degree: "Master's degree",
        field: 'Computer Software Engineering - Cloud Technologies and DevOps',
        period: 'Apr 2025 / Jul 2026',
      },
      {
        school: 'University of Rzeszów',
        degree: "Engineer's degree",
        field: 'Computer Software Engineering',
        period: 'Oct 2021 / Feb 2025',
      },
    ],
    projects: [
      {
        name: 'Project name',
        year: '2025',
        summary:
          'One sentence on what the project does and for whom - no marketing, just the facts.',
        stack: ['TypeScript', 'React', 'Vite'],
        href: 'https://github.com/',
      },
      {
        name: 'Second project',
        year: '2024',
        summary: 'What was hard about it and how it was solved.',
        stack: ['Java', 'Spring'],
        href: 'https://github.com/',
      },
    ],
    stack: [
      { group: 'Back-end', items: stackGroups.backend },
      { group: 'Front-end', items: stackGroups.frontend },
      { group: 'Containers', items: stackGroups.containers },
      { group: 'Cloud', items: stackGroups.cloud },
      { group: 'Databases', items: stackGroups.databases },
    ],
  },
  nav: {
    home: { path: '', label: 'Home' },
    experience: { path: 'experience', label: 'Experience' },
    education: { path: 'education', label: 'Education' },
    projects: { path: 'projects', label: 'Projects' },
    stack: { path: 'stack', label: 'Stack' },
    contact: { path: 'contact', label: 'Contact' },
  },
  pages: {
    experience: {
      title: 'Experience',
      lead: 'Where I have worked and what I did there.',
    },
    education: {
      title: 'Education',
      lead: 'Where I studied and what I studied there.',
    },
    projects: {
      title: 'Projects',
      lead: 'Things built outside working hours, and what they taught me.',
    },
    stack: {
      title: 'Stack',
      lead: 'The tools I use in production day to day.',
    },
    contact: {
      title: 'Contact',
      lead: 'Email is fastest. I reply within one business day.',
    },
  },
  ui: {
    siteTitle: 'Kamil Matusz - Backend Engineer',
    skip: 'Skip to content',
    nav: 'Navigation',
    language: 'Language',
    status: 'Status',
    available: 'Available',
    busy: 'Busy',
    next: 'Next',
    about: 'About',
    certifications: 'Certifications',
    back: 'Back',
    home: 'Home page',
    notFoundLead: 'This page is not here. Head back to the start or take a look at the projects.',
  },
}
