import React, { useReducer, useState } from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Button from "./Button";

const percentageReducer = (state, action) => {
  switch (action.type) {
    case "me":
      return { ...state, me: action.payload };
    case "friend":
      return { ...state, friend: action.payload };
    default:
      return state;
  }
};

function App() {
  const [bill, setBill] = useState("");
  // const [percentage, setPercentage] = useState({ me: 0, friend: 0 });
  const [percentage, dispatchPercentage] = useReducer(percentageReducer, {
    me: 0,
    friend: 0,
  });

  let showOutput = !(bill === "" || bill === 0);
  const resetForm = () => {
    setBill("");
    dispatchPercentage({ type: "me", payload: 0 });
  };

  return (
    <React.Fragment>
      <BillInput bill={bill} onGetBill={(bill) => setBill(bill)}>
        How much was the bill?
      </BillInput>

      <SelectPercentage
        percentage={percentage.me}
        onGetPercentage={(percentage) =>
          dispatchPercentage({ type: "me", payload: percentage })
        }
      >
        How did you like the service?
      </SelectPercentage>

      <SelectPercentage
        percentage={percentage.friend}
        onGetPercentage={(percentage) =>
          dispatchPercentage({ type: "friend", payload: percentage })
        }
      >
        How did your friend like the service?
      </SelectPercentage>

      {showOutput && (
        <React.Fragment>
          <Output
            bill={bill}
            percentage={(percentage.me + percentage.friend) / 2}
          />
          <Button onClick={resetForm}>Reset</Button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;
