import React from "react";

export default function FeatureCardTop() {
  return (
    <div className="w-[200px] lg:w-[20%] p-[10px] flex flex-col justify-between">
      <h2 className="text-2xl font-medium mb-3 lg:mb-0">Feature</h2>
      <h2 className="text-3xl font-semibold mb-3 lg:mb-0">Features by plan</h2>
      <p className="font-normal text-lg text-gray-400">
        Find the subscription that makes the most sense for you or your team
      </p>
    </div>
  );
}
