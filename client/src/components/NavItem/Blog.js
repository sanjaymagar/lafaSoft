import React from 'react';
import { Link } from 'react-router-dom';

const Blog = (props) => {
  return (
    <div className="card text-center">
	  <div className="card-header">
	    Blog
	  </div>
	  <div className="card-body">
	    <h5 className="card-title">How to start with ReactJS?</h5>
	    <p className="card-text">
		    A blog is a discussion or informational website published on the 
		    World Wide Web consisting of discrete, often informal diary-style text entries. 
		    Posts are typically displayed in reverse chronological order, 
		    so that the most recent post appears first, at the top of the web page.
	    </p>
	    <Link to="#" className="btn btn-primary">Read More...</Link>
	  </div>
	  
	</div>
  )
}

export default Blog;
