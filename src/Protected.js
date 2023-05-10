/** @format */

import { Box, createTheme, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileDrawer from './components/MobileDrawer';
import MiniDrawer from './components/MiniDrawer';
import { LoginOutlined } from '@mui/icons-material';
import LoginPage from './pages/Login';

let theme = createTheme();
const Ptd = ({ Cmpt, pg }) => {
  const [isLogedIn, setLogedIn] = useState(() =>false)
  const navigate = useNavigate();
  const id = localStorage.getItem('admin_id');
  useEffect(() => {
    if (id) {
      setLogedIn(true)
    } else {navigate('/login')}
  }, []);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
console.log(isLogedIn)
  return (
    <>
    {isLogedIn ?(<Box sx={{ p: 1, pl: { xs: 1, sm: 9 }, mt: { xs: 7, sm: 0 } }}>
      {isMobile ? <MobileDrawer /> : <MiniDrawer page={pg} />}
      <Cmpt />
    </Box>):(<LoginPage/>)}
    </>
    
  );
};

export default Ptd;
