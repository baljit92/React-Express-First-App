import React, {Component} from 'react';
import Login from './LoginComponent';
import Home from './HomeComponent';
import Leave from './LeaveComponent';
import NotFound from './NotFoundComponent';
import CreateLeavePage from './CreateLeavePage';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom'


/* General info
Here's an example. Let's assume we have an object myObj defined as follows:

const myObj = {
  name: 'John Doe',
  age: 35,
  sex: 'M',
  dob: new Date(1990, 1, 1)
};
For this example, it may help to just think of props as having the same structure (i.e., properties and values) as shown in myObj. Now, let's write the following assignment.

const { name: Username, ...rest } = myObj
The statement above amounts to both the declaration and assignment of two variables 
(or, I guess, constants). The statement can be thought out as:

Take property name defined on myObj and assign its value to a new variable we call Username. 
Then, take whatever other properties were defined on myObj (i.e., age, sex and dob) and collect 
them into a new object assigned to the variable we name rest.

Logging Username and rest to the console would confirm this. We have the following:

console.log(Username);
// => John Doe
console.log(rest);
// => { age: 35, sex: 'M', dob: Mon Jan 01 1990 00:00:00 GMT-0800 (PST) }
*/

// It checks if the user is authenticated, if they are,
// it renders the "component" prop. If not, it redirects
// the user to /login.




const LoginPage = () => {
      		return(
          		<Login />
          	);
    	}

const HomePage = () => {
      		return(
          		<Home />
          	);
    	}

const LeavePage = () => {
      		return(
          		<Leave />
          	);
    	}

class Main extends Component{

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.login = this.login.bind(this);

  }
//https://codesandbox.io/s/y0pw4kz8kx
  isLoggedIn() {
    return this.state.isLoggedIn;
  }
  login() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }

	render(props){
		
    	return(

    		<Switch>
              <Route path='/login' component={() => (
                <Login login={this.login} isLogged={this.state.isLoggedIn} />
              )}/>
              <Route path='/home' component={HomePage} />
              <Route path='/leave' component={LeavePage} />
              <Route path='/new_leave' component={CreateLeavePage} />
              <Route component={NotFound} />
        	</Switch>
        );
	}
}

export default Main;