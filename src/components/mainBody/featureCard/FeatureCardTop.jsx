import React from "react";

export default function FeatureCardTop() {
  return (
    <div className="w-[20%] p-[10px] flex flex-col justify-between">
      <h2 className="text-2xl font-medium">Feature</h2>
      <h2 className="text-3xl font-semibold">Features by plan</h2>
      <p className="font-normal text-lg text-gray-400">
        Find the subscription that makes the most sense for you or your team
      </p>
    </div>
  );
}
