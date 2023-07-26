import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import CONST from '../../assets/js/Constant.js'

export default function Header() {
  return (
    <header id='header'>
      <ul>
        <li>
          <Link to='/html'>HTML</Link>
        </li>
        <li>
          <Link to='/css'>CSS</Link>
        </li>
        <li>
          <Link to='/js'>JS</Link>
        </li>
        <li>
          <Link to='/ts'>TS</Link>
        </li>
        <li>
          <Link to='/java'>Java</Link>
        </li>
        <li>
          <Link to='/angular'>Angular</Link>
        </li>
        <li>
          <Link to='/react'>React</Link>
        </li>
        <li>
          <Link to='/react-native'>React Native</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </header>
  )
}
