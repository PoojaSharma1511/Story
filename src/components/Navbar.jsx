import {Link} from 'react-router-dom'
import { useSelector} from 'react-redux'

function Navbar() {
  
  const cart = useSelector(state => state.cart)
  
    
  
  
  
  return (
    <nav>
    <h3><span className='V'>V</span>BrainyLingo</h3>
        <ul className="nav-links">
        <Link to={"/"}><li> <button className="cart"> Home </button> </li></Link>

          
            <Link to={"/cart"}><li> <button className="cart"> Cart ({cart.length}) </button> </li></Link>
            <li> <button className="cart"> Sign Out </button> </li>



        
        </ul>
    </nav>
  )
}

export default Navbar
