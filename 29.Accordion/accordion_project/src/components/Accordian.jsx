import React from "react";
import { useState } from "react";

const Accordian = ({ data }) => {
  const [selected, setselected] = useState(null);
  const [enebleMultiselection, setEnebleMultiselection] = useState(false);
  const [multiselected, setMultiselected] = useState([]);
  const handelselection = (selectedID) => {
    // console.log(selectedID);

    if (selectedID == selected) {
      setselected(null);
    } else {
      setselected(selectedID);
    }
  };
  const handelmultiselection = (currentID) => {
    let copymultiple = [...multiselected];
    let findIdxofcurrentID = copymultiple.indexOf(currentID)
    if ( findIdxofcurrentID == -1) {
      copymultiple.push(currentID);
    }else{
        copymultiple.splice(findIdxofcurrentID,1)
    }
    setMultiselected(copymultiple);
    console.log(copymultiple);
    

};
  console.log(enebleMultiselection);

  return (
    <div className="accordian w-[500px] flex flex-col items-center gap-3 ">
      <button
        className="bg-red-800 text-white w-[10em] p-1 rounded-md active:bg-black active:text-white"
        onClick={() => {
          setEnebleMultiselection((prev) => !prev);
        }}
      >
        Enable Multiselection{" "}
      </button>
      {data && data.length > 0 ? (
        data.map((d) => {
          return (
            <div className="item bg-orange-400 w-full">
              <div
                onClick={() => {
                  if (enebleMultiselection) {
                    handelmultiselection(d.id); // Handle multiselection
                  } else {
                    handelselection(d.id); // Handle single selection
                  }
                }}
                className="title flex justify-between"
              >
                <h3 className="font-bold text-xl">{d.question}</h3>
                <span>+</span>
              </div>
              {enebleMultiselection ?
                multiselected.indexOf(d.id)!== -1 &&  <div className="bg-orange-500 text-white">{d.answer}</div>
                : selected === d.id ? <div className="bg-orange-500 text-white">{d.answer}</div> : null
            }
              {/* {d.id === selected ? (
                <div className="bg-orange-500 text-white">{d.answer}</div>
              ) : null} */}
            </div>
          );
        })
      ) : (
        <div>No data found .. </div>
      )}
    </div>
  );
};

export default Accordian;
