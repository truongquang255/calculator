import React, { useState } from "react";
import { foods } from "../Data/data";
import Food from "../components/Food";
export default function index() {
  const perPage = 20;
  const [page, setPage] = useState(1);

  function PagingButtons(total, perPage) {
    const output = [];
    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
      output.push(
        <li
          key={i}
          className={`hover:bg-orange-400 hover:text-white p-2 cursor-pointer  ${
            page == i ? "bg-orange-400 text-white" : ""
          } `}
          onClick={() => {
            setPage(i);
          }}
        >
          {i}
        </li>
      );
    }
    return output;
  }

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="w-[1200px] container gap-4 grid grid-cols-5">
        {foods.slice((page - 1) * perPage, perPage * page).map((food) => {
          return <Food key={food.id} food={food}></Food>;
        })}
      </div>
      <div>
        <ul className="flex gap-4">
          <li
            className={`p-2 cursor-pointer `}
            onClick={() => {
              setPage(Math.max(page - 1, 1));
            }}
          >{`<`}</li>

          {PagingButtons(foods.length, perPage)}
          <li
            className={`p-2 cursor-pointer `}
            onClick={() => {
              setPage(Math.min(Math.ceil(foods.length / perPage), page + 1));
            }}
          >{`>`}</li>
        </ul>
      </div>
    </div>
  );
}
