import type { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export interface PillarData {
  icon: ReactNode;
  title: string;
  description: string;
  tag: string;
}

export interface PillarsSectionProps {
  eyebrow: string;
  heading: string;
  introText: string;
  pillars: PillarData[];
}

const PillarsSection: FC<PillarsSectionProps> = ({
  eyebrow,
  heading,
  introText,
  pillars,
}) => {
  return (
    <Box
      component="section"
      id="pillars"
      aria-label="Our Pillars"
      sx={{
        bgcolor: '#FFFFFF',
        py: { xs: 5, sm: 7, md: 9, lg: 11 },
        borderTop: '1px solid #DDD8CF',
        borderBottom: '1px solid #DDD8CF',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Header */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' },
            gap: { xs: 2.5, md: 5 },
            alignItems: 'start',
            mb: { xs: 3.5, sm: 4.5, md: 5.5 },
          }}
        >
          <Box>
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
              {eyebrow}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'adobe-caslon-pro, "Caslon", georgia, serif',
                fontSize: { xs: 'clamp(1.65rem, 5vw, 2.25rem)', md: 'clamp(2.25rem, 3.5vw, 3rem)' },
                fontWeight: 400,
                color: '#1C1A17',
                lineHeight: 1.1,
              }}
            >
              {heading}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
              fontSize: { xs: '0.925rem', sm: '1rem', md: '1.125rem' },
              color: '#4A4640',
              lineHeight: 1.7,
              pt: { md: 0.5 },
            }}
          >
            {introText}
          </Typography>
        </Box>

        {/* Pillars List */}
        <Box
          component="ul"
          sx={{
            listStyle: 'none',
            p: 0,
            m: 0,
            borderTop: '1px solid #DDD8CF',
          }}
        >
          {pillars.map((pillar) => (
            <Box
              key={pillar.title}
              component="li"
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '2.5rem 1fr',
                  sm: '2.75rem 1fr auto',
                  md: '3rem 1fr auto',
                },
                alignItems: 'start',
                gap: { xs: 1.5, sm: 2, md: 2.5 },
                py: { xs: 2, sm: 2.5, md: 3 },
                borderBottom: '1px solid #DDD8CF',
                transition: 'background-color 200ms ease',
                '&:hover .pillar-icon-box': {
                  bgcolor: '#8B1A2F',
                  color: '#FFFFFF',
                },
                '&:hover .pillar-icon-box svg': {
                  color: '#FFFFFF',
                },
              }}
            >
              {/* Icon */}
              <Box
                className="pillar-icon-box"
                sx={{
                  width: { xs: 36, sm: 42, md: 48 },
                  height: { xs: 36, sm: 42, md: 48 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #DDD8CF',
                  flexShrink: 0,
                  mt: 0.25,
                  transition: 'all 200ms ease',
                  color: '#8B1A2F',
                  '& svg': {
                    color: '#8B1A2F',
                    transition: 'color 200ms ease',
                    width: { xs: 18, sm: 20 },
                    height: { xs: 18, sm: 20 },
                  },
                }}
              >
                {pillar.icon}
              </Box>

              {/* Text */}
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: 'adobe-caslon-pro, "Caslon", georgia, serif',
                    fontSize: { xs: '1.15rem', sm: '1.25rem' },
                    fontWeight: 400,
                    color: '#1C1A17',
                    lineHeight: 1.25,
                    mb: 0.5,
                  }}
                >
                  {pillar.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                    fontSize: { xs: '0.84rem', sm: '0.875rem' },
                    color: '#4A4640',
                    lineHeight: 1.65,
                  }}
                >
                  {pillar.description}
                </Typography>
              </Box>

              {/* Tag */}
              <Typography
                component="span"
                sx={{
                  fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#9A9490',
                  whiteSpace: 'nowrap',
                  pt: 0.35,
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                {pillar.tag}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PillarsSection;
