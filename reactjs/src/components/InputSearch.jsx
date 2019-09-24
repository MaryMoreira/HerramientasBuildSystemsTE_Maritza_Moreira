import React from 'react';
import { connect } from "react-redux";
import { aFilterItems } from '../redux/actions';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '0px 2px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }
}));

const InputSearch = (props) => {
  const classes = useStyles();

  // realiza la busqueda
  let search = (e) => {
      let value = e.target.value;
      props.aFilterItems(value);
  };

  return (
    <Paper className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        onChange={search}
        placeholder="Ingrese el Producto"
        inputProps={{ 'aria-label': 'ingrese el producto' }}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};


const mapStateToProps = (state) => ({
  itemsCount : state.tienda.itemsCount
});

const mapDispatchToProps = {
  aFilterItems
};

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch);