import './App.css';
import Books from './books.js';
import Book from './book.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home(argument) {
  return "Home"
}

function App() {
  return (
   <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
                <li>
              <Link to="/books/1">Book 1</Link>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route path="/books/:id" children={<Book/>}/>
          <Route exact path="/books">
            <Books />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
