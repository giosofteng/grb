const BOARD_ITEMS_INFO = [
  { desc: "Flowers", price: 44.95 },
  { desc: "Cartoon Mascot", price: 39.95 },
  { desc: "Zombie Bride", price: 64.95 },
  { desc: "Classic Guitar", price: 79.95 },
  { desc: "Spaceships", price: 39.95 },
  { desc: "Exotic Car", price: 64.95 },
  { desc: "Shapes and Colors", price: 44.95 },
  { desc: "Urban Landscape", price: 79.95 },
  { desc: "Pixel Art", price: 44.95 },
];

export const BoardItem = ({ index }) => (
  <div className="m-4 flex w-64 flex-col font-body text-neutral-600 shadow-md shadow-neutral-200">
    <div className="relative">
      <img
        src={`/grb/board_${index}.webp`}
        alt={`Board with ${BOARD_ITEMS_INFO[index].desc} design.`}
      />
      <div className="absolute left-0 top-0 h-full w-full bg-white/10 hover:bg-orange-400/50"></div>
    </div>
    <div className="flex justify-between p-2">
      <div>{BOARD_ITEMS_INFO[index].desc}</div>
      <div>{`$${BOARD_ITEMS_INFO[index].price}`}</div>
    </div>
  </div>
);
