import React from 'react';
import { connect } from "react-redux";
import { aShowHome } from '../redux/actions';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    marginTop: 100,
    maxWidth: 500,
  },
  image: {
    width: 256,
    height: 350,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

// componente que muestra el detalle del producto
const Item = (props) => {

  const classes = useStyles();

  function returnHome(){
    props.aShowHome(false);
  }

  if(!props.item){
    return <div>Error</div>
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={"./img/"+props.item.img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h4">
                  {props.item.name}
                </Typography>
                <br/>
                <Typography variant="body1" gutterBottom>
                  {'Stock: ' + props.item.stock}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {'ID:' + props.item.id}
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary" className={classes.button} onClick={returnHome}>
                  Regresar
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h5">{'$' + props.item.price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  item : state.tienda.curItem,
});

const mapDispatchToProps = {
  aShowHome
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);