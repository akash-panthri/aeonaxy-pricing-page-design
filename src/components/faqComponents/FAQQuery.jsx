import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function FAQQuery({faqQuestion}) {
  return (
    <div className="flex flex-row justify-between bg-white w-[100%] my-5 py-3 px-5">
      <p>

      {faqQuestion}
      </p>
       <FontAwesomeIcon icon={faPlus} />
    </div>
  );
}
