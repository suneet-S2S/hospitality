import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Grid,
  MenuItem,
  Paper,
  Rating,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';

const services = [
  {
    title: 'Temporary Staffing',
    description: 'Quickly fill urgent shift gaps for daily operations and events.',
  },
  {
    title: 'Contract Placement',
    description: 'Skilled professionals for short and medium-term assignments.',
  },
  {
    title: 'Permanent Hiring',
    description: 'Recruit, vet, and onboard quality candidates for long-term roles.',
  },
  {
    title: 'Managed Workforce',
    description: 'Centralized scheduling and smooth workforce coordination.',
  },
];

const roles = [
  'Housekeeping Staff',
  'Commercial Cooks',
  'Electricians',
  'Hotel Managers',
  'Front Desk Executives',
  'Stewards & Servers',
  'Maintenance Technicians',
  'Event Crew',
];

const clients = [
  'Cityline Hotels Group',
  'Olive Branch Resorts',
  'Grand Arc Business Hotel',
  'Blue Harbor Suites',
  'Palmview Restaurants',
  'Metro Crown Banquets',
  'The Courtyard Inn',
  'Seaside Event Venues',
];

const stats = [
  { value: '450+', label: 'Active staff in network' },
  { value: '96%', label: 'Fulfillment rate' },
  { value: '24 hrs', label: 'Average deployment window' },
];

const process = [
  {
    step: '1',
    title: 'Share Requirement',
    description: 'Tell us role, quantity, shift pattern, location, and start date.',
  },
  {
    step: '2',
    title: 'Candidate Matching',
    description: 'We shortlist and verify candidates based on skill and availability.',
  },
  {
    step: '3',
    title: 'Deploy & Support',
    description: 'Staff are deployed quickly with ongoing service coordination.',
  },
];

const testimonials = [
  {
    quote:
      'They supported our peak season ramp-up in less than a week. Reliable and professional team.',
    by: 'Operations Lead, Cityline Hotels',
    score: 5,
  },
  {
    quote:
      'Staff quality and shift punctuality improved significantly after onboarding with HospiForce.',
    by: 'General Manager, Olive Branch Resorts',
    score: 5,
  },
];

const faqs = [
  {
    q: 'How quickly can you deploy staff?',
    a: 'For common roles and metro locations, we can typically deploy within 24-48 hours.',
  },
  {
    q: 'Do you provide temporary and permanent staffing?',
    a: 'Yes, we support temporary, contract, and permanent staffing based on client needs.',
  },
  {
    q: 'How do you ensure staff quality?',
    a: 'All profiles go through screening, identity checks, and role-fit validation before deployment.',
  },
];

const linkStyle = { color: 'text.primary', textDecoration: 'none', fontWeight: 500 };

function SectionTitle({ eyebrow, title, centered = false }) {
  return (
    <Stack spacing={1.5} alignItems={centered ? 'center' : 'flex-start'}>
      <Chip label={eyebrow} sx={{ borderRadius: 999, bgcolor: 'rgba(20,33,61,0.08)', fontWeight: 600 }} />
      <Typography variant="h2" sx={{ fontSize: { xs: '1.7rem', md: '2.4rem' }, maxWidth: 720, textAlign: centered ? 'center' : 'left' }}>
        {title}
      </Typography>
    </Stack>
  );
}

