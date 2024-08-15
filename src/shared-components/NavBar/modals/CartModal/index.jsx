import { useContext } from "react";
import { RemoveScroll } from "react-remove-scroll";
import { CartContext } from "contexts/CartContext";

export const CartModal = ({ setIsCartOpen }) => {
  const { cartItems, clearCart } = useContext(CartContext);

  return (
    <RemoveScroll>
      <div className="fixed left-0 top-0 z-10 flex h-full w-full bg-black/25 font-body backdrop-blur-sm">
        <div
          onClick={() => setIsCartOpen(false)}
          className="h-screen w-full"
        ></div>
        <div className="h-screen w-full max-w-xl bg-white px-4 py-16 shadow-2xl shadow-neutral-200">
          {cartItems.length ? (
            <div className="flex h-full flex-col justify-between">
              <div className="flex flex-wrap justify-center">
                {cartItems.map((boardIndex) => (
                  <img
                    src={`/grb/board_${boardIndex}.webp`}
                    alt={`Skateboard ${boardIndex}.`}
                    className="m-2 h-32 w-32 rounded-full shadow-2xl shadow-neutral-200"
                    key={`item_${boardIndex}`}
                  />
                ))}
              </div>
              <button onClick={clearCart} className="">
                CLEAR CART
              </button>
            </div>
          ) : (
            <div>CART IS EMPTY</div>
          )}
        </div>
      </div>
    </RemoveScroll>
  );
};
