import React from "react";
import { Link } from "react-router-dom";
export default function Header()
{
  return(
  <header>
      <ul>
        <li><Link to="hello">First Component </Link> </li>
        <li><Link to="add"> Second Component </Link></li>
      </ul>


  </header>)
}