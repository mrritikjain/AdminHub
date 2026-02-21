import { PercentDiamond } from "lucide-react";
import React from "react";

const Cards = () => {
  const cards = [
    { id: 1, cardName: "Total Users", NumberCount: 203, PercentDifference: 4 },
    {
      id: 2,
      cardName: "Active Projects",
      NumberCount: 58,
      PercentDifference: 3,
    },
    { id: 3, cardName: "Revenue", NumberCount: 20003, PercentDifference: 2 },
    {
      id: 4,
      cardName: "Pending Tasks",
      NumberCount: 18,
      PercentDifference: 12,
    },
  ];
  return (
    <div className="flex w-[100%] gap-[1%]">
      {cards.map((card) => (
        <div key={card.id} className="bg-slate-50 px-5 py-5 rounded-lg w-[24%] border border-stone-300 hover:scale-105 duration-300">
          <h2 className="text-lg mb-5 text-taupe-800">{card.cardName}</h2>
          <div className="flex justify-between items-center"><h2 className="text-4xl font-bold"> {card.NumberCount} </h2>
          <h3 className="text-lg text-emerald-600 font-bold">{card.PercentDifference} %</h3></div>
           
        </div>
      ))}
    </div>
  );
};

export default Cards;
