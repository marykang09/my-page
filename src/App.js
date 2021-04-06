import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Blogs from './Components/Blogs'
import Portfolio from './Components/Portfolio';
import Image from './Components/Image'
import yosemite from './assets/yosemite.jpg'
import korea from './assets/korea.jpg'
import Photography from './Components/Photography'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-180572879-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Image image={yosemite} />
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Blogs data={this.state.resumeData.blogs} />
        {/* <Photography /> */}
        <Contact data={this.state.resumeData.main}/>
        <Image image={korea} />
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
