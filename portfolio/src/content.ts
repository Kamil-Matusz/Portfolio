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
      meta: 'Umowa zlecenie',
      location: 'Praca zdalna',
      period: 'sie 2024 / teraz',
      roles: [
        {
          title: 'Junior Backend Developer',
          period: 'lut 2025 / teraz',
          summary: '',
          points: [],
        },
        {
          title: 'Intern Backend Developer',
          period: 'sie 2024 / lut 2025',
          summary: '',
          points: [
            'Wdrożenie w działanie firmy i pracę zespołów.',
            'Wsparcie przy rozwoju oprogramowania.',
          ],
        },
      ],
      stack: ['Java', 'Spring Framework'],
    },
    {
      company: 'Ideo Software',
      meta: 'Praktyka',
      location: 'Rzeszów, praca hybrydowa',
      period: 'lut 2024 / mar 2024',
      roles: [
        {
          title: 'Junior .NET Developer',
          period: 'lut 2024 / mar 2024',
          summary:
            'Praktyki studenckie. Praca przy wewnętrznym projekcie opartym o mikroserwisy.',
          points: [],
        },
      ],
      stack: ['C#', 'ASP.NET'],
    },
    {
      company: 'Ideo Sp. z o.o.',
      meta: 'Praktyka',
      location: 'Rzeszów, praca hybrydowa',
      period: 'lip 2023',
      roles: [
        {
          title: 'Junior .NET Developer',
          period: 'lip 2023',
          summary:
            'Miesięczna praktyka absolwencka. Prace nad aktualizacją oprogramowania wewnątrz firmy.',
          points: [],
        },
      ],
      stack: ['Vue.js', '.NET'],
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
    {
      group: 'Back-end',
      items: [
        { name: 'Java', icon: 'java' },
        { name: 'Spring', icon: 'spring' },
        { name: 'C#', icon: 'csharp' },
        { name: '.NET', icon: 'dotnet' },
      ],
    },
    {
      group: 'Front-end',
      items: [
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'Vue.js', icon: 'vuejs' },
        { name: 'React', icon: 'react' },
      ],
    },
    {
      group: 'Konteneryzacja',
      items: [
        { name: 'Docker', icon: 'docker' },
        { name: 'Kubernetes', icon: 'kubernetes' },
      ],
    },
    {
      group: 'Chmura',
      items: [{ name: 'Azure', icon: 'azure' }],
    },
    {
      group: 'Bazy danych',
      items: [
        { name: 'MySQL', icon: 'mysql' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'MSSQL', icon: 'mssql' },
        { name: 'MongoDB', icon: 'mongodb' },
      ],
    },
  ],
  certifications: [{ name: 'Azure Fundamentals (AZ-900)', icon: 'azure' }],
  links: [
    { label: 'E-mail', value: 'kamil.matusz@kinguin.net', href: 'mailto:matuszkamil076@gmail.com' },
    { label: 'GitHub', value: 'github.com/Awahir', href: 'https://github.com/Awahir' },
    { label: 'LinkedIn', value: 'linkedin.com/in/…', href: 'https://linkedin.com/' },
  ],
} as const

export const routes = [
  { path: '/', label: 'Start' },
  { path: '/doswiadczenie', label: 'Doświadczenie' },
  { path: '/projekty', label: 'Projekty' },
  { path: '/stack', label: 'Stack' },
  { path: '/kontakt', label: 'Kontakt' },
] as const

export const pages = {
  doswiadczenie: {
    title: 'Doświadczenie',
    lead: 'Gdzie pracowałem i czym się tam zajmowałem.',
  },
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
