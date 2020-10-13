import React, { Component } from 'react';
// import emailjs from 'emailjs-com'

class Contact extends Component {
   state = {
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: "",
      errorMessage: ""
   }

   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      })
   }

   onSubmit = (event) => {
      event.preventDefault()
      
      if (this.state.contactName.length > 0 && this.state.contactEmail.length > 0 && this.state.contactMessage.length > 0){
         this.sendEmail(this.state)
         console.log("this was submitted")
      } else {
         this.blankField()
      }
   }

   blankField = () => {
      this.setState({
         ...this.state,
         errorMessage: "Please fill out all required fields. Thanks!"
      })
   }

   //below works

   sendEmail = (info) => {
      window.emailjs.send("service_aw92c9h", "template_hnrcpyq", info)
      .then(res => {
         alert("Your message was sent! Thanks!")
      
         this.setState({
            contactName: "",
            contactEmail: "",
            contactSubject: "",
            contactMessage: "",
            errorMessage: ""
            })
      })
      .catch(error => alert("Please try again", error))
   }


  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">
            <div className="two columns header-col">
             
            
            </div>

            <div className="ten columns">
                  <h1> Get in Touch! </h1> 
                  <p className="lead">{message}</p>
            </div>

         </div>


         <div className="row">
            <div className="eight columns">
               
               <form id="contactForm" className="contact-form" >

                  {this.state.errorMessage.length > 0 ? <div id="message-warning"> {this.state.errorMessage} </div> : null}
                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text"  size="35" id="contactName" name="contactName" onChange={this.handleChange} value={this.state.contactName}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange} value={this.state.contactEmail}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange} value={this.state.contactSubject}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" onChange={this.handleChange} value={this.state.contactMessage}></textarea>
                  </div>

                  <div>
                     <button className="submit" onClick={this.onSubmit}>Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>

				   </form>

               {/* <div id="message-warning"> Error </div>
               <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
               </div> */}
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>My Contact</h4>
					   <p className="address">
						   {name}<br/>
                     {email}<br></br>
						   <span>{phone}</span>
					   </p>
				   </div>
            </aside>

         </div>
      </section>
    );
  }
}

export default Contact;
