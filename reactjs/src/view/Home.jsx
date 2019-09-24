import React from 'react';
import { connect } from "react-redux";
import { aFilterItems, aAddPurchaseItem, aChangeQuantityItem } from '../redux/actions';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import InputSearch from '../components/InputSearch';
import Copyright from '../components/Copyright';


// componente react que realiza el login
class Home extends React.Component {

    // constructor
  constructor(props) {
    super(props);
    this.state = {
        filter: ""
    }
  }

  // cambiar la cantidad que se ingresara de un item
  changeNumber = (item, event) => {
    let value = event.target.value;

    if(value.length == 0){
        value = "";
    }else{
        value = parseInt(value);
        if(value <= 0 ){
            value = 1;
        }
        if(value > 10 ){
            value = 10;
        }
    }
    this.props.aChangeQuantityItem(item, value);
  }

  addPurchaseItem = (item) => {
    this.props.aAddPurchaseItem(item);
  }


  // crea el render
  render(){
      return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className="items-hero-content">
                <Container maxWidth="md">
                    <Grid container spacing={4} justify="center">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Catálogo
                        </Typography>
                        <div className="items-space"/>
                        <InputSearch />
                    </Grid>
                </Container>
                </div>
                <Container className="items-card-grid" maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {this.props.items.map( item => (

                    <Grid item key={item.name} xs={12} sm={6} md={4}>
                        <Card className="items-card">
                            <CardMedia
                                className="items-card-media"
                                image={"./img/"+item.img}
                                title={item.name}
                            />
                            <CardContent className="items-card-content">
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.name}
                                </Typography>
                                <Typography>
                                    <b>Precio: $</b>{item.price}<br/>
                                    <b>Unidades disponibles: </b>{item.stock}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Grid container spacing={2} >
                                    <Grid item xs={12} sm={6}>
                                        <Button  variant="contained" size="small" color="primary">
                                            Ver Más
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Button variant="contained" size="small" color="secondary" onClick={this.addPurchaseItem.bind(this, item)}>
                                            Añadir
                                        </Button>
                                        <TextField
                                                id="outlined-number"
                                                onChange={this.changeNumber.bind(this, item)}
                                                type="number"
                                                value={item.purchase}
                                                InputProps={{ inputProps: { min: 1, max: 10, style: { textAlign: 'right'}} }}
                                                style = {{width: 45}} //assign the width as your requirement
                                                margin="none"
                                            />
                                     </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
                </Container>
            </main>
            {/* Footer */}
            <footer className="items-footer">
                <Typography variant="h6" align="center" gutterBottom>
                  Galeria
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                  Todos Los productos cumplen con los más altos estándares de calidad
                </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
            </React.Fragment>
      )
  }
}


const mapStateToProps = (state) => ({
    items : state.tienda.items,
});

const mapDispatchToProps = {
    aFilterItems,
    aAddPurchaseItem,
    aChangeQuantityItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);