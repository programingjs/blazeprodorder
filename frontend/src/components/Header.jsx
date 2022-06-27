import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
        <div>
            <Link to='/' >BLAZE</Link>
        </div>
        <ul>
            <li>
                <Link to='/products'>
                    <FaSignInAlt/> Products
                </Link>
            </li>

            <li>
                <Link to='/orders'>
                    <FaUser/> Orders
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header