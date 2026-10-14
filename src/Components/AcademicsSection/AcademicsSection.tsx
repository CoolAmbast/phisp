import type { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AcademicCard from '../Common/Card/AcademicCard';

export interface AcademicCardData {
  num: string;
  title: string;
  grade: string;
  description: string;
}

export interface AcademicsSectionProps {
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
    <Box
      component="section"
      id="academics"
      aria-label="Academics"
      sx={{
        bgcolor: '#F9F6F0',
        py: { xs: 5, sm: 7, md: 9, lg: 11 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Header */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 2.5, md: 5 },
            alignItems: 'end',
            mb: { xs: 3.5, sm: 5, md: 6 },
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
              pb: 0.5,
            }}
          >
            {introText}
          </Typography>
        </Box>

        {/* Reusable Academic Cards Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            borderTop: '1px solid #DDD8CF',
            borderLeft: '1px solid #DDD8CF',
            boxSizing: 'border-box',
          }}
        >
          {cards.map((card) => (
            <AcademicCard
              key={card.num}
              num={card.num}
              title={card.title}
              grade={card.grade}
              description={card.description}
            />
          ))}
        </Box>

        {/* CBSE Affiliation Note */}
        <Box
          sx={{
            mt: { xs: 3, sm: 4, md: 5 },
            p: { xs: 2.25, sm: 3, md: 3.5 },
            bgcolor: '#FFFFFF',
            borderLeft: '4px solid #C09A3E',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'flex-start' },
            gap: { xs: 1.5, sm: 2.5 },
            boxShadow: '0 1px 4px rgba(0, 0, 0, 0.03)',
          }}
        >
          <Box
            component="svg"
            sx={{
              width: 28,
              height: 28,
              flexShrink: 0,
              mt: { sm: 0.25 },
            }}
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
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#C09A3E',
                mb: 0.75,
              }}
            >
              {cbseLabel}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: { xs: '0.84rem', sm: '0.875rem' },
                color: '#4A4640',
                lineHeight: 1.6,
              }}
              dangerouslySetInnerHTML={{
                __html: cbseDetail as string,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AcademicsSection;
