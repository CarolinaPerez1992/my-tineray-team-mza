import React from "react";
import { Link as NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../img/logo.png";
import usuario from "../img/usuario.png";
import hambur from "../img/hambur.png";
import { Link } from "react-router-dom";
import "../index.css";
import { useSelector, useDispatch } from "react-redux"
import Swal from "sweetalert2"
import userAction from "../redux/actions/userAction"
import out from "../img/iniciar-sesion.png"




export default function NavBar() {
  const dispatch = useDispatch()
  let { exit } = userAction
  let { role, logged, token } = useSelector(state => state.userReducer)
  let [mostrar, setMostrarOcultar] = useState(true);
  let change = () => {
    setMostrarOcultar(!mostrar);
  };

  let [mostrarMenu, setMostrarMenu] = useState(false);
  let menu = () => {
    setMostrarMenu(!mostrarMenu);
  };
  function logOut(e) {
    Swal.fire({
      title: 'Are you sure you want to log out?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!'
    })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(exit(token))
          Swal.fire(
            'Logged out!',
            'You have been logged out',
            'success'
          )
        }
      })
  }



  return (
    <header className="nav-bar">
      <Link to="/">
        <img className="" width="100" src={logo} alt="" />
      </Link>

      {mostrarMenu ? (
        <div className="">
          <img src={hambur} onClick={menu} alt="menu" />
          <div className="nav1">
            <NavLink to="/cities" style={{ textDecoration: "none" }}>
              <h2>Cities</h2>
            </NavLink>
            <NavLink to="/hotels" style={{ textDecoration: "none" }}>
              <h2>Hotels</h2>
            </NavLink>

          </div>
        </div>
      ) : (
        <div className="flex-menu">
          <img src="{hambur}" onClick={menu} alt="" />
        </div>
      )}
      <nav className="citi-hote">
        <Link to="/cities" style={{ textDecoration: "none" }}>
          <h6 className="btn">Cities</h6>
        </Link>
        <Link to="/hotels" style={{ textDecoration: "none" }}>
          <h6 className="btn">Hotels</h6>
        </Link>
      </nav>
      {mostrar ? (
        <div className="login">
          <img src={usuario} width="45" onClick={change} alt="" />
        </div>
      ) : (
        <div className="login">
          <img src={usuario} width="45" onClick={change} alt="" />
          <div className="datosLogin">
            {!logged && (
              <>
                <Link to="/sign-in" style={{ textDecoration: "none" }}>
                  <li>SignIn</li>
                </Link>
                <Link to="/sign-up" style={{ textDecoration: "none" }}>
                  <li>SignUp</li>
                </Link>

              </>
            )}

            {logged && (
              <div>
                <NavLink to="/mytinerary" style={{ textDecoration: "none" }}>
                  <li>My Tinerary</li>
                </NavLink>
                <NavLink to="/myshow" style={{ textDecoration: "none" }}>
                  <li>My Shows</li>
                </NavLink>
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <button onClick={logOut}>EXIT</button>
                </NavLink>
              </div>
            )}
            {role === 'admin' && (
              <>
                <NavLink to="/newcity" style={{ textDecoration: "none" }}>
                  <li>New City</li>
                </NavLink>
                <NavLink to="/newhotel" style={{ textDecoration: "none" }}>
                  <li>New Hotel</li>
                </NavLink>
                <NavLink to="/mycities" style={{ textDecoration: "none" }}>
                  <li>My Cities</li>
                </NavLink>
                <NavLink to="/myhotels" style={{ textDecoration: "none" }}>
                  <li>My Hotels</li>
                </NavLink>
                

              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
// {
//   /* <Link to="/">
//   <img className="" width="100" src={logo} alt="" />
// </Link>; */
// }
