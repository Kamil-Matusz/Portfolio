export const profile = {
  firstName: 'Kamil',
  lastName: 'Matusz',
  role: 'Backend Engineer',
  location: 'Warszawa, PL',
  timezone: 'Europe/Warsaw',
  available: true,
  availableNote: 'Otwarty na rozmowy',
  thesis:
    'Buduję systemy backendowe, które da się utrzymać rok po tym, jak przestanę przy nich siedzieć.',
  intro: [
    'Projektuję i rozwijam usługi obsługujące ruch produkcyjny - od modelu domeny i API, przez warstwę danych, po obserwowalność i wdrożenia.',
    'Najlepiej czuję się tam, gdzie trzeba uporządkować istniejący system: rozplątać zależności, dołożyć testy i sprawić, żeby zespół znowu mógł szybko dowozić.',
  ],
  metrics: [
    { value: '8', unit: 'lat', label: 'w komercyjnym backendzie' },
    { value: '20+', unit: '', label: 'wdrożonych usług' },
    { value: '99.9', unit: '%', label: 'dostępności utrzymywanej produkcji' },
  ],
  work: [
    {
      company: 'Kinguin',
      title: 'Senior Backend Engineer',
      from: '2022',
      to: 'teraz',
      summary:
        'Rozwój usług płatnościowych i katalogowych obsługujących ruch marketplace.',
      points: [
        'Rozbicie monolitu na usługi domenowe bez przerwy w działaniu sprzedaży.',
        'Wprowadzenie kontraktowych testów integracyjnych - spadek regresji na produkcji.',
        'Mentoring zespołu w zakresie wzorców testowania i przeglądów kodu.',
      ],
      stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Kafka'],
    },
    {
      company: 'Poprzednia firma',
      title: 'Backend Engineer',
      from: '2019',
      to: '2022',
      summary: 'Utrzymanie i rozwój platformy B2B dla klientów enterprise.',
      points: [
        'Migracja warstwy danych na Entity Framework Core z pełnym pokryciem migracji.',
        'Redukcja czasu odpowiedzi kluczowych endpointów o rząd wielkości.',
      ],
      stack: ['.NET', 'EF Core', 'Azure', 'SQL Server'],
    },
  ],
  projects: [
    {
      name: 'Nazwa projektu',
      year: '2025',
      summary:
        'Jedno zdanie o tym, co projekt robi i dla kogo - bez marketingu, konkretnie.',
      stack: ['TypeScript', 'React', 'Vite'],
      href: 'https://github.com/',
    },
    {
      name: 'Drugi projekt',
      year: '2024',
      summary: 'Co było trudne i jak zostało rozwiązane.',
      stack: ['Java', 'Spring'],
      href: 'https://github.com/',
    },
  ],
  stack: [
    { group: 'Języki', items: ['Java', 'C#', 'TypeScript', 'SQL'] },
    { group: 'Frameworki', items: ['Spring Boot', '.NET', 'EF Core', 'React'] },
    { group: 'Dane', items: ['PostgreSQL', 'SQL Server', 'Redis', 'Kafka'] },
    { group: 'Infra', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Azure'] },
  ],
  links: [
    { label: 'E-mail', value: 'kamil.matusz@kinguin.net', href: 'mailto:kamil.matusz@kinguin.net' },
    { label: 'GitHub', value: 'github.com/Awahir', href: 'https://github.com/Awahir' },
    { label: 'LinkedIn', value: 'linkedin.com/in/…', href: 'https://linkedin.com/' },
  ],
} as const

export const routes = [
  { path: '/', label: 'Start' },
  { path: '/projekty', label: 'Projekty' },
  { path: '/stack', label: 'Stack' },
  { path: '/kontakt', label: 'Kontakt' },
] as const

export const pages = {
  projekty: {
    title: 'Projekty',
    lead: 'Rzeczy zbudowane poza godzinami pracy i to, czego nauczyły.',
  },
  stack: {
    title: 'Stack',
    lead: 'Narzędzia, których używam na co dzień w produkcji.',
  },
  kontakt: {
    title: 'Kontakt',
    lead: 'Najszybciej mailem. Odpisuję w ciągu dnia roboczego.',
  },
} as const
