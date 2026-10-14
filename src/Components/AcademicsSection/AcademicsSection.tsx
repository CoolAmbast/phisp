import type { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface AcademicCardData {
  num: string;
  title: string;
  grade: string;
  description: string;
}

interface AcademicsSectionProps {
  eyebrow: string;
  heading: ReactNode;
  introText: string;
  cards: AcademicCardData[];
  cbseLabel: string;
  cbseDetail: ReactNode;
}

const AcademicsSection: FC<AcademicsSectionProps> = ({
  eyebrow,
  heading,
  introText,
  cards,
  cbseLabel,
  cbseDetail,
}) => {
  return (
    <section id="academics" aria-label="Academics">
      <div className="academics-section">
        <div className="container">
          <Box className="academics-header">
            <Box>
              <Typography
                component="p"
                className="eyebrow"
                sx={{ marginBottom: '1rem' }}
              >
                {eyebrow}
              </Typography>
              <Typography variant="h2" className="academics-heading">
                {heading}
              </Typography>
            </Box>
            <Typography component="p" className="academics-intro-text">
              {introText}
            </Typography>
          </Box>

          <Box className="academics-grid">
            {cards.map((card) => (
              <Box key={card.num} className="academic-card">
                <Typography className="academic-card-num">{card.num}</Typography>
                <Typography variant="h3" className="academic-card-title">
                  {card.title}
                </Typography>
                <Typography component="span" className="academic-card-grade">
                  {card.grade}
                </Typography>
                <Typography component="p" className="academic-card-desc">
                  {card.description}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box className="academics-cbse-note">
            <svg
              className="academics-cbse-icon"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="0.5"
                y="0.5"
                width="27"
                height="27"
                rx="1.5"
                stroke="#C09A3E"
                strokeWidth="1"
              />
              <path
                d="M9 14l3.5 3.5L19 10"
                stroke="#C09A3E"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Box className="academics-cbse-text-block">
              <Typography component="p" className="academics-cbse-label">
                {cbseLabel}
              </Typography>
              <Typography
                component="p"
                className="academics-cbse-detail"
                dangerouslySetInnerHTML={{
                  __html: cbseDetail as string,
                }}
              />
            </Box>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
