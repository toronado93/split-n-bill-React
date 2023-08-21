// import { useState } from "react";

export function Bill(props) {
  // STATE

  // YOU dont need handler in same component

  // DEVIRE thirtperson
  let thirtperson = props.bill - props.your;

  return (
    <div className="bill_wrapper">
      <h1>Split A Bill With {props.personname}</h1>
      <form className="fff_form">
        <div className="bill_element_even_column">
          <label>Bill Value</label>
          <input
            type="number"
            placeholder="0"
            value={props.bill}
            onChange={(e) => {
              props.setBill(e.target.value);
            }}
          ></input>
        </div>
        <div className="bill_element_even_column">
          <label>Your Expense</label>
          <input
            placeholder="0"
            value={props.your}
            onChange={(e) => {
              props.setYour(e.target.value);
            }}
            type="number"
          ></input>
        </div>
        <div className="bill_element_even_column">
          <label>{props.personname} expense</label>
          <input value={thirtperson} type="number" readOnly></input>
        </div>
        <div className="bill_element_even_column">
          <label>Who is paying the bill?</label>
          <select
            value={props.selectinfo}
            onChange={(e) => {
              props.setSelectInfo(e.target.value);
            }}
          >
            <option value="You">You</option>
            <option value={props.personname}>{props.personname}</option>
          </select>
        </div>
        <button onClick={props.billHandler} className="btn">
          Split bill
        </button>
      </form>
    </div>
  );
}
