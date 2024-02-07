import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const replaceOnClick = () => {
    let newText = text.replace(/^\w+/, 'salfeen');
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('please enter the text here');

  return (
    <>
      <div>
        <div className={`container`}>
          <label htmlFor="mybox" className="form-label">
            {props.heading}
          </label>
          <textarea
            className={`form-control`}
            style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'dark' ? 'white' : 'black' }}
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <div className="container">
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert to lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={replaceOnClick}>
            Replace the text
          </button>
        </div>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>COUNT THE WORDS</h1>
        {text.trim() === '' ? (
          <p>0 words and 0 characters</p>
        ) : (
          <>
            <p>{text.split(/\s+/).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).length} minutes read</p>
            <h2>preview</h2>
            <p>{text}</p>
          </>
        )}
      </div>
    </>
  );
}

