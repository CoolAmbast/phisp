import type { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

interface FooterLink {
  label: string;
  href: string;
}

interface ContactItem {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}

interface FooterProps {
  brandName: React.ReactNode;
  brandTagline: string;
  brandDescription: string;
  quickLinks: FooterLink[];
  academicLinks: FooterLink[];
  contactItems: ContactItem[];
  legalText: React.ReactNode;
  cbseBadge: string;
  cbseNum: string;
}

const Footer: FC<FooterProps> = ({
  brandName,
  brandTagline,
  brandDescription,
  quickLinks,
  academicLinks,
  contactItems,
  legalText,
  cbseBadge,
  cbseNum,
}) => {
  return (
    <footer id="contact" data-name="Site footer" aria-label="Site footer">
      <div className="container">
        <Box className="footer-top">
          <Box className="footer-brand">
            <Typography
              component="p"
              className="footer-brand-name"
              sx={{ textTransform: 'none', fontStyle: 'normal' }}
            >
              {brandName}
            </Typography>
            <Typography
              component="p"
              className="footer-brand-tagline"
              sx={{ textTransform: 'none', fontStyle: 'normal' }}
            >
              {brandTagline}
            </Typography>
            <Typography
              component="p"
              className="footer-brand-desc"
              sx={{ textTransform: 'none', fontStyle: 'normal' }}
            >
              {brandDescription}
            </Typography>
          </Box>

          <Box>
            <Typography
              component="p"
              className="footer-col-title"
              sx={{ textTransform: 'none', fontStyle: 'normal' }}
            >
              Quick Links
            </Typography>
            <List className="footer-link-list" disablePadding>
              {quickLinks.map((link) => (
                <ListItem key={link.label} disablePadding disableGutters>
                  <a href={link.href}>{link.label}</a>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box>
            <Typography
              component="p"
              className="footer-col-title"
              sx={{ textTransform: 'none', fontStyle: 'normal' }}
            >
              Academics
            </Typography>
            <List className="footer-link-list" disablePadding>
              {academicLinks.map((link) => (
                <ListItem key={link.label} disablePadding disableGutters>
                  <a href={link.href}>{link.label}</a>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box className="footer-contact-col">
            <Typography
              component="p"
              className="footer-col-title"
              sx={{ textTransform: 'none', fontStyle: 'normal' }}
            >
              Contact &amp; Location
            </Typography>
            {contactItems.map((item) => (
              <Box key={item.title} className="footer-contact-item">
                <Box className="footer-contact-icon" component="span">
                  {item.icon}
                </Box>
                <Box className="footer-contact-text">
                  <strong>{item.title}</strong>
                  {item.lines.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < item.lines.length - 1 && <br />}
                    </span>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box className="footer-bottom">
          <Typography
            component="p"
            className="footer-legal"
            sx={{ textTransform: 'none', fontStyle: 'normal' }}
          >
            {legalText}
          </Typography>
          <Box className="footer-cbse-strip">
            <Typography component="span" className="footer-cbse-badge">
              {cbseBadge}
            </Typography>
            <Typography
              component="span"
              className="footer-cbse-num"
              dangerouslySetInnerHTML={{ __html: cbseNum }}
            />
          </Box>
        </Box>
      </div>
    </footer>
  );
};

export default Footer;
