import type { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export interface FooterLink {
  label: string;
  href: string;
}

export interface ContactItem {
  icon: ReactNode;
  title: string;
  lines: string[];
}

export interface FooterProps {
  brandName: ReactNode;
  brandTagline: string;
  brandDescription: string;
  quickLinks: FooterLink[];
  academicLinks: FooterLink[];
  contactItems: ContactItem[];
  legalText: ReactNode;
  cbseBadge: string;
  cbseNum: string;
}

const Footer: FC<FooterProps> = ({
  brandName,
  brandTagline,
  brandDescription,
  quickLinks,
  academicLinks,
  contactItems,
  legalText,
  cbseBadge,
  cbseNum,
}) => {
  return (
    <Box
      component="footer"
      id="contact"
      data-name="Site footer"
      aria-label="Site footer"
      sx={{
        bgcolor: '#1C1A17',
        color: '#F0EAE0',
        pt: { xs: 5, sm: 7, md: 8 },
        pb: { xs: 3, sm: 4 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Top Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: '2fr 1fr 1fr 1.5fr',
            },
            gap: { xs: 3.5, sm: 4, md: 5 },
            pb: { xs: 3.5, sm: 4.5 },
            mb: { xs: 3, sm: 4 },
            borderBottom: '1px solid rgba(240, 234, 224, 0.15)',
          }}
        >
          {/* Brand */}
          <Box>
            <Typography
              sx={{
                fontFamily: 'adobe-caslon-pro, "Caslon", georgia, serif',
                fontSize: { xs: '1.35rem', sm: '1.5rem' },
                fontWeight: 400,
                color: '#F0EAE0',
                lineHeight: 1.25,
                mb: 0.5,
              }}
            >
              {brandName}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#C09A3E',
                mb: 1.5,
              }}
            >
              {brandTagline}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: '0.84rem',
                color: 'rgba(240, 234, 224, 0.65)',
                lineHeight: 1.7,
                maxWidth: 280,
              }}
            >
              {brandDescription}
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography
              sx={{
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#C09A3E',
                mb: 1.75,
              }}
            >
              Quick Links
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                p: 0,
                m: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              {quickLinks.map((link) => (
                <Box key={link.label} component="li">
                  <Box
                    component="a"
                    href={link.href}
                    sx={{
                      fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                      fontSize: '0.875rem',
                      color: 'rgba(240, 234, 224, 0.75)',
                      textDecoration: 'none',
                      transition: 'color 150ms ease',
                      '&:hover': {
                        color: '#F0EAE0',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {link.label}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Academics Links */}
          <Box>
            <Typography
              sx={{
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#C09A3E',
                mb: 1.75,
              }}
            >
              Academics
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                p: 0,
                m: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              {academicLinks.map((link) => (
                <Box key={link.label} component="li">
                  <Box
                    component="a"
                    href={link.href}
                    sx={{
                      fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                      fontSize: '0.875rem',
                      color: 'rgba(240, 234, 224, 0.75)',
                      textDecoration: 'none',
                      transition: 'color 150ms ease',
                      '&:hover': {
                        color: '#F0EAE0',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {link.label}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Contact Column */}
          <Box>
            <Typography
              sx={{
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#C09A3E',
                mb: 1.75,
              }}
            >
              Contact &amp; Location
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}>
              {contactItems.map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.25,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color: '#C09A3E',
                      flexShrink: 0,
                      mt: 0.35,
                      '& svg': { width: 18, height: 18 },
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      component="strong"
                      sx={{
                        display: 'block',
                        fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: '#F0EAE0',
                        mb: 0.25,
                      }}
                    >
                      {item.title}
                    </Typography>
                    {item.lines.map((line, i) => (
                      <Typography
                        key={i}
                        component="span"
                        sx={{
                          display: 'block',
                          fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                          fontSize: '0.8125rem',
                          color: 'rgba(240, 234, 224, 0.72)',
                          lineHeight: 1.5,
                        }}
                      >
                        {line}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Footer Bottom */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
              fontSize: '0.75rem',
              color: 'rgba(240, 234, 224, 0.5)',
              lineHeight: 1.6,
            }}
          >
            {legalText}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              gap: 1.25,
            }}
          >
            <Box
              sx={{
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                bgcolor: '#8B1A2F',
                px: 1,
                py: 0.35,
              }}
            >
              {cbseBadge}
            </Box>
            <Typography
              sx={{
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: '0.75rem',
                color: 'rgba(240, 234, 224, 0.6)',
                letterSpacing: '0.04em',
              }}
              dangerouslySetInnerHTML={{ __html: cbseNum }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
