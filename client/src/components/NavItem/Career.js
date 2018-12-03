import React from 'react';

const Career = (props) => {
  return (
  	<div>
	    <table class="table table-striped">
		  <thead>
		    <tr>
		      <th scope="col">#</th>
		      <th scope="col">Position</th>
		      <th scope="col">Platform</th>
		      <th scope="col">Nos.</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <th scope="row">1</th>
		      <td>Senior Backend Developer</td>
		      <td>JavaScript(FullStack)</td>
		      <td>2</td>
		    </tr>
		    <tr>
		      <th scope="row">2</th>
		      <td>Frontend Developer</td>
		      <td>Reactjs & Redux</td>
		      <td>5</td>
		    </tr>
		    <tr>
		      <th scope="row">3</th>
		      <td>Software Engineer</td>
		      <td>Pyhton/Django</td>
		      <td>6</td>
		    </tr>
		  </tbody>
		</table>
	</div>
  )
}

export default Career;
