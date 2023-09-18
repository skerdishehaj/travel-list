import React, { useState } from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Button from "./Button";

function App() {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState({ me: 0, friend: 0 });
  let showOutput = !(bill === "" || bill === 0);
  const resetForm = () => {
    setBill("");
    setPercentage({ me: 0, friend: 0 });
  };

  return (
    <React.Fragment>
      <BillInput bill={bill} onGetBill={(bill) => setBill(bill)}>
        How much was the bill?
      </BillInput>

      <SelectPercentage
        percentage={percentage.me}
        onGetPercentage={(percentage) =>
          setPercentage((prevPercentage) => ({
            ...prevPercentage,
            me: percentage,
          }))
        }
      >
        How did you like the service?
      </SelectPercentage>

      <SelectPercentage
        percentage={percentage.friend}
        onGetPercentage={(percentage) =>
          setPercentage((prevPercentage) => ({
            ...prevPercentage,
            friend: percentage,
          }))
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
