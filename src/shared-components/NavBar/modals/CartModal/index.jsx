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
        <div className="h-screen w-full max-w-xl bg-neutral-200 px-4 py-24 shadow-2xl shadow-neutral-200">
          {cartItems.length ? (
            <div className="flex h-full flex-col justify-between">
              <div className="flex flex-wrap justify-center">
                {cartItems.map((boardIndex) => (
                  <img
                    src={`/grb/board_${boardIndex}.webp`}
                    alt={`Skateboard ${boardIndex}.`}
                    className="m-2 h-20 w-20 rounded-full shadow-2xl shadow-neutral-200 sm:h-32 sm:w-32"
                    key={`item_${boardIndex}`}
                  />
                ))}
              </div>
              <button
                onClick={clearCart}
                className="mx-28 rounded-full bg-neutral-300 px-4 py-4 font-medium text-orange-400 shadow-2xl shadow-neutral-200 hover:bg-neutral-400"
              >
                CLEAR CART
              </button>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-xl font-medium text-neutral-600">
              CART IS EMPTY
            </div>
          )}
        </div>
      </div>
    </RemoveScroll>
  );
};
