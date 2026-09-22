import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { certifications, hrefFor, iconFor, identity, links, useLang, useSite } from './content'
import type { IconKey, RouteId, Tech } from './content'

function Section({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: ReactNode
}) {
  return (
    <section id={id} className="section reveal" aria-labelledby={`${id}-label`}>
      <h2 className="section__label mono" id={`${id}-label`}>
        {label}
      </h2>
      <div className="section__body">{children}</div>
    </section>
  )
}

function PageHead({ title, lead }: { title: string; lead: string }) {
  const { profile } = useSite()

  return (
    <header className="pagehead reveal">
      <p className="mono">
        {identity.firstName} {identity.lastName} / {profile.role}
      </p>
      <h1 className="pagehead__title">{title}</h1>
      <p className="pagehead__lead">{lead}</p>
    </header>
  )
}

function Mark({ icon, className = 'icon' }: { icon: IconKey; className?: string }) {
  return (
    <svg
      className={className}
      style={{ color: `var(--brand-${icon})` }}
      aria-hidden="true"
      focusable="false"
    >
      <use href={`#i-${icon}`} />
    </svg>
  )
}

function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className="tags">
      {items.map((item) => {
        const icon = iconFor(item)

        return (
          <li key={item} className="tag">
            {icon && <Mark icon={icon} className="icon icon--tag" />}
            {item}
          </li>
        )
      })}
    </ul>
  )
}

function Next({ to }: { to: RouteId }) {
  const lang = useLang()
  const { nav, ui } = useSite()

  return (
    <nav className="next reveal">
      <Link className="next__link" to={hrefFor(lang, to)}>
        <span className="mono">{ui.next}</span>
        <span className="next__label">{nav[to].label}</span>
        <span className="next__arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </nav>
  )
}

function Chips({ items }: { items: readonly Tech[] }) {
  return (
    <ul className="chips">
      {items.map((item) => (
        <li key={item.name} className="chip">
          <Mark icon={item.icon} />
          {item.name}
        </li>
      ))}
    </ul>
  )
}

export function Home() {
  const { profile, ui } = useSite()

  return (
    <>
      <header className="masthead">
        <h1 className="masthead__name">
          <span>{identity.firstName}</span>
          <span>{identity.lastName}</span>
        </h1>
        <div className="masthead__meta mono">
          <span>{profile.role}</span>
          <span>{identity.location}</span>
          <span>{profile.availableNote}</span>
        </div>
      </header>

      <Section id="about" label={ui.about}>
        <div>
          {profile.intro.map((paragraph) => (
            <p key={paragraph} className="prose">
              {paragraph}
            </p>
          ))}
        </div>
        <ul className="metrics">
          {profile.metrics.map((metric) => (
            <li key={metric.label}>
              <p className="metric__value">
                {metric.value}
                {metric.unit && <small>{metric.unit}</small>}
              </p>
              <p className="metric__label">{metric.label}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Next to="experience" />
    </>
  )
}

export function Experience() {
  const { pages, profile } = useSite()

  return (
    <>
      <PageHead {...pages.experience} />
      <div className="page__body page__body--flow reveal">
        {profile.work.map((job) => {
          const stacked = job.roles.length > 1
          return (
            <article key={job.company} className="entry">
              <p className="mono">{job.period}</p>
              <div>
                <h2 className="entry__title">{job.company}</h2>
                <p className="entry__meta mono">
                  {job.meta} / {job.location}
                </p>
                <ul className={stacked ? 'roles roles--stacked' : 'roles'}>
                  {job.roles.map((role) => (
                    <li key={role.title} className="role">
                      <h3 className="role__title">{role.title}</h3>
                      {stacked && <p className="role__period mono">{role.period}</p>}
                      {role.summary && <p className="entry__summary">{role.summary}</p>}
                      {role.points.length > 0 && (
                        <ul className="entry__points">
                          {role.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <Tags items={job.stack} />
              </div>
            </article>
          )
        })}
      </div>
      <Next to="education" />
    </>
  )
}

export function Education() {
  const { pages, profile } = useSite()

  return (
    <>
      <PageHead {...pages.education} />
      <div className="page__body page__body--flow reveal">
        {profile.education.map((school) => (
          <article key={school.school} className="entry">
            <p className="mono">{school.period}</p>
            <div>
              <h2 className="entry__title">{school.school}</h2>
              <p className="entry__meta mono">
                {school.degree} / {school.field}
              </p>
            </div>
          </article>
        ))}
      </div>
      <Next to="projects" />
    </>
  )
}

export function Projects() {
  const { pages, profile } = useSite()

  return (
    <>
      <PageHead {...pages.projects} />
      <div className="page__body reveal">
        {profile.projects.map((project) => (
          <a
            key={project.name}
            className="project"
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="mono project__year">{project.year}</span>
            <div>
              <h2 className="entry__title">{project.name}</h2>
              <p className="entry__summary">{project.summary}</p>
              <Tags items={project.stack} />
            </div>
            <span className="project__arrow" aria-hidden="true">
              →
            </span>
          </a>
        ))}
      </div>
    </>
  )
}

export function Stack() {
  const { pages, profile, ui } = useSite()

  return (
    <>
      <PageHead {...pages.stack} />
      <div className="page__body reveal">
        {profile.stack.map((group) => (
          <div key={group.group} className="stack-group">
            <h2 className="mono">{group.group}</h2>
            <Chips items={group.items} />
          </div>
        ))}
        <div className="stack-group">
          <h2 className="mono">{ui.certifications}</h2>
          <Chips items={certifications} />
        </div>
      </div>
    </>
  )
}

export function Contact() {
  const { pages } = useSite()

  return (
    <>
      <PageHead {...pages.contact} />
      <div className="page__body reveal">
        {links.map((link) => (
          <a
            key={link.label}
            className="link-row"
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
          >
            <span className="mono">{link.label}</span>
            <span className="link-row__value">{link.value}</span>
          </a>
        ))}
      </div>
    </>
  )
}

export function NotFound() {
  const lang = useLang()
  const { ui } = useSite()

  return (
    <>
      <PageHead title="404" lead={ui.notFoundLead} />
      <div className="page__body reveal">
        <Link className="link-row" to={hrefFor(lang, 'home')}>
          <span className="mono">{ui.back}</span>
          <span className="link-row__value">{ui.home}</span>
        </Link>
      </div>
    </>
  )
}
