import { Container, Grid, TextField, Typography } from '@mui/material';

function App() {
  return (
    <Container>
      <Typography variant='h4' sx={{ mb: 2 }}>
        Passengers
      </Typography>
      <Typography
        sx={{
          display: { xs: 'none', md: 'revert' },
          color: 'text.secondary',
          mb: 2,
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat nisi
        iste odit praesentium, iusto maiores in incidunt fuga eius? Harum
        repellendus non similique facere, dolorem et blanditiis laudantium
        consequuntur optio.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <TextField fullWidth label='Title' required />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <TextField fullWidth label='First name' required />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <TextField fullWidth label='Middle name' required />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <TextField fullWidth label='Last name' required />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
