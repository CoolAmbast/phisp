import type { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AppButton from '../Common/Button/AppButton';

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroSectionProps {
  badgeText: string;
  affiliationText: string;
  titleLine1: string;
  titleLine2Italic: string;
  tagline: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: HeroStat[];
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
}

const HeroSection: FC<HeroSectionProps> = ({
  badgeText,
  affiliationText,
  titleLine1,
  titleLine2Italic,
  tagline,
  description,
  primaryCta,
  secondaryCta,
  stats,
  imageSrc,
  imageAlt,
  imageCaption,
}) => {
  return (
    <Box
      component="section"
      id="about"
      aria-label="Hero"
      sx={{
        bgcolor: '#F9F6F0',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: '64px', md: '72px' },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          minHeight: { xs: 'auto', md: 'calc(100vh - 72px)' },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(139, 26, 47, 0.08), transparent)',
            pointerEvents: 'none',
            zIndex: 0,
          },
        }}
      >
        {/* Text Content Column */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: { xs: 2.25, sm: 3.5, md: 4.5, lg: 6.5 },
            maxWidth: 720,
            boxSizing: 'border-box',
            '@media (max-height: 620px)': {
              py: { xs: 2, sm: 2.5 },
            },
          }}
        >
          {/* Affiliation Strip */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 0.6, sm: 1.25 }}
            sx={{
              alignItems: { xs: 'flex-start', sm: 'center' },
              mb: { xs: 1.5, sm: 2.5 },
            }}
          >
            <Box
              sx={{
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: { xs: '0.65rem', sm: '0.75rem' },
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                bgcolor: '#8B1A2F',
                px: { xs: 0.85, sm: 1 },
                py: { xs: 0.3, sm: 0.4 },
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {badgeText}
            </Box>
            <Typography
              sx={{
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: { xs: '0.72rem', sm: '0.8125rem' },
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: '#9A9490',
                lineHeight: 1.3,
              }}
            >
              {affiliationText}
            </Typography>
          </Stack>

          {/* Scalable Hero Title - Fits Smallest Width & Height */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: 'adobe-caslon-pro, "Caslon", georgia, serif',
              fontSize: {
                xs: 'clamp(1.3rem, 6.4vw, 1.85rem)', // 320px -> ~20px, fits any small device
                sm: 'clamp(1.9rem, 4.8vw, 2.6rem)',
                md: 'clamp(2.35rem, 4.2vw, 3.4rem)',
                lg: 'clamp(3rem, 4vw, 4.25rem)',
              },
              fontWeight: 400,
              lineHeight: { xs: 1.15, sm: 1.1, md: 1.05 },
              color: '#1C1A17',
              mb: { xs: 0.75, sm: 1.25 },
              overflowWrap: 'break-word',
              wordBreak: 'normal',
              maxWidth: '100%',
              '@media (max-height: 620px)': {
                fontSize: {
                  xs: 'clamp(1.25rem, 5.5vw, 1.6rem)',
                  md: 'clamp(2rem, 3.5vw, 2.75rem)',
                },
              },
            }}
          >
            {titleLine1}
            <br />
            <Box
              component="em"
              sx={{
                fontStyle: 'italic',
                color: '#8B1A2F',
                display: 'inline-block',
                maxWidth: '100%',
              }}
            >
              {titleLine2Italic}
            </Box>
          </Typography>

          {/* Gold Tagline Divider */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.25,
              my: { xs: 1, sm: 1.5, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: '1.75rem', sm: '2.5rem' },
                height: '2px',
                bgcolor: '#C09A3E',
                flexShrink: 0,
              }}
            />
            <Typography
              sx={{
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: { xs: '0.75rem', sm: '0.8125rem', md: '0.875rem' },
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#C09A3E',
              }}
            >
              {tagline}
            </Typography>
          </Box>

          {/* Description */}
          <Typography
            sx={{
              fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
              fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1.125rem' },
              lineHeight: 1.65,
              color: '#4A4640',
              maxWidth: 520,
              mb: { xs: 2.25, sm: 3 },
              '@media (max-height: 620px)': {
                mb: 1.75,
              },
            }}
          >
            {description}
          </Typography>

          {/* Action Buttons using Reusable AppButton */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1.25, sm: 1.75 }}
            sx={{
              width: { xs: '100%', sm: 'auto' },
              mb: { xs: 2.5, sm: 3.5 },
            }}
          >
            <AppButton variant="primary" href={primaryCta.href} fullWidthOnMobile>
              {primaryCta.label}
            </AppButton>
            <AppButton variant="secondary" href={secondaryCta.href} fullWidthOnMobile>
              {secondaryCta.label}
            </AppButton>
          </Stack>

          {/* Hero Stats */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
              },
              gap: { xs: 1.5, sm: 2.5 },
              pt: { xs: 1.75, sm: 2.5 },
              borderTop: '1px solid #DDD8CF',
            }}
          >
            {stats.map((stat, idx) => (
              <Box
                key={stat.label}
                sx={{
                  gridColumn: {
                    xs: idx === 2 ? 'span 2' : 'span 1',
                    sm: 'span 1',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'adobe-caslon-pro, "Caslon", georgia, serif',
                    fontSize: { xs: '1.35rem', sm: '1.5rem', md: '1.875rem' },
                    fontWeight: 400,
                    color: '#8B1A2F',
                    lineHeight: 1,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                    fontSize: { xs: '0.65rem', sm: '0.72rem', md: '0.75rem' },
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#9A9490',
                    mt: 0.35,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Hero Image Panel */}
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            order: { xs: -1, md: 1 },
            height: { xs: 210, sm: 280, md: 'auto' },
            maxHeight: { xs: 240, sm: 320, md: 'none' },
            minHeight: { md: '100%' },
            '@media (max-height: 620px)': {
              height: { xs: 160, sm: 220, md: 'auto' },
            },
          }}
        >
          <Box
            component="img"
            alt={imageAlt}
            src={imageSrc}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(28, 26, 23, 0.7), transparent)',
              p: { xs: 1.5, sm: 2, md: 3 },
            }}
          >
            <Typography
              sx={{
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: { xs: '0.6875rem', sm: '0.75rem' },
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#F0EAE0',
                opacity: 0.9,
              }}
            >
              {imageCaption}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
