import type { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface FacilityData {
  name: string;
  note: string;
}

interface FacilitiesSectionProps {
  eyebrow: string;
  heading: string;
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
  facilities: FacilityData[];
}

const FacilitiesSection: FC<FacilitiesSectionProps> = ({
  eyebrow,
  heading,
  imageSrc,
  imageAlt,
  imageLabel,
  facilities,
}) => {
  return (
    <section id="facilities" aria-label="Facilities">
      <div className="facilities-section">
        <div className="container">
          <Box className="facilities-header">
            <Typography component="p" className="eyebrow">
              {eyebrow}
            </Typography>
            <Typography variant="h2" className="facilities-heading">
              {heading}
            </Typography>
          </Box>

          <Box className="facilities-layout">
            <Box className="facilities-image-col">
              <img alt={imageAlt} src={imageSrc} />
              <Typography component="span" className="facilities-image-label">
                {imageLabel}
              </Typography>
            </Box>

            <Box className="facilities-list-col">
              {facilities.map((facility) => (
                <Box key={facility.name} className="facility-row">
                  <Box className="facility-dot" aria-hidden="true" />
                  <Box>
                    <Typography component="p" className="facility-name">
                      {facility.name}
                    </Typography>
                    <Typography component="p" className="facility-note">
                      {facility.note}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
