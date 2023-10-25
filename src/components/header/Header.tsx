import { Link, Outlet } from 'react-router-dom'
// import CONST from '../../assets/js/Constant.js'

export default function Header() {
  return (
    <header id='header'>
      <ul>
        <li>
          <Link to='/html'>Blog</Link>
        </li>
      </ul>
      <Outlet />
    </header>
  )
}
