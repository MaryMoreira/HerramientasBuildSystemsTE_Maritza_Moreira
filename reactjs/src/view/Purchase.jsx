import React from 'react';

import { connect } from "react-redux";
import { aShowHome } from '../redux/actions';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Avatar from '@material-ui/core/Avatar';

const TAX_RATE = 0.12;// porcentaje de taxes

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  avatar: {
    margin: 10,
  },
}));


// componente que muestra el total de la compra
const Purcharse = (props) => {

  let subtotal = 0;
  let values   = props.items.map ( item => {
    let total = Math.round(item.purchase * item.price * 100) / 100;
    subtotal += total;
    return {...item, total};
  })


  let taxes = TAX_RATE * subtotal;
  let total = taxes + subtotal;

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  function clickButton(clean){
    props.aShowHome(clean);
  }

  function table(){ // obtiene la tabla con los valores
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {values.map(row => (
              <TableRow key={row.name}>
                <TableCell className="purchase-item">
                  <Grid container justify="flex-start" alignItems="center">
                    <Grid item xs={4}>
                      <Avatar alt="Remy Sharp" src={"./img/"+row.img} className={classes.avatar} />
                    </Grid>
                    <Grid item xs={4}>
                      <div> {row.name}</div>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell align="right">{row.purchase}</TableCell>
                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                <TableCell align="right">{ccyFormat(row.total)}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2} className="purchase-bold">Subtotal</TableCell>
              <TableCell align="right">{ccyFormat(subtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="purchase-bold">Tax</TableCell>
              <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
              <TableCell align="right">{ccyFormat(taxes)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="purchase-total">Total</TableCell>
              <TableCell align="right" className="purchase-total">{ccyFormat(total) + ' USD'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }

  const classes = useStyles();

  return (
    <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className="items-hero-content">
                  <Container maxWidth="md">

                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                       Factura
                    </Typography>

                    {table()}

                    <div className="purchase-buttons">
                      <Grid item style={{textAlign: 'right'}}>
                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                          <Button onClick={clickButton.bind(this, false)}>Cancelar</Button>
                          <Button onClick={clickButton.bind(this, true)}>Pagar</Button>
                        </ButtonGroup>
                      </Grid>
                    </div>

                  </Container>
                </div>
            </main>
      </React.Fragment>
  );
};


const mapStateToProps = (state) => ({
  items : state.tienda.purchase,
});

const mapDispatchToProps = {
  aShowHome
};

export default connect(mapStateToProps, mapDispatchToProps)(Purcharse);