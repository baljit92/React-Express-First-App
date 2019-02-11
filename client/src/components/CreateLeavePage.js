import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, FormText, ControlLabel, FormControl } from 'react-bootstrap';
import { baseUrl } from '../shared/baseUrl';
import { Redirect } from 'react-router-dom'



export default class CreateLeavePage extends Component {

	constructor(props){
		super(props)
		this.state = {
				redirectToReferrer: false,
				leave_type: "",
				description: "",
			};

			// this.toggle = this.toggle.bind(this);
	}

	handleChange(event){
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	onPickType(e){
	    this.setState({ leave_type: this.inputEl.value });
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
			    			<div className="col-2"></div>
								<div className="col-6 mt-5">
					          		<Form>
					          			<FormGroup controlId="typeSelect">
											<ControlLabel>Leave Type</ControlLabel>
											<FormControl 
											  onChange={this.onPickType.bind(this)}
											  inputRef={ el => this.inputEl=el }
											  componentClass="select" placeholder="select">
											<option value="">Select Leave Type</option>
											<option value="1">Paid</option>
											<option value="2">Sick</option>
											<option value="3">Other</option>
											</FormControl>
										</FormGroup>
										<FormGroup controlId="description">
									      	<ControlLabel>Description</ControlLabel>
								            <FormControl
								      			autoFocus
								              type="text"
								              componentClass="textarea"
								              value={this.state.description}
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
						        		
				    			</div>
				    		<div className="col-2"></div>
				    	</div>
				  </div>

			  );

		}


	}
