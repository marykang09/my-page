import React, { Component } from 'react';

class Blogs extends Component {
  render() {

   if(this.props.data){
      var blogs = this.props.data.blogs.map(function(blogs){
        var blogImage = 'images/blogs/'+blogs.image;
        return <div key={blogs.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a target="_blank" rel="noopener noreferrer" href={blogs.url} title={blogs.title} >
               <img alt={blogs.title} src={blogImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{blogs.title} <i className="fa fa-link"></i></h5>
                     <p>{blogs.category}</p>
                  </div>
                </div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="blogs">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Read My Blogs</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {blogs}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Blogs;
