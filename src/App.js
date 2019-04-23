import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

function App() {
  return (
    <Router>
      
      <div className="container-fluid">
        <div className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">TodoList</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="/novo" className="nav-link">Cadastrar</Link></li>
            </ul>
          </div>
        </div>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/novo" component={TodoForm} />
      </div>
    </Router>
  );
}

export default App;
