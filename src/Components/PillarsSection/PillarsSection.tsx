import type { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

interface PillarData {
  icon: ReactNode;
  title: string;
  description: string;
  tag: string;
}

interface PillarsSectionProps {
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
    <section id="pillars" aria-label="Our Pillars">
      <div className="pillars-section">
        <div className="container">
          <Box className="pillars-top">
            <Box>
              <Typography
                component="p"
                className="eyebrow"
                sx={{ marginBottom: '1rem' }}
              >
                {eyebrow}
              </Typography>
              <Typography variant="h2" className="pillars-section-heading">
                {heading}
              </Typography>
            </Box>
            <Typography
              component="p"
              sx={{
                fontSize: 'var(--text-lg)',
                color: 'var(--fg)',
                lineHeight: 1.7,
                paddingTop: '0.25rem',
              }}
            >
              {introText}
            </Typography>
          </Box>

          <List className="pillars-list" disablePadding>
            {pillars.map((pillar) => (
              <ListItem
                key={pillar.title}
                className="pillar-item"
                disablePadding
                disableGutters
              >
                <Box className="pillar-icon-wrap">{pillar.icon}</Box>
                <Box className="pillar-text-group">
                  <Typography variant="h3" className="pillar-title">
                    {pillar.title}
                  </Typography>
                  <Typography component="p" className="pillar-desc">
                    {pillar.description}
                  </Typography>
                </Box>
                <Typography component="span" className="pillar-tag">
                  {pillar.tag}
                </Typography>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
