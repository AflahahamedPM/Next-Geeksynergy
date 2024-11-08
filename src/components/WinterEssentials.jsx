import React, {memo} from "react";
import { cardDetails } from "../constants/CardDetails";
import CardComponent from "./CardComponent";

const WinterEssentials = memo(() => {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="uppercase text-2xl font-sans font-bold tracking-wider">
        Winter-Ready Essentials
      </h1>
      <div className="flex gap-2">
        {cardDetails.slice(0,4).map((data) => (
          <CardComponent
            key={data.id}
            id={data.id}
            title={data.title}
            imageUrl={data.imageUrl}
            subImage1={data.subImage1}
            price={data.price}
            color={data.color}
          />
        ))}
      </div>
    </div>
  );
});

export default WinterEssentials;
