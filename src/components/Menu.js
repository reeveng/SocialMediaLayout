import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Home } from "../assets/vectors/home.svg";
import { ReactComponent as Settings } from "../assets/vectors/settings.svg";
import { ReactComponent as Edit } from "../assets/vectors/edit.svg";
import { ReactComponent as Collage } from "../assets/vectors/collage.svg";
import { ReactComponent as Spinner } from "../assets/vectors/spinner.svg";

const Menu = () => {
  return (
    <div className="c-menu">
      <Link to="/" className="c-menu__item">
        <Home></Home>
      </Link>
      <Link to="/" className="c-menu__item selected">
        <Collage></Collage>
      </Link>
      <Link to="/" className="c-menu__item">
        <Spinner></Spinner>
      </Link>
      <Link to="/" className="c-menu__item">
        <Edit></Edit>
      </Link>
      <Link to="/" className="c-menu__item">
        <Settings></Settings>
      </Link>
    </div>
  );
};

export default Menu;