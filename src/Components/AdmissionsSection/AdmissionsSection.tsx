import type { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import AppButton from '../Common/Button/AppButton';
import InfoBlock from '../Common/Card/InfoBlock';

export interface AdmissionInfoItem {
  label: string;
  value: string;
}

export interface AdmissionsSectionProps {
  eyebrow: string;
  heading: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  infoTitle: string;
  infoItems: AdmissionInfoItem[];
}

const AdmissionsSection: FC<AdmissionsSectionProps> = ({
  eyebrow,
  heading,
  body,
  primaryCta,
  secondaryCta,
  infoTitle,
  infoItems,
}) => {
  return (
    <Box
      component="section"
      id="admissions"
      aria-label="Admissions"
      sx={{
        bgcolor: '#8B1A2F',
        py: { xs: 5, sm: 7, md: 9, lg: 11 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          bgcolor: 'rgba(28, 26, 23, 0.2)',
          clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
          pointerEvents: 'none',
          display: { xs: 'none', md: 'block' },
        },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' },
            gap: { xs: 4, sm: 5, md: 6 },
            alignItems: 'center',
          }}
        >
          {/* Content Column */}
          <Box>
            <Typography
              sx={{
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#E8D5A3',
                mb: 1.5,
              }}
            >
              {eyebrow}
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: 'adobe-caslon-pro, "Caslon", georgia, serif',
                fontSize: { xs: 'clamp(1.75rem, 5vw, 2.35rem)', md: 'clamp(2.25rem, 3.8vw, 3.25rem)' },
                fontWeight: 400,
                color: '#FFFFFF',
                lineHeight: 1.15,
                mb: { xs: 1.5, sm: 2 },
              }}
            >
              {heading}
            </Typography>

            <Typography
              sx={{
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: { xs: '0.925rem', sm: '1rem', md: '1.125rem' },
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.7,
                maxWidth: 520,
                mb: { xs: 3, sm: 3.5 },
              }}
            >
              {body}
            </Typography>

            {/* Reusable Buttons */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1.25, sm: 1.75 }}
              sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
              <AppButton variant="white" href={primaryCta.href} fullWidthOnMobile>
                {primaryCta.label}
              </AppButton>
              <AppButton variant="outline-white" href={secondaryCta.href} fullWidthOnMobile>
                {secondaryCta.label}
              </AppButton>
            </Stack>
          </Box>

          {/* Reusable InfoBlock Card */}
          <InfoBlock title={infoTitle} items={infoItems} />
        </Box>
      </Container>
    </Box>
  );
};

export default AdmissionsSection;
