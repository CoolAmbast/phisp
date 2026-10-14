import type { FC } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import Navbar from '../../Components/Navbar/Navbar';
import HeroSection from '../../Components/HeroSection/HeroSection';
import PhilosophySection from '../../Components/PhilosophySection/PhilosophySection';
import AcademicsSection from '../../Components/AcademicsSection/AcademicsSection';
import PillarsSection from '../../Components/PillarsSection/PillarsSection';
import FacilitiesSection from '../../Components/FacilitiesSection/FacilitiesSection';
import AdmissionsSection from '../../Components/AdmissionsSection/AdmissionsSection';
import Footer from '../../Components/Footer/Footer';

import heroImage from '../../assets/5a22a936-218c-4293-a204-c248be8f61ca.jpg';
import facilitiesImage from '../../assets/bc9be882-ef6f-41fe-8ba3-5193cdd45ce4.jpg';
import schoolLogo from '../../assets/phisp.png';

import theme from '../../theme/theme';

/* ── Data ── */

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Our Pillars', href: '#pillars' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Contact', href: '#contact' },
];

const HERO_STATS = [
  { value: 'CBSE', label: 'Board Affiliation' },
  { value: 'K\u201312', label: 'Full Programme' },
  { value: 'NH-31', label: 'Bypass Road, Purnea' },
];

const ACADEMIC_CARDS = [
  {
    num: '01',
    title: 'Foundational Stage',
    grade: 'Nursery \u2013 Grade II',
    description:
      'Play-based discovery learning grounded in NEP 2020 principles. Language, numeracy, and social skills developed through structured exploration and creative expression.',
  },
  {
    num: '02',
    title: 'Preparatory Stage',
    grade: 'Grades III \u2013 V',
    description:
      'Consolidation of core literacies with introduction to environmental science, social studies, and structured English and Hindi proficiency across all content areas.',
  },
  {
    num: '03',
    title: 'Middle School',
    grade: 'Grades VI \u2013 VIII',
    description:
      'Disciplinary specialisation begins. Mathematics, Science, Social Science, and Languages taught by subject experts; co-curricular integration strengthens holistic development.',
  },
  {
    num: '04',
    title: 'Secondary Level',
    grade: 'Grades IX \u2013 X',
    description:
      'Preparation for the CBSE Class X Board examination with structured revision, internal assessment discipline, and career orientation counselling for senior years.',
  },
  {
    num: '05',
    title: 'Senior Secondary',
    grade: 'Grades XI \u2013 XII',
    description:
      'Science, Commerce, and Humanities streams with rigorous subject preparation for CBSE Class XII Boards, JEE, NEET, and national competitive examinations.',
  },
  {
    num: '06',
    title: 'Enrichment & Sports',
    grade: 'All Grades',
    description:
      'Performing arts, athletics, debate, and leadership programmes run parallel to academic studies \u2014 developing character, discipline, and confidence beyond the classroom.',
  },
];

const PILLARS_DATA = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Academic Rigour',
    description: 'Structured, research-informed pedagogy across all CBSE subjects \u2014 demanding high standards while offering the scaffolding every learner needs to meet them.',
    tag: 'Curriculum',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
    title: 'Equitable Access',
    description: 'Admission and scholarship frameworks that ensure no academically deserving student is excluded on grounds of socioeconomic circumstance \u2014 the practical expression of our motto.',
    tag: 'Inclusion',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: 'Character Formation',
    description: 'Moral reasoning, civic responsibility, and respect for diverse perspectives embedded into daily school life \u2014 not as an add-on, but as core educational purpose.',
    tag: 'Values',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Faculty Excellence',
    description: 'Subject-specialist educators selected for both disciplinary mastery and pedagogical skill \u2014 supported through continuous professional development and institutional mentorship.',
    tag: 'Faculty',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Safe & Nurturing Campus',
    description: 'A secure, supervised learning environment on NH-31, Basgama \u2014 designed for physical safety, emotional wellbeing, and the dignity of every member of our school community.',
    tag: 'Wellbeing',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Heritage Meets Innovation',
    description: 'Reverence for India\u2019s intellectual and cultural traditions, integrated with contemporary pedagogy, digital literacy, and preparation for a rapidly evolving global landscape.',
    tag: 'Ethos',
  },
];

const FACILITIES_DATA = [
  {
    name: 'Smart Classrooms',
    note: 'Technology-integrated teaching spaces with interactive boards supporting blended instruction across all grade levels.',
  },
  {
    name: 'Library & Resource Centre',
    note: 'A curated collection of texts, reference materials, and digital databases supporting independent research from Grade I through XII.',
  },
  {
    name: 'Science Laboratories',
    note: 'Fully equipped Physics, Chemistry, and Biology laboratories meeting CBSE practical assessment requirements for Classes IX\u2013XII.',
  },
  {
    name: 'Sports & Athletic Grounds',
    note: 'Outdoor play areas, courts, and athletics infrastructure supporting physical education as an integral part of whole-student development.',
  },
  {
    name: 'Transport Network',
    note: 'Supervised school transport covering Purnea and surrounding areas \u2014 reliable, safe, and accessible for families across the district.',
  },
];

const ADMISSION_INFO = [
  { label: 'Grades Offered', value: 'Nursery through Grade XII' },
  { label: 'Board Affiliation', value: 'CBSE \u2014 Aff. No. 330963' },
  { label: 'Medium of Instruction', value: 'English (with Hindi)' },
  { label: 'Academic Session', value: 'April 2027 \u2013 March 2028' },
];

