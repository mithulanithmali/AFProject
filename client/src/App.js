import React , {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FileUpload from './components/FileUpload'
import './App.css';

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'


class App extends Component{

  render(){
    return(
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/uploadassignment" component={FileUpload} />
          </div>
        </div>

      </Router>
    );
  }

}

export default App;

// const App = () => <div className = 'container mt-4'>
 
//     <h4 className='display-4 text-center mb-4'>
//       <i className='fab fa-react' /> React File Upload
//     </h4>
//     <FileUpload />
// </div>


