import React, { FC } from "react";
import { Link } from "react-router-dom";

interface NavProps {
  href?: string;
  label?: string;
}

const NavLink: FC<NavProps> = (props) => {
  return <Link to={""}>{props.label}</Link>;
};

export default NavLink;
