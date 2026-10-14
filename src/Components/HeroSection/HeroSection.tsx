import type { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface HeroStat {
  value: string;
  label: string;
}

interface HeroSectionProps {
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
    <section id="about" aria-label="Hero">
      <div className="hero-section">
        <Box className="hero-content">
          <Box className="hero-affiliation">
            <Typography component="span" className="hero-affiliation-badge">
              {badgeText}
            </Typography>
            <Typography component="span" className="hero-affiliation-text">
              {affiliationText}
            </Typography>
          </Box>

          <Typography variant="h1" className="hero-title">
            {titleLine1}
            <br />
            <em>{titleLine2Italic}</em>
          </Typography>

          <Box className="hero-tagline-line">
            <Typography component="span" className="hero-tagline-text">
              {tagline}
            </Typography>
          </Box>

          <Typography component="p" className="hero-description">
            {description}
          </Typography>

          <Box className="hero-actions">
            <a className="btn-primary" href={primaryCta.href}>
              {primaryCta.label}
            </a>
            <a className="btn-secondary" href={secondaryCta.href}>
              {secondaryCta.label}
            </a>
          </Box>

          <Box className="hero-stats">
            {stats.map((stat) => (
              <Box key={stat.label} className="hero-stat-item">
                <Typography className="hero-stat-num">{stat.value}</Typography>
                <Typography className="hero-stat-label">{stat.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box className="hero-image-panel">
          <img
            alt={imageAlt}
            src={imageSrc}
          />
          <Box className="hero-image-overlay">
            <Typography component="p" className="hero-image-caption">
              {imageCaption}
            </Typography>
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default HeroSection;
