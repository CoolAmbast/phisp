import type { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';

export interface InfoItem {
  label: string;
  value: string;
}

export interface InfoBlockProps {
  title: string;
  items: InfoItem[];
  sx?: SxProps<Theme>;
}

export const InfoBlock: FC<InfoBlockProps> = ({ title, items, sx }) => {
  return (
    <Box
      sx={{
        bgcolor: 'rgba(28, 26, 23, 0.3)',
        p: { xs: 2.5, sm: 3.5, md: 4 },
        borderLeft: '3px solid #C09A3E',
        boxSizing: 'border-box',
        ...sx,
      }}
    >
      <Typography
        sx={{
          fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#E8D5A3',
          mb: { xs: 2, sm: 2.5 },
        }}
      >
        {title}
      </Typography>

      <Box
        component="ul"
        sx={{
          listStyle: 'none',
          p: 0,
          m: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 1.75, sm: 2 },
        }}
      >
        {items.map((item, idx) => (
          <Box
            key={idx}
            component="li"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0.35,
            }}
          >
            <Typography
              sx={{
                fontFamily: 'acumin-pro, helvetica-neue, arial, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.65)',
              }}
            >
              {item.label}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'adobe-caslon-pro, "Caslon", georgia, serif',
                fontSize: { xs: '1rem', sm: '1.125rem' },
                fontWeight: 400,
                color: '#FFFFFF',
                lineHeight: 1.3,
              }}
            >
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default InfoBlock;
