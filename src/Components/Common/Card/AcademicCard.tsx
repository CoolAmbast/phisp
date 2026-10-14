import type { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';

export interface AcademicCardProps {
  num: string;
  title: string;
  grade: string;
  description: string;
  sx?: SxProps<Theme>;
}

export const AcademicCard: FC<AcademicCardProps> = ({
  num,
  title,
  grade,
  description,
  sx,
}) => {
  return (
    <Box
      sx={{
        bgcolor: '#FFFFFF',
        p: { xs: 2.25, sm: 3, md: 3.5, lg: 4 },
        position: 'relative',
        transition: 'background-color 250ms ease, box-shadow 250ms ease',
        borderRight: '1px solid #DDD8CF',
        borderBottom: '1px solid #DDD8CF',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        '&:hover': {
          bgcolor: 'rgba(139, 26, 47, 0.03)',
        },
        ...sx,
      }}
    >
      <Typography
        sx={{
          fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          color: '#C09A3E',
          mb: { xs: 0.75, sm: 1.25 },
        }}
      >
        {num}
      </Typography>

      <Typography
        variant="h3"
        sx={{
          fontFamily: 'adobe-caslon-pro, "Caslon", georgia, serif',
          fontSize: { xs: '1.25rem', sm: '1.35rem', md: '1.5rem' },
          fontWeight: 400,
          color: '#1C1A17',
          lineHeight: 1.2,
          mb: 1,
        }}
      >
        {title}
      </Typography>

      <Box sx={{ mb: 1.5 }}>
        <Typography
          component="span"
          sx={{
            fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#8B1A2F',
            display: 'inline-block',
            py: 0.25,
            px: 0.75,
            border: '1px solid rgba(139, 26, 47, 0.35)',
            lineHeight: 1.4,
          }}
        >
          {grade}
        </Typography>
      </Box>

      <Typography
        sx={{
          fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
          fontSize: { xs: '0.84rem', sm: '0.875rem' },
          color: '#4A4640',
          lineHeight: 1.65,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default AcademicCard;
