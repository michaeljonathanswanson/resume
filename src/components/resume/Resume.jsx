import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <div className='c-resume background-image'>
        <div className='background-container'></div>

        <div className='resume-container'>
          <div className='section-container'>
            <div className='face-panel left-container'>pic of me</div>
            <div className='name-panel right-container'><div className='first-name'>michael</div><div>swanson</div></div>
          </div>

          <div className='section-container'>
            <div className='left-container'>
              <div className='right-title'><h2>education</h2></div>
              <div className='education-info'>education info</div>
            </div>

            <div className='right-container'>
              <div className='left-title'><h2>references</h2></div>
              <div className='references-info'>references info</div>
            </div>
          </div>

          <div className='section-container'>
            <div className='left-container'>
              <div className='right-title'><h2>work experiences</h2></div>
              <div className='work-experiences'>work experiences</div>
            </div>

            <div className='right-container'>
              <div className='left-title'><h2>languages</h2></div>
              <div className='languages'>languages</div>
            </div>
          </div>

          <div className='section-container'>
            <div className='left-container'>
              <div className='right-title'><h2>hobbies</h2></div>
              <div className='hobbies'>hobbies</div>
            </div>

            <div className='right-container'>
              <div className='left-title'><h2>objectives</h2></div>
              <div className='objectives'>objectives</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Resume;
