import React, { Component } from 'react';
import './Quiz.css';
import { Link } from "react-router-dom";

export default function Quiz(props) {
  return (
    <div>
      <div className="Quiz-header">
        Question 2: How was Renly Baratheon killed?
      </div>
      
      <div>

        <div>
          <p className="Question-header">Choose Nothing</p>
        </div>

        <div className="Questions">
          <input type="radio" name="questionone" value="A test" /><label for="A test"> A test</label><br />
          <input type="radio" name="questionone" value="B test" /><label for="B test"> Stabbed by a shadow</label><br />
          <input type="radio" name="questionone" value="C test" /><label for="C test"> C test</label><br />
          <input type="radio" name="questionone" value="D test" /><label for="D test"> D test</label><br />
        </div>

        <button className="Button"><Link to={"/quiz3"}>Submit</Link></button>

        {/*<div>{props.children}</div>*/}

      
      </div>

    </div>
  )
}