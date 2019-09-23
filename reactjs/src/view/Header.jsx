import React from 'react';
import { connect } from "react-redux";
import { aSendLogout, aShowPurchase } from '../redux/actions';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import MailIcon from '@material-ui/icons/Mail';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const Header = (props) => {

  let sendLogout = () => {
    props.aSendLogout();
  }

  let ShowPurcharse = () => {
    props.aShowPurchase();
  }

  // si no esta autentificado no muestra la cabecera
  if(props.isAuth){
    return (<div className="header-root">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className="header-menuButton" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="header-title">
            Tienda Online \ M.M.
          </Typography>
          <Box display="flex">
              <Box m={1}>
                <IconButton aria-label="mail">
                  <Badge badgeContent={0} color="primary" className="header-badge">
                    <MailIcon />
                  </Badge>
                </IconButton>
              </Box>
              <Box m={1} onClick={ShowPurcharse}>
                <IconButton aria-label="accessTime">
                  <Badge badgeContent={0} color="primary" className="header-badge">
                    <AccessTimeIcon />
                  </Badge>
                </IconButton>
              </Box>
              <Box m={1}>
                <IconButton aria-label="cart">
                  <Badge badgeContent={props.itemsCount} color="primary" className="header-badge">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Box>
          </Box>
          <Button color="inherit" onClick={sendLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>)
  }
  else{
    return (<div className="header-root">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="header-title">
             NextUI \ M.M.
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>)
  }
};


const mapStateToProps = (state) => ({
  isAuth : state.tienda.isAuth,
  itemsCount : state.tienda.itemsCount
});

const mapDispatchToProps = {
  aSendLogout,
  aShowPurchase
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);