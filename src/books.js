
import React from 'react';
import {
  Link
} from "react-router-dom";

class Books extends React.Component{
	state = {
		books: []
	}
	componentDidMount() {
		fetch('/api/book/', {mode: 'no-cors',headers: {
    			'Content-Type': 'application/json'
  			}})
  			.then(response => {
  				return response.json()
  			})
  			.then(data => {
  				this.setState({books: data})
  			});
	}

	render() {
	  return (
	  	<div>
	  		<div>Books displayed here</div>
	  		<ul>
	  			{this.state.books.map((book, i) => <li key={i}><Link to={`/books/${book.id}`}>{book.title}</Link></li>)}
	  			
	  		</ul>
	  	</div>
	  );
	}
}

export default Books;
