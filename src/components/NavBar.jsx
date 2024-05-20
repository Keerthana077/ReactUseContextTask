import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Total from './Total';
import CartContext from '../utils/CartContext';

export default function NavBar() {
  let {total,cartValue} = React.useContext(CartContext)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ShoppingCartIcon />Cartpage
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <IconButton
            size="large" 
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ShoppingCartIcon />
            <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
             <p>{cartValue}</p>
          </Typography>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ><CurrencyRupeeIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             <p>{total}</p>
          </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