const QUICK_LINKS = [
  { label: 'About the School', href: '#about' },
  { label: 'Academic Programmes', href: '#academics' },
  { label: 'Our Pillars', href: '#pillars' },
  { label: 'Campus & Facilities', href: '#facilities' },
  { label: 'Admissions 2027\u201328', href: '#admissions' },
];

const ACADEMIC_LINKS = [
  { label: 'Foundational Stage', href: '#academics' },
  { label: 'Preparatory Stage', href: '#academics' },
  { label: 'Middle School', href: '#academics' },
  { label: 'Secondary Level', href: '#academics' },
  { label: 'Senior Secondary', href: '#academics' },
];

const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Address',
    lines: ['Bypass Road, NH-31', 'Basgama, Gulabbagh', 'Purnea \u2013 854326, Bihar'],
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
    title: 'CBSE Affiliation',
    lines: ['Affiliation No. 330963', 'School No. 66692'],
  },
];

const LandingPage: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar
        logoSrc={schoolLogo}
        links={NAV_LINKS}
        ctaLabel="Admissions 2027"
        ctaHref="#admissions"
      />

      <HeroSection
        badgeText="CBSE Affiliated"
        affiliationText="Affiliation No. 330963 | School No. 66692"
        titleLine1="Pragya Heritage"
        titleLine2Italic="International School"
        tagline="Equity is Excellence"
        description="A distinguished centre of learning on NH-31, Purnea — where rigorous academics, principled character formation, and equitable opportunity converge to shape every student into a confident, contributing citizen of the world."
        primaryCta={{ label: 'Apply for 2027–28', href: '#admissions' }}
        secondaryCta={{ label: 'Explore Academics', href: '#academics' }}
        stats={HERO_STATS}
        imageSrc={heroImage}
        imageAlt="School building exterior at Pragya Heritage International School on NH-31 Purnea, classical architecture, lush campus grounds, morning light"
        imageCaption="Basgama, Gulabbagh — Purnea, Bihar 854326"
      />

      <PhilosophySection
        eyebrow="Our Foundation"
        sectionNum="01"
        heading={
          <>
            Education as a<br />fundamental right,<br />not a privilege.
          </>
        }
        bodyParagraphs={[
          'At Pragya Heritage International School, we hold that every learner — regardless of background, circumstance, or prior attainment — deserves access to an education of the highest calibre. Our motto, <em>Equity is Excellence</em>, is not a slogan. It is the institutional commitment that shapes every admission decision, every classroom practice, and every investment in student support.',
          'Founded on the principles of the CBSE framework and inspired by the enduring values of India’s heritage of learning, we bridge tradition with modernity — instilling disciplined inquiry, ethical reasoning, and intellectual confidence in each student we serve.',
        ]}
        quoteText="“When every student thrives, the institution reaches its highest potential.”"
        quoteAttribution="— Institutional Founding Principle"
      />

      <AcademicsSection
        eyebrow="Academic Programmes"
        heading={
          <>
            A complete<br />CBSE learning<br />continuum.
          </>
        }
        introText="From early childhood through senior secondary, our academic structure is designed with developmental integrity — each stage preparing students thoroughly for the next, while cultivating independent thought, analytical depth, and a genuine love of learning."
        cards={ACADEMIC_CARDS}
        cbseLabel="CBSE Affiliation Details"
        cbseDetail='Affiliated to the Central Board of Secondary Education (CBSE), New Delhi — Affiliation No. <strong>330963</strong> &nbsp;|&nbsp; School No. <strong>66692</strong>. All curricula, examinations, and certifications are governed by and conducted under CBSE regulations.'
      />

      <PillarsSection
        eyebrow="What We Stand For"
        heading="Six pillars of institutional distinction."
        introText="These commitments define how we teach, how we govern, and how we engage with every family who entrusts their child's formation to our care."
        pillars={PILLARS_DATA}
      />

      <FacilitiesSection
        eyebrow="Campus &amp; Infrastructure"
        heading="An environment built for serious learning."
        imageSrc={facilitiesImage}
        imageAlt="Modern school campus interior with well-lit classrooms, library reading area and students studying in a spacious academic wing, natural light, contemporary furniture"
        imageLabel="NH-31, Basgama, Purnea"
        facilities={FACILITIES_DATA}
      />

      <AdmissionsSection
        eyebrow="Admissions Open"
        heading="Begin the conversation about your child's future."
        body="Enrolment for the Academic Year 2027–28 is now open across all grades. We welcome applications from families who share our conviction that every child deserves a distinguished, principled education — regardless of prior schooling background."
        primaryCta={{ label: 'Request a Prospectus', href: '#contact' }}
        secondaryCta={{ label: 'Schedule a Campus Visit', href: '#contact' }}
        infoTitle="Key Information"
        infoItems={ADMISSION_INFO}
      />

      <Footer
        brandName={<>Pragya Heritage<br />International School</>}
        brandTagline="Equity is Excellence"
        brandDescription="A CBSE-affiliated institution on NH-31, Purnea, dedicated to providing every student a rigorous, equitable, and principled education from Nursery through Grade XII."
        quickLinks={QUICK_LINKS}
        academicLinks={ACADEMIC_LINKS}
        contactItems={CONTACT_ITEMS}
        legalText={
          <>
            © 2026 Pragya Heritage International School. All rights reserved.<br />
            Bypass Road, NH-31, Basgama, Gulabbagh, Purnea-854326, Bihar, India.
          </>
        }
        cbseBadge="CBSE"
        cbseNum="Affiliation No. 330963 &nbsp;|&nbsp; School No. 66692"
      />
    </ThemeProvider>
  );
};

export default LandingPage;
