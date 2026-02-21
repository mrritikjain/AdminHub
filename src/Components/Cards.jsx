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
    <div>
      {cards.map((card) => (
        <div key={card.id}>
          {card.cardName} - {card.NumberCount} - {card.PercentDifference}
        </div>
      ))}
    </div>
  );
};

export default Cards;
