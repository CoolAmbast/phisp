import type { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

interface AdmissionInfoItem {
  label: string;
  value: string;
}

interface AdmissionsSectionProps {
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
    <section id="admissions" aria-label="Admissions">
      <div className="admissions-section">
        <div className="container">
          <Box className="admissions-inner">
            <Box>
              <Typography component="p" className="admissions-eyebrow">
                {eyebrow}
              </Typography>
              <Typography variant="h2" className="admissions-heading">
                {heading}
              </Typography>
              <Typography component="p" className="admissions-body">
                {body}
              </Typography>
              <Box className="admissions-cta-row">
                <a className="btn-white" href={primaryCta.href}>
                  {primaryCta.label}
                </a>
                <a className="btn-outline-white" href={secondaryCta.href}>
                  {secondaryCta.label}
                </a>
              </Box>
            </Box>

            <Box className="admissions-info-block">
              <Typography component="p" className="admissions-info-title">
                {infoTitle}
              </Typography>
              <List className="admissions-info-list" disablePadding>
                {infoItems.map((item) => (
                  <ListItem
                    key={item.label}
                    className="admissions-info-row"
                    disablePadding
                    disableGutters
                  >
                    <Typography component="span" className="admissions-info-label">
                      {item.label}
                    </Typography>
                    <Typography component="span" className="admissions-info-value">
                      {item.value}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
