import type { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface PhilosophySectionProps {
  eyebrow: string;
  sectionNum: string;
  heading: React.ReactNode;
  bodyParagraphs: string[];
  quoteText: string;
  quoteAttribution: string;
}

const PhilosophySection: FC<PhilosophySectionProps> = ({
  eyebrow,
  sectionNum,
  heading,
  bodyParagraphs,
  quoteText,
  quoteAttribution,
}) => {
  return (
    <section id="philosophy" aria-label="Our Philosophy">
      <div className="philosophy-section">
        <div className="container">
          <Box className="philosophy-inner">
            <Box className="philosophy-label-col">
              <Typography component="p" className="philosophy-section-eyebrow">
                {eyebrow}
              </Typography>
              <Box className="philosophy-section-num" aria-hidden="true">
                {sectionNum}
              </Box>
            </Box>
            <Box className="philosophy-body-col">
              <Typography variant="h2" className="philosophy-heading">
                {heading}
              </Typography>
              {bodyParagraphs.map((paragraph, index) => (
                <Typography
                  key={index}
                  component="p"
                  className="philosophy-body"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
              <Box className="philosophy-quote">
                <Typography component="p" className="philosophy-quote-text">
                  {quoteText}
                </Typography>
                <Typography component="p" className="philosophy-quote-attr">
                  {quoteAttribution}
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
