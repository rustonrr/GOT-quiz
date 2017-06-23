import React, { Component } from 'react';
import './Quiz.css';
import { Link } from "react-router-dom";


export default function Quiz(props) {
  return (
    <div>
      <div className="Quiz-header">
        Question 1: What is the name of the Stark ancestral home?
      </div>
      
      <div>

        <div>
          <p className="Question-header">Choose Carefully</p>
        </div>

        <div className="Questions">
          <input type="radio" name="questionone" value="A test" /><span> Winterfell</span><br /> 
          {/*SWAP OUT ALL OF THE LABEL TAGS FOR SPAN TAGS*/}
          <input type="radio" name="questionone" value="B test" /><label for="B test"> B test</label><br />
          <input type="radio" name="questionone" value="C test" /><label for="C test"> C test</label><br />
          <input type="radio" name="questionone" value="D test" /><label for="D test"> D test</label><br />
        </div>


        <button className="Button"><Link to={"/quiz2"}>Submit</Link></button>


      
      </div>

    </div>
  )
}