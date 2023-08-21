import { useState } from "react";
import "./App.css";
import { Bill } from "./Bill";
import { Friends } from "./Friends";

function App() {
  // STATE
  const [person, setPerson] = useState(null);
  const [isOpen, setisOpen] = useState(false);
  // STATES FOR BILL
  const [bill, setBill] = useState(0);
  const [your, setYour] = useState(0);
  const [selectinfo, setSelectInfo] = useState("You");
  // STATE FOR FRIEND
  const [description, setDescription] = useState(null);
  const [color, setColor] = useState(null);

  // HANDLER
  function selectHandler(person) {
    setPerson(person);
    setisOpen(true);
  }

  function billHandler(e) {
    e.preventDefault();
    setisOpen(false);
    // get the select information make an condition
    let message = "";
    // const message =
    //   selectinfo === "You"
    //     ? `${person} owes you ${Number(bill) - Number(your)}`
    //     : `You owe ${person} ${Number(bill) - Number(your)}`;

    if (selectinfo === "You") {
      message = `${person} owes you £${Number(bill) - Number(your)}`;
      setColor("green");
    } else {
      message = `You owe ${person} £${Number(bill) - Number(your)}`;
      setColor("red");
    }

    // And send back to the friend component relevant information
    // Upgrade to description
    setDescription(message);

    setBill(0);
    setYour(0);
  }

  return (
    <div className="container">
      <Friends
        selecthandler={selectHandler}
        des={description}
        person={person}
        color={color}
      ></Friends>
      {isOpen && (
        <Bill
          bill={bill}
          setBill={setBill}
          your={your}
          setYour={setYour}
          selectinfo={selectinfo}
          setSelectInfo={setSelectInfo}
          personname={person}
          billHandler={billHandler}
        ></Bill>
      )}
    </div>
  );
}

export default App;
