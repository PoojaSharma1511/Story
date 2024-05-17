import { useDispatch } from 'react-redux'
import {remove} from '../store/cartSlice'

function CartItem({product}) {
  
    const {Image , StoryTitle , id , Title } = product
  
    const dispatch = useDispatch()

    const handleDelete = (id)=> {
        dispatch(remove(id))
    }

    return (
    <div className="cart-item">
    <img src={Image} alt="" />
    <span>
      <h1>{Title}</h1>
      <h3>Story Title : {StoryTitle}</h3>
      <h3>QTY : 1</h3>
    </span>
    
    <button className="remove-btn" onClick={()=>handleDelete(id)}>
      Remove Item
    </button>
  </div>
  )
}

export default CartItem