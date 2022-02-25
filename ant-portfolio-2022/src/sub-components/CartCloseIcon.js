import "../style/sub-components/CartCloseIcon.css";
import CloseIcon from "@mui/icons-material/Close";

function CartCloseIcon({ toggleCartDisplayOpacity, cartOpacity, cartDisplay }) {
  return (
    <div className="CartCloseIcon">
      <div
        onClick={toggleCartDisplayOpacity}
        className={`CartCloseIcon__wrapper${
          cartOpacity ? " CartCloseIcon__wrapper--open" : ""
        } ${
          cartDisplay !== cartOpacity
            ? "CartCloseIcon__wrapper--unclickable"
            : ""
        }`}
      >
        <CloseIcon />
      </div>
    </div>
  );
}

export default CartCloseIcon;
