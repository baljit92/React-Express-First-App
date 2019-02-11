import React, {Component} from 'react';
import { Card, CardBody } from 'reactstrap';
import { Button, Form, FormGroup,  ControlLabel, FormControl } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'

class LoginPage extends Component{


	constructor(props){
		super(props)

		this.state = {
			email:"f@f.com",
			password:"test",
			redirectToReferrer: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){
		localStorage.removeItem('jwt');
		localStorage.removeItem('name');
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = (e) => {
			//we don't want the form to submit, so we prevent the default behavior
    		e.preventDefault();

			fetch('/api/users/login', {
				mode: 'cors',
			    method: 'POST',
			    body: JSON.stringify(this.state),
			    headers: {
			      'Content-Type': 'application/json'
			    }
			  })
			  .then(res => {
			    if (res.ok) {
				    res.json().then(json => {
						localStorage.setItem('jwt', json.user.token);
						localStorage.setItem('name', json.user.fullname);
						this.setState({
							redirectToReferrer: true
						})
				    });
				  }	
				else {
			      	const error = new Error(res.error);
			     	throw error;
			    }
			  })
			  .catch(err => {
			    console.error(err);
			    alert('Error logging in please try again');
			  });

		}

	render()
	{
		const { redirectToReferrer } = this.state
		if (redirectToReferrer === true) {
     	 return (<Redirect to='/home' />)
    }

		return (
		  	<div className="container">
		    		<div className="row">
		    			<div className="col-3"></div>
							<div className="col-6 mt-5">
					      		<Card>
					        		<CardBody>
						          		<Form>
											<FormGroup controlId="email">
										      	<ControlLabel>Email</ControlLabel>
									            <FormControl
									      			autoFocus
									              type="email"
									              value={this.state.email}
									              onChange={this.handleChange}
									            />
									    	</FormGroup>
									    	<FormGroup controlId="password">
										       <ControlLabel>Password</ControlLabel>
									            <FormControl
									            autoFocus
									              type="password"
									              value={this.state.password}
									              onChange={this.handleChange}
									            />
									    	</FormGroup>
									    	<Button onClick={this.handleSubmit} className="submit_btn btn-sm"> Submit </Button>
								    </Form>
					        		</CardBody>
					      		</Card>
			    			</div>
			    		<div className="col-2"></div>
			    	</div>
			  </div>

		  );

	}
}


export default LoginPage;