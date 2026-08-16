import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

/* -----------------------------------------------------------------------------
   Footer
   A hand-written shadow of @docusaurus/theme-classic's Footer, ported 1:1 from
   the marketing site's src/components/chrome/site-footer.tsx so the two sites
   share one footer. The inline style objects are kept exactly as they are in
   the source (rather than lifted into custom.css) so the two files stay
   diffable; only the responsive grid reflow lives in CSS, as it does there.

   themeConfig.footer is NOT read here — this component owns the content, and
   the config block has been removed from docusaurus.config.js.

   Three deliberate divergences from the source:
   - next-intl is gone. The docs site is English-only, so the strings are the
     messages/en.json → Footer block inlined, and every site-relative href is
     absolutised against SITE. SITE is deliberately locale-FREE: the main site
     resolves an unprefixed path to the visitor's own locale (NEXT_LOCALE
     cookie, then Accept-Language) before serving it, so pinning /en here would
     force English on a German reader for every link in this footer.
   - The "Cookie settings" button is dropped: it opens the main site's consent
     manager, which does not exist here, and a dead control is worse than a
     missing one. The Cookie Notice link remains.
   - The copyright year is computed rather than hardcoded.
   -------------------------------------------------------------------------- */

const SITE = 'https://appgineering.com';

const columns = [
  {
    heading: 'Products',
    links: [
      {label: 'All Products', href: `${SITE}/products`},
      {label: 'ATVO', href: `${SITE}/products/atvo`},
      {label: 'Themes', href: `${SITE}/products/themes`},
      {label: 'Live Timing', href: `${SITE}/products/live-timing`},
      {label: 'Launcher', href: `${SITE}/products/launcher`},
      {label: 'Shop', href: `${SITE}/shop`},
    ],
  },
  {
    heading: 'Services',
    links: [
      {
        label: 'Custom Themes',
        href: `${SITE}/services/custom-theme-development`,
      },
      {
        label: 'Software Development',
        href: `${SITE}/services/custom-software-development`,
      },
      {
        label: 'Custom Apps',
        href: `${SITE}/services/custom-app-development`,
      },
    ],
  },
  {
    heading: 'Company',
    links: [
      {label: 'About Us', href: `${SITE}/about`},
      {label: 'Contact', href: `${SITE}/about#contact`},
      {label: 'My Account', href: `${SITE}/account`},
    ],
  },
  {
    heading: 'Connect',
    links: [
      {label: 'Discord', href: 'https://discord.appgineering.com'},
      {label: 'Community Forum', href: `${SITE}/forum`},
      {label: 'Documentation', href: 'https://docs.appgineering.com'},
      {label: 'Live Timing app', href: 'https://timing.appgineering.com/'},
      {
        label: 'YouTube',
        href: 'https://www.youtube.com/@appgineering-atvo4773',
      },
      {label: 'info@appgineering.com', href: 'mailto:info@appgineering.com'},
    ],
  },
];

// Every slug here is a route on the main site, reached unprefixed so the
// locale is resolved per visitor. They are the main site's URLs, not ours:
// renaming one there breaks the link here, silently and on another domain.
const legalLinks = [
  {label: 'Legal Notice', slug: 'legal-notice'},
  {label: 'Terms', slug: 'terms-and-conditions'},
  {label: 'Withdrawal', slug: 'right-of-withdrawal'},
  {label: 'Privacy Policy', slug: 'privacy-policy'},
  {label: 'Cookie Notice', slug: 'cookies'},
];

export default function Footer(): JSX.Element {
  return (
    <footer
      className="apg-footer ft-on-dark"
      style={{padding: '72px 48px 32px'}}>
      <div
        className="apg-footer-grid"
        style={{
          display: 'grid',
          // minmax(0, 1fr), not 1fr: a bare 1fr track takes its widest item as
          // its minimum and so refuses to shrink, which pushed the whole grid
          // past the viewport in the tablet band.
          gridTemplateColumns: '2fr repeat(4, minmax(0, 1fr))',
          gap: 48,
          maxWidth: 'var(--page-max)',
          margin: '0 auto',
        }}>
        <div>
          {/* The white cut on the near-black band, same file and reasoning as
              the navbar wordmark. */}
          <a
            href={SITE}
            className="ft-focus"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              flexShrink: 0,
            }}>
            <img
              src={useBaseUrl('/img/logos/logo_white.png')}
              alt="Appgineering"
              width={595}
              height={88}
              style={{height: 24, width: 'auto', display: 'block'}}
            />
          </a>
          <p
            className="ft-muted"
            style={{
              fontSize: 13,
              fontWeight: 500,
              marginTop: 20,
              lineHeight: 1.6,
              maxWidth: 300,
              // The source sets text-wrap: pretty here; this site already sets
              // it on body (custom.css section 3), so it is inherited.
            }}>
            Appgineering GbR is a small German software studio. We build
            broadcast tools for iRacing, Apple-platform apps, and the systems
            behind them. Founded in 2020.
          </p>
          <div
            style={{
              marginTop: 24,
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--surface-dark-text-muted)',
            }}>
            <span>info@appgineering.com</span>
          </div>
        </div>
        {columns.map((column) => (
          <div key={column.heading}>
            {/* --apg-blue-on-dark, not --apg-blue: the brand blue measures
                3.07:1 here and fails AA at this size. */}
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                fontStyle: 'italic',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--apg-blue-on-dark)',
                marginBottom: 16,
              }}>
              {column.heading}
              {/* U+2060 word joiner, so the guillemet cannot be split from the
                  heading it trails. */}
              <span aria-hidden="true" className="ft-chevrons">
                {'⁠›'}
              </span>
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                fontSize: 13,
                fontWeight: 500,
              }}>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="ft-navlink ft-focus">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        style={{
          maxWidth: 'var(--page-max)',
          margin: '56px auto 0',
          paddingTop: 22,
          borderTop: '1px solid var(--surface-dark-hairline)',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 12,
          fontWeight: 500,
          color: 'var(--surface-dark-text-muted)',
          flexWrap: 'wrap',
          gap: 24,
        }}>
        <span>
          {`© ${new Date().getFullYear()} Appgineering GbR · ATVO is not affiliated with iRacing.com Motorsport Simulations.`}
        </span>
        <nav
          aria-label="Legal"
          style={{display: 'flex', gap: 18, flexWrap: 'wrap'}}>
          {legalLinks.map((link) => (
            <a
              key={link.slug}
              href={`${SITE}/${link.slug}`}
              className="ft-navlink ft-focus">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
