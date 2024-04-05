import React from "react";

export default function FeatureCardElement({ planDatum }) {
  return (
    <div className="w-[200px] lg:w-[15%] h-[250px] border p-3 flex flex-col justify-evenly ">
      <h2 className="text-2xl text-center">{planDatum.planName}</h2>
      <h2 className="text-4xl text-center">
        {planDatum.planName === "Enterprise"
          ? "-"
          : (isNaN(parseInt(planDatum.price) / 1)
          ? ""
          : "$") + planDatum.price}
      </h2>
      <button
        style={
          planDatum.planName === "Professional"
            ? {
                borderColor: planDatum.buttonBorder,
                background: planDatum.buttonBg,
                color: planDatum.buttonTextCol,
              }
            : {
                borderColor: "#000",
                background: "#fff",
                color: "#000",
              }
        }
        className="border-2 py-1 px-3 border-[#000000] rounded-[10px]"
      >
        {planDatum.planName === "Enterprise" ? "Contact Sales" : "Sign Up"}
      </button>
    </div>
  );
}
// { bg-[${planDatum.cardBg}]
//   "id":3, overflow-hidden
//   "cardBg":"#fff",
//   "buttonBg":"#056dff",
//   "cardTextCol":"#000",
//   "buttonTextCol":"#fff",
//   "buttonBorder":"#056dff",
//   "buttonText":"Start Professional",
//   "planName":"Professional",
//   "price":"12",
//   "planDetail":"When you need customization, integrations, and basic team features",
//   "popular":"dd"
// }
