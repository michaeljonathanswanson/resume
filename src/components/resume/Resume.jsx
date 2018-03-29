import React, { Component } from 'react';
import './Resume.css';
import ResumeImg from "../../media/resume-pic.jpg";
import PhoneImg from "../../media/phone.png";
import EmailImg from "../../media/email.png";
import PersonImg from "../../media/person.png";
import ES6Img from "../../media/ES6.png";
import ReactImg from "../../media/React.png";
import NodeImg from "../../media/Node.png";
import MeteorImg from "../../media/Meteor.png";
import MongoImg from "../../media/Mongo.png";
import SassImg from "../../media/Sass.png";
import VideoGamesImg from "../../media/video-games.png";
import MoviesImg from "../../media/Movies.png";
import MusicImg from "../../media/Music.png";
import HikingImg from "../../media/Hiking.png";

class Resume extends Component {
  render() {
    return (
      <div className='c-resume background-image'>
        <div className='background-container'></div>

        <div className='resume-container'>
          <div className='section-container'>
            <div className='left-container'><img alt='' className='face-panel' src={ResumeImg} /></div>
            <div className='name-panel right-container'>
              <h1 className='first-name'>michael</h1>
              <h1 className='last-name'>swanson</h1>
              <div className='info-text'><img alt='' className='icons' src={PhoneImg} /><span> (936) 207-3715</span></div>
              <div className='info-text'><img alt='' className='icons' src={EmailImg} /><span> michaeljonathanswanson@gmail.com</span></div>
            </div>
          </div>

          <div className='section-container'>
            <div className='work-left'>
              <div className='title'><h2>languages</h2></div>

              <div className='language-flex'>
                <div className='tooltip'>
                  <img alt='' className='language-icons' src={ES6Img} />
                  <span className='tooltiptext'>JavaScript 6th edition, officially known as ECMAScript 2015, was finalized in June 2015. This update adds significant new syntax for writing complex applications, including classes and modules, but defines them semantically in the same terms as ECMAScript 5 strict mode. Other new features include iterators and for/of loops, Python-style generators and generator expressions, arrow functions, binary data, typed arrays, collections (maps, sets and &nbsp; weak maps), promises, number and math enhancements, reflection, and proxies (metaprogramming for virtual objects and wrappers). The complete list is extensive.</span>
                </div>
                <div className='tooltip'>
                  <img alt='' className='language-icons' src={SassImg} />
                  <span className='tooltiptext'>Sass is a scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called "the indented syntax", uses a syntax similar to Haml. It uses indentation to separate code blocks and newline characters to separate rules. The newer syntax, "SCSS", uses block formatting like that of CSS. It uses braces to denote code blocks and &nbsp; semicolons to separate lines within a block. The indented syntax and SCSS files are traditionally given the extensions .sass and .scss, respectively.</span>
                </div>
              </div>

              <div className='language-flex tooltip'>
                <img alt='React.js' className='language-icons' src={ReactImg} />
                <span className='tooltiptext'>React.js allows developers to create large web-applications that use data and can change over time without reloading the page. It aims primarily to provide speed, simplicity, and scalability. React processes only user interfaces in applications. This corresponds to View in the Model-View-Controller (MVC) pattern, and can be used in combination with other JavaScript libraries or frameworks in MVC, such as AngularJS.</span>
              </div>

              <div className='language-flex'>
                <div className='tooltip'>
                  <img alt='' className='language-icons' src={MongoImg} />
                  <span className='tooltiptext'>MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas. </span>
                </div>
                <div className='tooltip'>
                  <img alt='' className='language-icons' src={MeteorImg} />
                  <span className='tooltiptext'>Meteor, or MeteorJS, is a free and open-source isomorphic JavaScript web framework written using Node.js. Meteor allows for rapid prototyping and produces cross-platform (Android, iOS, Web) code. It integrates with MongoDB and uses the Distributed Data Protocol and a publish–subscribe pattern to automatically propagate data changes to clients without requiring the developer to write any synchronization code. On the client, Meteor can be used &nbsp; with its own Blaze templating engine, as well as with the Angular or React frameworks.</span>
                </div>
                <div className='tooltip'>
                  <img alt='' className='language-icons' src={NodeImg} />
                  <span className='tooltiptext'>Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm, allowing web application development to unify &nbsp; around a single programming language, rather than rely on a different language for writing server side scripts.</span>
                </div>
              </div>

            </div>

            <div className='work-right'>
              <div className='title'><h2>work experiences</h2></div>
              <div className='info-text'>
                <h3 style={{ marginBottom: 0 }}>Junior Web Developer</h3>
                <h3 style={{ marginTop: 0 }}>Gigaflops.io, Austin, TX: June 2017 to present</h3>
                <p>
                  As a Junior Web Developer worked on a SPA (single page application) with one other Developer. Together we created two websites (<a target='_blank' rel='noopener noreferrer' href='https://foytrentdogshows.meteorapp.com/'>Foy Trent Dog Shows</a> and <a target='_blank' rel='noopener noreferrer' href='https://foytrentdogshows-admin.meteorapp.com/'>Foy Trent Dog Shows Admin</a>)
                website for an AKC (American Kennel Club) Superintendent.
              </p>
                <p>
                  I created data entry screens, filterable sortable reports, pdf generated reports, and automatic emails. We used Reactjs/Sass/ES6 for the frontend, Meteor/Nodejs/MongoDB/ES6 for the backend, and GIT for source control.
              </p>
              </div>
            </div>
          </div>

          <div className='section-container'>
            <div className='left-container'>
              <div className='title'><h2>education</h2></div>
              <div className='info-text'>Hack Reactor</div>
              <div className='info-text'>Spring 2017</div>
            </div>

            <div className='right-container'>
              <div className='title'><h2>references</h2></div>
              <div display='inline-block'>
                <div className='info-text'><img alt='' className='icons' src={PersonImg} /><span> Shannon Swanson</span></div>
                <div className='info-text'><img alt='' className='icons' src={PhoneImg} /><span> (775) 297-6103</span></div>
                <div className='info-text'><img alt='' className='icons' src={EmailImg} /><span> shannonaswanson@gmail.com</span></div>
              </div>
              <div display='inline-block'>
                <div className='info-text'><img alt='' className='icons' src={PersonImg} /><span> Jamie Swanson</span></div>
                <div className='info-text'><img alt='' className='icons' src={PhoneImg} /><span> (775) 813-2239</span></div>
                <div className='info-text'><img alt='' className='icons' src={EmailImg} /><span> shannarabc@gmail.com</span></div>
              </div>
            </div>
          </div>

          <div className='section-container'>
            <div className='left-container'>
              <div className='title'><h2>hobbies</h2></div>

              <div className='language-flex'>
                <div className='tooltip'>
                  <img alt='' className='language-icons' src={VideoGamesImg} />
                  <span className='tooltiptext'>PC: StarCraft, Divinity Original Sin, PUBG. Switch: BOFW, Mario Odyssey, Mario Kart. Also huge fan of all old games NES, SNES, Old PC games and much more!  </span>
                </div>
                <div className='tooltip'>
                  <img alt='' className='language-icons' src={MoviesImg} />
                  <span className='tooltiptext'>Action: Most Marvel Movies. Drama: Breakfast Club, Fight Club. SyFy: Most Aliens films as well as Star Trek and Star Wars</span>
                </div>
                <div className='tooltip'>
                  <img alt='' className='language-icons' src={MusicImg} />
                  <span className='tooltiptext'>Metal: Tool, Perfect Circle, NIN, and much more.</span>
                </div>
                <div className='tooltip'>
                  <img alt='' className='language-icons' src={HikingImg} />
                  <span className='tooltiptext'>Brushy Creek, and River Place Nature Trail</span>
                </div>

              </div>

            </div>

            <div className='right-container'>
              <div className='title'><h2>objectives</h2></div>
              <div className='objectives'>Want to build beautiful and functional websites using React!!!</div>
            </div>
          </div>
        </div>
        <div className='react react-container'>Hello World</div>
      </div>
    );
  }
}


export default Resume;
