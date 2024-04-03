import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function FAQQuery() {
  return (
    <div className="flex flex-row justify-between bg-white w-[100%] my-5 py-3 px-5">
      <p>

      How much do you earn everyday?
      </p>
       <FontAwesomeIcon icon={faPlus} />
    </div>
  );
}
