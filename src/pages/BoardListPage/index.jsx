import { NavBar } from "shared-components/NavBar";
import { BoardItem } from "./BoardItem";

export const BoardListPage = () => (
  <div>
    <NavBar />
    <div className="flex justify-center py-24">
      <div className="w-full max-w-5xl">
        <div className="flex flex-wrap justify-center">
          {[...Array(9)].map((_, i) => (
            <BoardItem index={i} key={i} />
          ))}
        </div>
      </div>
    </div>
  </div>
);
