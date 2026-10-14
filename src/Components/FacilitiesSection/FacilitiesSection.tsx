import type { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export interface FacilityData {
  name: string;
  note: string;
}

export interface FacilitiesSectionProps {
  eyebrow: string;
  heading: string;
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
  facilities: FacilityData[];
}

const FacilitiesSection: FC<FacilitiesSectionProps> = ({
  eyebrow,
  heading,
  imageSrc,
  imageAlt,
  imageLabel,
  facilities,
}) => {
  return (
    <Box
      component="section"
      id="facilities"
      aria-label="Facilities"
      sx={{
        bgcolor: '#F9F6F0',
        py: { xs: 5, sm: 7, md: 9, lg: 11 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Header */}
        <Box sx={{ mb: { xs: 3.5, sm: 4.5, md: 5 } }}>
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
              maxWidth: 580,
            }}
          >
            {heading}
          </Typography>
        </Box>

        {/* Layout Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '3fr 2fr' },
            gap: { xs: 3, sm: 4, md: 5 },
            alignItems: 'start',
          }}
        >
          {/* Image Column */}
          <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <Box
              component="img"
              alt={imageAlt}
              src={imageSrc}
              sx={{
                width: '100%',
                aspectRatio: { xs: '16/10', sm: '4/3' },
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <Typography
              component="span"
              sx={{
                position: 'absolute',
                top: { xs: '1rem', sm: '1.5rem' },
                left: { xs: '1rem', sm: '1.5rem' },
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: { xs: '0.6875rem', sm: '0.75rem' },
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                bgcolor: '#FFFFFF',
                color: '#1C1A17',
                px: 1.25,
                py: 0.5,
                borderLeft: '3px solid #C09A3E',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              }}
            >
              {imageLabel}
            </Typography>
          </Box>

          {/* List Column */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {facilities.map((facility, idx) => (
              <Box
                key={facility.name}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 1.5,
                  py: { xs: 1.5, sm: 1.75 },
                  borderBottom: '1px solid #DDD8CF',
                  borderTop: idx === 0 ? '1px solid #DDD8CF' : 'none',
                }}
              >
                <Box
                  aria-hidden="true"
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: '#C09A3E',
                    flexShrink: 0,
                    mt: 0.75,
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: 'adobe-caslon-pro, "Caslon", georgia, serif',
                      fontSize: { xs: '1.05rem', sm: '1.125rem' },
                      fontWeight: 400,
                      color: '#1C1A17',
                      mb: 0.25,
                    }}
                  >
                    {facility.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                      fontSize: { xs: '0.84rem', sm: '0.875rem' },
                      color: '#4A4640',
                      lineHeight: 1.55,
                    }}
                  >
                    {facility.note}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FacilitiesSection;
