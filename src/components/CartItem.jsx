import { useDispatch } from 'react-redux'
import {remove} from '../store/cartSlice'

function CartItem({product}) {
  
    const {Image , storyTitle , id , title } = product
  
    const dispatch = useDispatch()

    const handleDelete = (id)=> {
        dispatch(remove(id))
    }

    return (
    <div className="cart-item">
    <img src={Image} alt="" />
    <span>
      <h1>{title}</h1>
      <h3>Story Title : {storyTitle}$</h3>
      <h3>QTY : 1</h3>
    </span>
    
    <button className="remove-btn" onClick={()=>handleDelete(id)}>
      Remove Item
    </button>
  </div>
  )
}

export default CartItem