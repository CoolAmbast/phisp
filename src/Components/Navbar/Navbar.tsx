import type { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface NavbarProps {
  links: { label: string; href: string }[];
  ctaLabel: string;
  ctaHref: string;
}

const Navbar: FC<NavbarProps> = ({ links, ctaLabel, ctaHref }) => {
  return (
    <nav data-name="Primary nav" aria-label="Primary navigation">
      <div className="nav-inner">
        <div className="nav-brand">
          <Typography component="span" className="nav-brand-name">
            Pragya Heritage International
          </Typography>
          <Typography component="span" className="nav-brand-tagline">
            Equity is Excellence
          </Typography>
        </div>

        <Box className="nav-desktop">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href={ctaHref}>
            {ctaLabel}
          </a>
        </Box>

        <details className="nav-mobile">
          <summary className="nav-toggle" aria-label="Open navigation menu">
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              aria-hidden="true"
            >
              <rect y="0" width="22" height="2" fill="currentColor" />
              <rect y="7" width="22" height="2" fill="currentColor" />
              <rect y="14" width="22" height="2" fill="currentColor" />
            </svg>
          </summary>
          <Box className="nav-drawer">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href={ctaHref}>{ctaLabel}</a>
          </Box>
        </details>
      </div>
    </nav>
  );
};

export default Navbar;
