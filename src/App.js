import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import resumeData from './resumeData';
import Bounce from 'react-reveal/Fade'
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header resumeData={resumeData}/>
        <Bounce left>
        <About resumeData={resumeData}/>
        </Bounce>
        <Bounce right>
        <Resume resumeData={resumeData}/>
        </Bounce>
        <Portfolio resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
        
      </div>
    );
  }
}

export default App;
