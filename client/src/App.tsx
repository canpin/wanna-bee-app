import React from 'react';
import AddSuperHero from './components/AddSuperHero';
import './App.css';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

function App() {
  return (
    <div className="App">
      <Box>
        <Typography variant='h2'>Who would You like to BEE</Typography>
        <AddSuperHero />
      </Box>
    </div>
  );
}

export default App;
