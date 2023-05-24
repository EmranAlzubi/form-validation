import React, { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setenteredName] = useState("");
  const [enteredNamevaled, setNamevalid] = useState(false);
  const [enteredEmail, setenteredEmail] = useState("");
  const [enteredEmailvaled, setEmailvalid] = useState(false);
  const [form, setform] = useState(false);

  const validationstyle =
    !enteredNamevaled && !enteredEmailvaled
      ? "form-control"
      : "form-control invalid";

  const handelNameinput = (e) => {
    setenteredName(e.target.value);
    if (e.target.value.trim() !== "") {
      setNamevalid(false);
    }
  };
  const handelEmailinput = (e) => {
    setenteredEmail(e.target.value);
    if (e.target.value.trim() !== "") {
      setEmailvalid(false);
    }
  };
  const handelSubmit = (e) => {
    e.preventDefault();

    if (enteredName.trim() == "" && enteredEmail.trim() == "") {
      setNamevalid(true);
      setEmailvalid(true);

      return;
    } else if (enteredEmail.trim() == "") {
      setEmailvalid(true);
      return;
    } else if (enteredName.trim() == "") {
      setNamevalid(true);
      return;
    } else {
      setform(true);
    }

    const information = {
      name: enteredName,
      mail: enteredEmail,
    };

    props.data(information);
    // console.log(enteredName);
    // console.log(enteredEmail);
    setenteredName("");
    setenteredEmail("");
  };

  return (
    <form onSubmit={handelSubmit}>
      <div className={validationstyle}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={handelNameinput}
        />
        {enteredNamevaled && (
          <p className="error-text">Name can't be empty ....</p>
        )}
      </div>
      <div className={validationstyle}>
        <label htmlFor="name">Your Email</label>
        <input
          value={enteredEmail}
          type="Email"
          id="email"
          onChange={handelEmailinput}
        />
        {enteredEmailvaled && (
          <p className="error-text">E-mail can't be empty ....</p>
        )}
      </div>

      {form && <p className="submited">submitted ...</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
