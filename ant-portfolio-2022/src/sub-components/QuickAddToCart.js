import "../style/sub-components/QuickAddToCart.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useSpring, animated as a } from "react-spring";

function QuickAddToCart() {
  return (
    <div className="QuickAddToCart">
      <ShoppingBagOutlinedIcon />
    </div>
  );
}
export default QuickAddToCart;