export default function App() {
  return (
    <Box>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(20,33,61,0.08)',
          bgcolor: 'rgba(255,255,255,0.8)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 76, gap: 2, justifyContent: 'space-between' }}>
            <Stack direction="row" spacing={1.2} alignItems="center">
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: 1.5,
                  background: 'linear-gradient(130deg, #fca311, #ffcb6b)',
                  color: '#0b1628',
                  display: 'grid',
                  placeItems: 'center',
                  fontWeight: 800,
                }}
              >
                HF
              </Box>
              <Typography fontWeight={700}>HospiForce Staffing</Typography>
            </Stack>

            <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Box component="a" href="#services" sx={linkStyle}>Services</Box>
              <Box component="a" href="#clients" sx={linkStyle}>Clients</Box>
              <Box component="a" href="#roles" sx={linkStyle}>Roles</Box>
              <Box component="a" href="#process" sx={linkStyle}>Process</Box>
              <Box component="a" href="#contact" sx={linkStyle}>Contact</Box>
            </Stack>

            <Button variant="contained" color="primary" href="#contact">Book A Call</Button>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main" sx={{ position: 'relative' }}>
        <Container
          maxWidth="lg"
          sx={{
            py: { xs: 4, md: 8 },
            position: 'relative',
            overflow: 'hidden',
            borderRadius: { xs: 4, md: 6 },
            px: { xs: 2, md: 4 },
            background:
              'linear-gradient(145deg, #0a1a31 0%, #102747 46%, #173b66 100%)',
            border: '1px solid rgba(255,255,255,0.14)',
            boxShadow: '0 24px 60px rgba(8,17,34,0.45)',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background:
                'radial-gradient(circle at 10% 8%, rgba(252,163,17,0.38) 0%, rgba(252,163,17,0) 35%), radial-gradient(circle at 100% 100%, rgba(125,176,255,0.26) 0%, rgba(125,176,255,0) 30%)',
              zIndex: -1,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)',
            },
          }}
        >
          <Grid container spacing={{ xs: 2.5, md: 4 }} alignItems="center">
            <Grid item xs={12} md={7}>
              <Chip
                label="Trusted Hospitality Staffing Partner"
                sx={{
                  mb: 2,
                  bgcolor: 'rgba(255,255,255,0.16)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.25)',
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.3rem', md: '3.4rem' },
                  mb: 2,
                  color: 'white',
                  textShadow: '0 10px 24px rgba(0,0,0,0.35)',
                }}
              >
                Build a dependable hospitality team in days, not months.
              </Typography>
              <Typography sx={{ fontSize: { xs: '1rem', md: '1.08rem' }, maxWidth: 640, color: '#d7e4f8' }}>
                Deploy trained housekeepers, cooks, electricians, and hotel operations staff quickly with quality checks, role-fit screening, and dedicated support.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: { xs: 3, md: 4 } }}>
                <Button
                  variant="contained"
                  color="primary"
                  href="#contact"
                  size="large"
                  sx={{ boxShadow: '0 10px 26px rgba(252,163,17,0.38)' }}
                >
                  Get Staffing Plan
                </Button>
                <Button
                  variant="outlined"
                  href="#services"
                  size="large"
                  sx={{ borderColor: 'rgba(255,255,255,0.55)', color: 'white' }}
                >
                  Explore Services
                </Button>
              </Stack>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1}
                sx={{ mt: 2.2, color: '#d7e4f8', fontSize: '0.92rem', fontWeight: 500 }}
              >
                <Typography>24-48 hr fast deployment</Typography>
                <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>•</Typography>
                <Typography>Pre-verified profiles</Typography>
                <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>•</Typography>
                <Typography>Single point coordination</Typography>
              </Stack>

              <Grid container spacing={1.5} sx={{ mt: { xs: 2, md: 3 } }}>
                {stats.map((item) => (
                  <Grid key={item.value} item xs={12} sm={4}>
                    <Card
                      variant="outlined"
                      sx={{
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.08))',
                        color: 'white',
                        borderColor: 'rgba(255,255,255,0.22)',
                        backdropFilter: 'blur(2px)',
                        transition: 'transform 220ms ease, box-shadow 220ms ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 12px 26px rgba(0,0,0,0.25)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                        <Typography variant="h5" sx={{ mb: 0.4 }}>{item.value}</Typography>
                        <Typography sx={{ color: '#d7e4f8' }} fontSize="0.93rem">{item.label}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} md={5}>
              <Paper
                sx={{
                  p: { xs: 2.2, md: 3 },
                  color: '#11213f',
                  border: '1px solid rgba(255,255,255,0.28)',
                  background: 'linear-gradient(160deg, #ffffff, #eef5ff)',
                  boxShadow: '0 20px 46px rgba(8,16,32,0.34)',
                }}
              >
                <Typography variant="h5" sx={{ mb: 2 }}>Why Hospitality Brands Choose Us</Typography>
                <Stack spacing={1.5} sx={{ mb: 2 }}>
                  <Stack direction="row" justifyContent="space-between" sx={{ pb: 1, borderBottom: '1px solid rgba(20,33,61,0.12)' }}>
                    <Typography color="text.secondary">Verified Profiles</Typography>
                    <Typography fontWeight={700}>Identity & reference checks</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" sx={{ pb: 1, borderBottom: '1px solid rgba(20,33,61,0.12)' }}>
                    <Typography color="text.secondary">Quick Turnaround</Typography>
                    <Typography fontWeight={700}>Rapid staffing support</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" sx={{ pb: 1, borderBottom: '1px solid rgba(20,33,61,0.12)' }}>
                    <Typography color="text.secondary">Role Expertise</Typography>
                    <Typography fontWeight={700}>Hospitality-trained workforce</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" sx={{ pb: 1, borderBottom: '1px solid rgba(20,33,61,0.12)' }}>
                    <Typography color="text.secondary">Dedicated Support</Typography>
                    <Typography fontWeight={700}>Single point of contact</Typography>
                  </Stack>
                </Stack>
                <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                  Need urgent staffing support? Our team can prepare a custom deployment plan.
                </Typography>
                <Button variant="contained" color="primary" href="#contact">Talk To Our Team</Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>

        <Box id="services" sx={{ py: { xs: 6, md: 9 }, background: 'linear-gradient(180deg, #f9fbff, #eef4ff)' }}>
          <Container maxWidth="lg">
            <SectionTitle
              eyebrow="What We Offer"
              title="End-to-end staffing solutions for hospitality businesses"
            />
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {services.map((service) => (
                <Grid key={service.title} item xs={12} sm={6} md={3}>
                  <Card
                    variant="outlined"
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'linear-gradient(180deg, #ffffff, #f8fbff)',
                      transition: 'transform 240ms ease, box-shadow 240ms ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 16px 30px rgba(20,33,61,0.12)',
                      },
                    }}
                  >
                    <Box sx={{ height: 5, background: 'linear-gradient(90deg, #fca311, #ffd37f)' }} />
                    <CardContent sx={{ flexGrow: 1, p: 2.4 }}>
                      <Typography variant="h6" sx={{ mb: 1 }}>{service.title}</Typography>
                      <Typography color="text.secondary">{service.description}</Typography>
                    </CardContent>
                    <CardActions sx={{ px: 2.4, pb: 2.2 }}>
                      <Button size="small" color="secondary">Learn more</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box id="clients" sx={{ py: { xs: 6, md: 8 } }}>
          <Container maxWidth="lg">
            <SectionTitle
              eyebrow="Trusted By Existing Clients"
              title="Hospitality brands that rely on us for workforce support"
            />
            <Typography color="text.secondary" sx={{ mt: 1.5 }}>
              Representative client names shown below for presentation purposes.
            </Typography>
            <Grid container spacing={1.5} sx={{ mt: 1.2 }}>
              {clients.map((client) => (
                <Grid key={client} item xs={12} sm={6} md={3}>
                  <Card
                    variant="outlined"
                    sx={{
                      p: 1.6,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.2,
                      minHeight: 78,
                      background: 'linear-gradient(145deg, #fff, #f4f8ff)',
                    }}
                  >
                    <Avatar sx={{ bgcolor: '#14213d', width: 34, height: 34, fontSize: '0.95rem' }}>
                      {client.charAt(0)}
                    </Avatar>
                    <Typography fontWeight={600}>{client}</Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box id="roles" sx={{ py: { xs: 6, md: 8 } }}>
          <Container maxWidth="lg">
            <SectionTitle
              eyebrow="Talent Categories"
              title="Pre-screened staff across core hospitality operations"
            />
            <Stack direction="row" flexWrap="wrap" gap={1.2} sx={{ mt: 3 }}>
              {roles.map((role) => (
                <Chip
                  key={role}
                  label={role}
                  sx={{
                    px: 1,
                    py: 1.3,
                    border: '1px solid #f7da9d',
                    bgcolor: '#fff8ec',
                    fontWeight: 600,
                    borderRadius: 999,
                  }}
                />
              ))}
            </Stack>
          </Container>
        </Box>

        <Box id="process" sx={{ py: { xs: 6, md: 8 }, bgcolor: '#0f1d35', color: 'white' }}>
          <Container maxWidth="lg">
            <SectionTitle
              eyebrow="How It Works"
              title="Simple process, fast staffing turnaround"
            />
            <Grid container spacing={2} sx={{ mt: 1.2 }}>
              {process.map((item) => (
                <Grid key={item.step} item xs={12} md={4}>
                  <Card
                    sx={{
                      p: 2.2,
                      height: '100%',
                      color: 'white',
                      border: '1px solid rgba(255,255,255,0.16)',
                      bgcolor: 'rgba(255,255,255,0.06)',
                      backdropFilter: 'blur(2px)',
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 36,
                        height: 36,
                        mb: 1.2,
                        fontWeight: 700,
                        color: '#0b1628',
                        background: 'linear-gradient(140deg, #f9a619, #ffca6f)',
                      }}
                    >
                      {item.step}
                    </Avatar>
                    <Typography variant="h6" sx={{ mb: 1 }}>{item.title}</Typography>
                    <Typography sx={{ color: '#d7e4f8' }}>{item.description}</Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box sx={{ py: { xs: 6, md: 8 } }}>
          <Container maxWidth="lg">
            <SectionTitle
              eyebrow="Client Feedback"
              title="Hospitality teams trust our response speed and quality"
            />
            <Grid container spacing={2} sx={{ mt: 1.2 }}>
              {testimonials.map((item) => (
                <Grid key={item.by} item xs={12} md={6}>
                  <Card variant="outlined" sx={{ p: 0.2, height: '100%' }}>
                    <CardContent sx={{ p: 2.5 }}>
                      <Rating value={item.score} precision={0.5} readOnly sx={{ mb: 1 }} />
                      <Typography sx={{ fontSize: '1.05rem', mb: 1.6 }}>&quot;{item.quote}&quot;</Typography>
                      <Typography color="text.secondary" fontWeight={600}>{item.by}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box id="contact" sx={{ py: { xs: 6, md: 8 }, background: 'linear-gradient(160deg, #ffe8bd, #ffe0a9 34%, #ffd286 78%)' }}>
          <Container maxWidth="lg">
            <Paper
              variant="outlined"
              sx={{
                p: { xs: 2.2, md: 3 },
                display: 'grid',
                gap: 2,
                gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' },
                bgcolor: 'rgba(255,255,255,0.82)',
              }}
            >
              <Box>
                <Chip label="Ready To Scale Staffing?" sx={{ mb: 1.4 }} />
                <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2.1rem' }, maxWidth: 460, mb: 1 }}>
                  Book a consultation for your next staffing requirement
                </Typography>
                <Typography color="text.secondary">Call: +91 90000 00000 | Email: hello@hospiforce.example</Typography>
              </Box>

              <Stack spacing={1.2} component="form" onSubmit={(e) => e.preventDefault()}>
                <TextField label="Company Name" placeholder="Hotel / Restaurant Name" fullWidth size="small" />
                <TextField
                  select
                  label="Required Roles"
                  defaultValue="mixed"
                  size="small"
                  fullWidth
                >
                  <MenuItem value="housekeeping">Housekeeping Team</MenuItem>
                  <MenuItem value="kitchen">Kitchen Staff</MenuItem>
                  <MenuItem value="maintenance">Maintenance Staff</MenuItem>
                  <MenuItem value="mixed">Mixed Requirement</MenuItem>
                </TextField>
                <TextField label="Start Date" type="date" size="small" fullWidth InputLabelProps={{ shrink: true }} />
                <Button variant="contained" color="primary" size="large">Request Proposal</Button>
              </Stack>
            </Paper>
          </Container>
        </Box>

        <Box sx={{ py: { xs: 5, md: 7 } }}>
          <Container maxWidth="md">
            <SectionTitle
              eyebrow="Frequently Asked Questions"
              title="Common questions from hospitality businesses"
              centered
            />
            <Stack spacing={1.1} sx={{ mt: 3 }}>
              {faqs.map((item) => (
                <Accordion key={item.q} disableGutters>
                  <AccordionSummary expandIcon={<Typography fontWeight={700}>+</Typography>}>
                    <Typography fontWeight={600}>{item.q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="text.secondary">{item.a}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          </Container>
        </Box>
      </Box>

      <Box component="footer" sx={{ py: 3, bgcolor: '#0a1220', color: '#d5dcec' }}>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
          <Typography>© 2026 HospiForce Staffing. All rights reserved.</Typography>
          <Typography>Hospitality staffing solutions across hotels, restaurants, resorts, and events.</Typography>
        </Container>
      </Box>
    </Box>
  );
}
