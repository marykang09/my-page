import React, { Component } from 'react';

class Header extends Component {
   state = {
      activeLink: null
   }

   handleClick = (event) => {
      console.log("clicked!", event.target.name)
      this.setState({ 
         activeLink: event.target.name
    })
   }

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var description= this.props.data.description;
      var intro= this.props.data.intro;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a target="_blank" rel="noopener noreferrer" href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li><a className={this.state.activeLink === "Home" ? "current" : null} name="Home" href="#home" onClick={this.handleClick}>Home</a></li>
            <li><a className={this.state.activeLink === "About" ? "current" : null} name="About" href="#about" onClick={this.handleClick}>About</a></li>
	         <li><a className={this.state.activeLink === "Resume" ? "current" : null} name="Resume" href="#resume" onClick={this.handleClick}>Resume</a></li>
            <li><a className={this.state.activeLink === "Portfolio" ? "current" : null} name="Portfolio" href="#portfolio" onClick={this.handleClick}>Projects</a></li>
            <li><a className={this.state.activeLink === "Blogs" ? "current" : null} name="Blogs" href="#blogs"  onClick={this.handleClick}>Blogs</a></li>
            {/* <li><a className={this.state.activeLink === "Photography" ? "current" : null} name="Photography" href="#photography" onClick={this.handleClick}>Photography</a></li> */}
            <li><a className={this.state.activeLink === "Contact" ? "current" : null} name="Contact" href="#contact" onClick={this.handleClick}>Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Hey there! <br></br> I'm {name}.</h1>
            <h3> {intro}<br></br> {description}</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
