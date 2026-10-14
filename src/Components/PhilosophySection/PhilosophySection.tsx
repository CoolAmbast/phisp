import type { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export interface PhilosophySectionProps {
  eyebrow: string;
  sectionNum: string;
  heading: ReactNode;
  bodyParagraphs: string[];
  quoteText: string;
  quoteAttribution: string;
}

const PhilosophySection: FC<PhilosophySectionProps> = ({
  eyebrow,
  sectionNum,
  heading,
  bodyParagraphs,
  quoteText,
  quoteAttribution,
}) => {
  return (
    <Box
      component="section"
      id="philosophy"
      aria-label="Our Philosophy"
      sx={{
        bgcolor: '#1C1A17',
        color: '#F0EAE0',
        py: { xs: 5, sm: 7, md: 9, lg: 11 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(to right, #8B1A2F, #C09A3E, #8B1A2F)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
            gap: { xs: 3, sm: 4, md: 6 },
            alignItems: 'start',
          }}
        >
          {/* Label Column with Number */}
          <Box sx={{ pt: { md: 1 } }}>
            <Typography
              sx={{
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#C09A3E',
                mb: { xs: 1, md: 2 },
              }}
            >
              {eyebrow}
            </Typography>
            <Typography
              aria-hidden="true"
              sx={{
                fontFamily: 'adobe-caslon-pro, "Caslon", georgia, serif',
                fontSize: { xs: '3.5rem', sm: '4.5rem', md: '6.5rem' },
                fontWeight: 400,
                lineHeight: 1,
                color: 'rgba(240, 234, 224, 0.1)',
                userSelect: 'none',
              }}
            >
              {sectionNum}
            </Typography>
          </Box>

          {/* Body Column */}
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'adobe-caslon-pro, "Caslon", georgia, serif',
                fontSize: { xs: 'clamp(1.5rem, 5vw, 2.15rem)', md: 'clamp(2rem, 3.5vw, 3rem)' },
                fontWeight: 400,
                color: '#F0EAE0',
                lineHeight: 1.15,
                mb: { xs: 2, sm: 3 },
              }}
            >
              {heading}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {bodyParagraphs.map((paragraph, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                    fontSize: { xs: '0.925rem', sm: '1rem', md: '1.125rem' },
                    color: 'rgba(240, 234, 224, 0.78)',
                    lineHeight: 1.75,
                    maxWidth: 640,
                    '& em': {
                      fontStyle: 'italic',
                      color: '#E8D5A3',
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </Box>

            {/* Pull Quote */}
            <Box
              sx={{
                mt: { xs: 3, sm: 4, md: 5 },
                pl: { xs: 2, sm: 3 },
                borderLeft: '3px solid #C09A3E',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'adobe-caslon-pro, "Caslon", georgia, serif',
                  fontSize: { xs: '1.15rem', sm: '1.35rem', md: '1.5rem' },
                  fontStyle: 'italic',
                  color: '#F0EAE0',
                  lineHeight: 1.4,
                  mb: 1,
                }}
              >
                {quoteText}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#C09A3E',
                }}
              >
                {quoteAttribution}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PhilosophySection;
