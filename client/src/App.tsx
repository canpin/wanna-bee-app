import React, { useEffect } from 'react';
import AddSuperHero from './components/AddSuperHero';
import './App.css';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { getSuperPowers } from './services/superHeroApi'
import ISuperPower from '../../API/ISuperPower';
import { useAppDispatch } from './hooks';
import { setLoading, setSuperPowers } from './appSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getSuperPowers()
      .then((superpowers: ISuperPower[] ) => {
        dispatch(setSuperPowers(superpowers));
        dispatch(setLoading(false));
      })
      .catch((error: Error) => {
        console.error(error);
      })
  }, []);

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
