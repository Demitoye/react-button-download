import React from "react";
const DemiTest1 = (props) => {
  return (
    <button
      data-id={props.id}
      type={props.type}
      name={props.name}
      style={{
        backgroundColor: "#5cb85c",
        color: "white",
        fontSize: 12,
        border: 0,
        padding: 5,
        height: 50,
        width: 100,
        borderRadius: 6,
        margin: 5,
        cursor: "pointer",
        ...props.style,
      }}
      value={props.value}
      disabled={props.disabled}
      onClick={props.handleClick}
    >
      <h4>{props.label}</h4>
    </button>
  );
};


 const DemiTest2 = (props) => {
  return (
    <button
      className={`btn btn--${props.kind} CTA`}
      data-id={props.id}
      type={props.type}
      name={props.name}
      style={{
        backgroundColor: "#0275d8",
        color: "white",
        fontSize: 12,
        border: 0,
        padding: 5,
        height: 50,
        width: 100,
        borderRadius: 6,
        margin: 5,
        cursor: "pointer",
        ...props.style,
      }}
      value={props.value}
      disabled={props.disabled}
      onClick={props.handleClick}
    >
      <h4>{props.label}</h4>
    </button>
  );
};

//  primary2: '#24A0ED',
//     primary: '#0275d8',
//     secondary: '#3f37c8',
//     accent: '#4895ef',
//     // danger: '#f72585',
//     danger: '#bb2124',
//     danger2: '#dg534f',
//     warning: '#f0ad48',
//     success: '#5cb85c',
//     success2: '#4cc9f0',
//     grey: '#adb5bd',
//     white: '#ffffff',


export{DemiTest1,DemiTest2}