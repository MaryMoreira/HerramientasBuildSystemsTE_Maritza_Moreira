import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { aSendLogout } from '../redux/actions';
import * as ROUTES from '../constants/routes';

import DB from '../services/db';

const Header = (props) => {

  DB.existUser("dadasd", "dadad");

  // si no esta autentificado no muestra la cabecera
  if(!props.isAuth){
    return (<div></div>)
  }

  return (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    </ul>
  </div>)
};


const mapStateToProps = (state) => ({
  isAuth : state.isAuth,
});

const mapDispatchToProps = {
  aSendLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);