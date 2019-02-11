import '../index.css';
import React, {Component} from 'react';
import { Label, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { withRouter, Redirect } from 'react-router-dom'
import { baseUrl } from '../shared/baseUrl';
import Navbar from './NavbarComponent';


class Home extends Component {

	constructor(props){
		super(props)

		this.state = {
			message: "",
			is_auth: false,
			redirect_path: ""
		}

		this.getComponent = this.getComponent.bind(this)
	}



	componentDidMount() {

			const myHeaders = new Headers();
			myHeaders.append('Content-Type', 'application/json');
			myHeaders.append('Authorization', 'Token '+localStorage.getItem('jwt'));

			fetch('/api/users/homepage', {
				method: 'GET',
				headers: myHeaders,
			})
			.then(res => {
				console.log(res);
			if (res.ok) {
			    res.json().then(json => {
					this.setState({
						message: json.message,
						is_auth: true,
					})
			    });
			  }	
			else {
			  	const error = new Error(res.error);
			  	this.setState({
						message: res.error,
						is_auth: false,
					})
				}
			})
			.catch(err => {
			console.error(err);
			this.setState({
						message: err,
						is_auth: false,
					})
			});
    }

    getComponent(e, index) {
    	var path = "";
    	if(index == 1)
    		path = "/leave";
    	else if(index == 2)
    		path = "/leave";
    	else if(index == 3)
    		path = "/login";
    	console.log(path);
    	this.setState({
    		redirect_path:path
    	})
    }

	render()
	{
		const { is_auth } = this.state
		if(!is_auth)
		{
			return(<div className="container">
				<p> {this.state.message} </p> 
				<a href="/login">Login</a>
				</div>)
		}
		else{

			const { redirect_path } = this.state
			if(redirect_path && redirect_path !== "")
			{
				return(<Redirect to={this.state.redirect_path} />)
			}
			return(
				<div> 
					<div className="container">
			    		<div className="row mt-5">
							<div className="button-box col-md-12">
							    <Button onClick={(e) => this.getComponent(e, 1)} bsStyle="outline-dark">
									Expense Tracking
							    </Button>  
							    <Button onClick={(e) => this.getComponent(e, 2)} bsStyle="outline-dark">
						    		Leave Management
						    	</Button> 
							    <Button onClick={(e) => this.getComponent(e, 3)} bsStyle="outline-dark">
						    		Vehicle Giveouts
						    	</Button>  
						    	<Button onClick={(e) => this.getComponent(e, 4)} bsStyle="outline-dark">
						    		Vehicle Maintenance
						    	</Button> 
						    	
							</div>
			    		</div>
				  	</div>
				</div>
				)
		}
		
	}
}


export default Home;