
import React from "react";
import { connect } from "react-redux";
import { aSendLogin } from '../redux/actions';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


// jsx del Copyright
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          Mary Moreira
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

function LoginMsg(props){
    console.log(props);
    if(props.msg.length == 0){
        return null;
    }else{
        return (
              <Grid item xs>
                  <div className="login-msg" >{props.msg}</div>
              </Grid>
        )
    }
}


// componente react que realiza el login
class Login extends React.Component {

    // constructor
  constructor(props) {
    super(props);

    // obtiene si esta guarda la inforamacion el local storage
    let save = localStorage.getItem('save');

    if(save){
      save = (save === 'true' || save == true)
    }else{
      save = false;
    }

    // crea el estado el componente
    this.state = {
                  user : save ? localStorage.getItem('user') : '',
                  pass : save ? localStorage.getItem('pass') : '',
                  save : save,
                  userHelp : "",
                  passHelp : "",
                };
  }

  // atiende al login
  sendLogin = () => {
    const {user, pass, save } = this.state;
    // si no tiene usuario muestra el error
    if(user.length == 0){
      this.setState({userHelp:'Ingrese un mail valido'})
      return;
    }
    // si no tiene passsord muestra el error
    if(pass.length  == 0){
      this.setState({passHelp:'Ingrese una contraseÃ±a'})
      return;
    }

    if(save){ // guarda la informacion en el local storafe
      localStorage.setItem("user", user);
      localStorage.setItem("pass", pass);
    }
    localStorage.setItem("pass", save);

    // envia a procesar el login
    this.props.aSendLogin(user, pass);
  }

  // atuende cuando el input del usuario a cambiado
  userChange = (e) => {
    this.setState({user: e.target.value});
  }

  // atiende cuandi el inpuit del passsword a cambiado
  passChange = (e) => {
    this.setState({pass: e.target.value});
  }

  // atiende cuando el check del remember a guardado
  saveChange = (e) => {
    let save = !this.state.save;
    this.setState({save});
  }

  render() {
      const { user, pass, passHelp, userHelp, save } = this.state;

      return (
        <Container component="main" maxWidth="xs">

        <CssBaseline />

        <div className="login-paper">

          <Avatar className="login-avatar">
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className="login-form" noValidate>

            <TextField variant="outlined" margin="normal" required fullWidth autoFocus value={user} onChange={this.userChange}
              id="email" label="Correo Electrónico" name="email" autoComplete="email"
              helperText={userHelp} />

            <TextField variant="outlined" margin="normal" required fullWidth value={pass} onChange={this.passChange}
              name="password" label="Contraseña" type="password" id="password" autoComplete="current-password"
              helperText={passHelp} />


            <FormControlLabel
              control={<Checkbox value="remember" color="primary" checked={save} onChange={this.saveChange}/>}
              label="Recordarme"
            />

            <Button fullWidth variant="contained" color="primary" className="login-submit" onClick={this.sendLogin}>
              Ingresar
            </Button>

            <LoginMsg msg={this.props.msg}/>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Olvide mi contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"No tienes cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>

        <Box mt={8}>
          <Copyright />
        </Box>

      </Container>
      );
  }
}

const mapStateToProps = (state) => ({
    msg : state.tienda.loginMsg,
});

const mapDispatchToProps = {
    aSendLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

