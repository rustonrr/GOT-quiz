import React, { Component } from 'react';
import './Quiz.css';


export default function Quiz(props) {
  return (
    <div>
      <div className="Quiz-header">
        Question 1: Why test why test did the test of test be a test?
      </div>
      
      <div>

        <div>
          <p className="Question-header">Choose carefully</p>
        </div>

        <div className="Questions">
          <input type="radio" name="questionone" value="A test" /><label for="A test"> A test</label><br />
          <input type="radio" name="questionone" value="B test" /><label for="B test"> B test</label><br />
          <input type="radio" name="questionone" value="C test" /><label for="C test"> C test</label><br />
          <input type="radio" name="questionone" value="D test" /><label for="D test"> D test</label><br />
        </div>

        <button className="Button">Submit</button>

      
      </div>

    </div>
  )
}