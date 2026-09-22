import { stackGroups } from './shared'
import type { Content } from './types'

export const pl: Content = {
  locale: 'pl-PL',
  profile: {
    role: 'Junior Backend Engineer',
    availableNote: 'Otwarty na rozmowy',
    intro: [
      'Pracuję jako junior backend developer w Kinguin. Buduję i utrzymuję aplikacje serwerowe - REST API i systemy rozproszone w Javie i Spring Boot, z MongoDB po stronie danych.',
      'Tak samo ważna jest dla mnie druga połowa tej pracy: wdrożenia i skalowanie na Kubernetesie, stabilność i szybkie usuwanie błędów, monitoring i alerty w Prometheusie i Grafanie. Ścieżka akademicka idzie w tę samą stronę - po inżynierce z informatyki studia magisterskie z technologii chmurowych i DevOps.',
    ],
    metrics: [
      { value: '2', unit: 'lata', label: 'w komercyjnym backendzie' },
      { value: 'B2', unit: '', label: 'angielski w pracy' },
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
        stack: ['Java', 'Spring Framework', 'MongoDB'],
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
    education: [
      {
        school: 'Wyższa Szkoła Informatyki i Zarządzania w Rzeszowie',
        degree: 'Studia magisterskie',
        field: 'Informatyka - Technologie chmurowe i DevOps',
        period: 'kwi 2025 / lip 2026',
      },
      {
        school: 'Uniwersytet Rzeszowski',
        degree: 'Studia inżynierskie',
        field: 'Informatyka',
        period: 'paź 2021 / lut 2025',
      },
    ],
    projects: [
      {
        name: 'CertiBlock',
        year: '2025-2026',
        summary:
          'Część badawcza pracy magisterskiej. System mikroserwisowy porównujący wydajność sieci Ethereum i Polygon przy rejestracji oraz weryfikacji certyfikatów cyfrowych. Zbiera metryki czasu i kosztu transakcji i pokazuje porównanie na żywo.',
        stack: ['.NET 9', 'C#', 'PostgreSQL', 'MongoDB', 'RabbitMQ', 'InfluxDB', 'React', 'Docker'],
        href: 'https://github.com/Kamil-Matusz/CertiBlock',
      },
      {
        name: 'Asklepios',
        year: '2024-2025',
        summary:
          'Praca inżynierska. System wspierający pracę placówek medycznych: kartoteki pacjentów, badania, grafiki zabiegów i sal operacyjnych oraz obsługa poradni, z dostępem rozdzielonym na role personelu.',
        stack: ['.NET 7', 'C#', 'EF Core', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Hangfire', 'Vue', 'Docker'],
        href: 'https://github.com/Kamil-Matusz/Asklepios',
      },
      {
        name: 'Shot Blasting Machines',
        year: '2024',
        summary:
          'Projekt zespołowy na studiach, prowadzony w Scrumie. Aplikacja desktopowa dla producenta śrutownic: zamówienia i ich personalizacja, przebieg produkcji z kontrolą jakości, magazyn oraz faktury i listy zadań.',
        stack: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Vue', 'TypeScript', 'Electron'],
        href: 'https://github.com/Kamil-Matusz/Shot-Blasting-Machines',
      },
      {
        name: 'StockMarket',
        year: '2024',
        summary:
          'Model giełd i instrumentów inwestycyjnych - ETF-ów, kryptowalut, NFT i surowców - w bazie grafowej Neo4j, razem z powiązaniami i klasyfikacją ryzyka. Dane zbierają własne scrapery w Pythonie, które zasilają graf.',
        stack: ['Python', 'Neo4j', 'Cypher'],
        href: 'https://github.com/Kamil-Matusz/StockMarket',
      },
    ],
    stack: [
      { group: 'Back-end', items: stackGroups.backend },
      { group: 'Front-end', items: stackGroups.frontend },
      { group: 'Konteneryzacja', items: stackGroups.containers },
      { group: 'Chmura', items: stackGroups.cloud },
      { group: 'Bazy danych', items: stackGroups.databases },
    ],
  },
  nav: {
    home: { path: '', label: 'Start' },
    experience: { path: 'doswiadczenie', label: 'Doświadczenie' },
    education: { path: 'wyksztalcenie', label: 'Wykształcenie' },
    projects: { path: 'projekty', label: 'Projekty' },
    stack: { path: 'stack', label: 'Stack' },
    contact: { path: 'kontakt', label: 'Kontakt' },
  },
  pages: {
    experience: {
      title: 'Doświadczenie',
      lead: 'Gdzie pracowałem i czym się tam zajmowałem.',
    },
    education: {
      title: 'Wykształcenie',
      lead: 'Gdzie się uczyłem i w jakim kierunku.',
    },
    projects: {
      title: 'Projekty',
      lead: 'Rzeczy zbudowane poza godzinami pracy i to, czego nauczyły.',
    },
    stack: {
      title: 'Stack',
      lead: 'Używane narzędzia i technologie.',
    },
    contact: {
      title: 'Kontakt',
      lead: 'Najszybciej mailem. Odpisuję w ciągu dnia roboczego.',
    },
  },
  ui: {
    siteTitle: 'Kamil Matusz - Backend Engineer',
    skip: 'Przejdź do treści',
    nav: 'Nawigacja',
    language: 'Język',
    status: 'Status',
    available: 'Dostępny',
    busy: 'Zajęty',
    next: 'Dalej',
    about: 'O mnie',
    certifications: 'Certyfikaty',
    back: 'Wróć',
    home: 'Strona główna',
    notFoundLead: 'Tej strony tu nie ma. Wróć na start albo zajrzyj do projektów.',
  },
}
