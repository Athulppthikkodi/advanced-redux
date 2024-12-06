import classes from './CartButton.module.css';
import { uiAction } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const CartButton = (props) => {
  const dispatch = useDispatch();
  function toggleCartHandler(){
    dispatch(uiAction.toggle())
  }
  const totalQuantity = useSelector(state=> state.cart.totalQuantity)
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
