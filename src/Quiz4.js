import React, { Component } from 'react';
import './Quiz.css';
import { Link } from "react-router-dom";

export default function Quiz(props) {
  return (
    <div>
      <div className="Quiz-header">
        Question 4: What is the name of Daenerys' largest dragon
      </div>
      
      <div>

        <div>
          <p className="Question-header">Choose Carefully</p>
        </div>

        <div className="Questions">
          <input type="radio" name="questionone" value="A test" /><label for="A test"> A test</label><br />
          <input type="radio" name="questionone" value="B test" /><label for="B test"> B test</label><br />
          <input type="radio" name="questionone" value="C test" /><label for="C test"> C test</label><br />
          <input type="radio" name="questionone" value="D test" /><label for="D test"> Drogon</label><br />
        </div>

        <button className="Button"><Link to={"/quiz5"}>Submit</Link></button>

        {/*<div>{props.children}</div>*/}

      
      </div>

    </div>
  )
}