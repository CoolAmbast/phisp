import { useState, useEffect, type FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import defaultLogo from '../../assets/phisp.png';
import AppButton from '../Common/Button/AppButton';

export interface NavbarProps {
  logoSrc?: string;
  links: { label: string; href: string }[];
  ctaLabel: string;
  ctaHref: string;
}

const Navbar: FC<NavbarProps> = ({ logoSrc = defaultLogo, links, ctaLabel, ctaHref }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <Box
      component="nav"
      data-name="Primary nav"
      aria-label="Primary navigation"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        height: { xs: 64, md: 72 },
        bgcolor: '#FFFFFF',
        borderBottom: '1px solid #DDD8CF',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 1320,
          mx: 'auto',
          px: { xs: 1.5, sm: 2.5, md: 4 },
        }}
      >
        {/* Brand with Logo */}
        <Box
          component="a"
          href="#about"
          onClick={closeMenu}
          aria-label="Pragya Heritage International - Home"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: { xs: 1, sm: 1.25 },
            textDecoration: 'none',
            color: 'inherit',
            flexShrink: 1,
            minWidth: 0,
            transition: 'opacity 200ms ease',
            '&:hover': { opacity: 0.9 },
          }}
        >
          {logoSrc && (
            <Box
              component="img"
              src={logoSrc}
              alt="Pragya Heritage International School Logo"
              sx={{
                height: { xs: 36, sm: 42, md: 48 },
                width: { xs: 36, sm: 42, md: 48 },
                objectFit: 'contain',
                flexShrink: 0,
                display: 'block',
              }}
            />
          )}
          <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <Typography
              component="span"
              sx={{
                fontFamily: 'adobe-caslon-pro, "Caslon", georgia, serif',
                fontSize: { xs: '0.8rem', sm: '0.92rem', md: '1.125rem' },
                fontWeight: 700,
                color: '#1C1A17',
                lineHeight: 1.15,
                letterSpacing: '0.01em',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: { xs: 'normal', sm: 'nowrap' },
                maxWidth: { xs: 190, sm: 'none' },
              }}
            >
              Pragya Heritage International
            </Typography>
            <Typography
              component="span"
              sx={{
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: { xs: '0.625rem', sm: '0.72rem' },
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#C09A3E',
                lineHeight: 1.2,
                display: { xs: 'none', sm: 'block' },
              }}
            >
              Equity is Excellence
            </Typography>
          </Box>
        </Box>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: { md: 2.5, lg: 3.5 },
          }}
        >
          {links.map((link) => (
            <Box
              key={link.href}
              component="a"
              href={link.href}
              sx={{
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: '#4A4640',
                textDecoration: 'none',
                transition: 'color 200ms ease',
                py: 1,
                '&:hover': { color: '#8B1A2F' },
              }}
            >
              {link.label}
            </Box>
          ))}
          <AppButton variant="primary" size="small" href={ctaHref}>
            {ctaLabel}
          </AppButton>
        </Box>

        {/* Mobile Toggle Button */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Box
            component="button"
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: '#FFFFFF',
              border: '1px solid #DDD8CF',
              cursor: 'pointer',
              p: 0.75,
              minWidth: 42,
              minHeight: 42,
              color: mobileMenuOpen ? '#8B1A2F' : '#1C1A17',
              borderColor: mobileMenuOpen ? '#8B1A2F' : '#DDD8CF',
              borderRadius: 1,
              transition: 'all 200ms ease',
              '&:hover': {
                bgcolor: '#F9F6F0',
                borderColor: '#8B1A2F',
                color: '#8B1A2F',
              },
            }}
          >
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="3" y1="2" x2="19" y2="14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="3" y1="14" x2="19" y2="2" strokeWidth="2.2" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <rect y="0" width="22" height="2" fill="currentColor" />
                  <rect y="7" width="22" height="2" fill="currentColor" />
                  <rect y="14" width="22" height="2" fill="currentColor" />
                </>
              )}
            </svg>
          </Box>

          {/* Drawer Backdrop and Drawer Menu */}
          {mobileMenuOpen && (
            <>
              <Box
                onClick={closeMenu}
                aria-hidden="true"
                sx={{
                  position: 'fixed',
                  top: { xs: 64, md: 72 },
                  insetInline: 0,
                  bottom: 0,
                  bgcolor: 'rgba(28, 26, 23, 0.45)',
                  backdropFilter: 'blur(3px)',
                  zIndex: 1098,
                  animation: 'fadeIn 200ms ease forwards',
                  '@keyframes fadeIn': {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                  },
                }}
              />
              <Box
                role="dialog"
                aria-label="Mobile Navigation"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5,
                  position: 'fixed',
                  top: { xs: 64, md: 72 },
                  left: 0,
                  right: 0,
                  maxHeight: 'calc(100vh - 72px)',
                  overflowY: 'auto',
                  bgcolor: '#FFFFFF',
                  borderBottom: '2px solid #8B1A2F',
                  p: { xs: 2.25, sm: 3 },
                  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.15)',
                  zIndex: 1099,
                  animation: 'slideDown 250ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  '@keyframes slideDown': {
                    from: { opacity: 0, transform: 'translateY(-8px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                {links.map((link) => (
                  <Box
                    key={link.href}
                    component="a"
                    href={link.href}
                    onClick={closeMenu}
                    sx={{
                      fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: '#4A4640',
                      textDecoration: 'none',
                      py: 1,
                      borderBottom: '1px solid #DDD8CF',
                      transition: 'color 150ms ease, padding-left 150ms ease',
                      '&:hover': {
                        color: '#8B1A2F',
                        pl: 0.5,
                      },
                    }}
                  >
                    {link.label}
                  </Box>
                ))}
                <Box sx={{ pt: 1 }}>
                  <AppButton
                    variant="primary"
                    href={ctaHref}
                    fullWidthOnMobile
                    onClick={closeMenu}
                  >
                    {ctaLabel}
                  </AppButton>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
