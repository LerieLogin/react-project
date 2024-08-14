import { NavLink } from 'react-router-dom'

const styles = {
  nav: {
    display: 'flex',
    gap: 12
  }
}

const Nav = ({ activePage, setActivePage }) => {

  const getActiveClass = ({ isActive }) => isActive ? 'active' : ''

  return (
    <nav style={styles.nav}>
      <NavLink to='/' className={getActiveClass}>
        Home
      </NavLink>
      
      <NavLink to='/about' className={getActiveClass}>
        About
      </NavLink>
      
      <NavLink to='/contact' className={getActiveClass}>
        Contact
      </NavLink>
    </nav>
  )
}

export default Nav