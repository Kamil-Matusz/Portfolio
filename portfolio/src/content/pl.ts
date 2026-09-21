import { stackGroups } from './shared'
import type { Content } from './types'

export const pl: Content = {
  locale: 'pl-PL',
  profile: {
    role: 'Junior Backend Engineer',
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
      lead: 'Narzędzia, których używam na co dzień w produkcji.',
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
