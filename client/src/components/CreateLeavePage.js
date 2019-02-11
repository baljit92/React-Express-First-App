import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, FormControl } from 'react-bootstrap';
import { FormFeedback, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import Navbar from './NavbarComponent';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates';
import moment from 'moment';
import '../index.css';


export default class CreateLeavePage extends Component {

	constructor(props){
		super(props)
		this.state = {
				redirectToReferrer: false,
				leave_type: "",
				description: "",
				startDate: moment(),
				endDate: moment(),
				errors: {},
				touched: {
					leave_type:false,
					description:false,
					date_range:false
				}
			};
			 this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleBlur = (field) => (evt) => {
        this.setState({
          touched: { ...this.state.touched, [field]: true },
        });
    }

  	validate(leave_type, description, startdate, enddate) {

        let errors = {};
      	let formIsValid = true;
      	console.log(leave_type);
        if(this.state.touched.leave_type && leave_type.length == 0)
            errors.leave_type = 'Please select a leave type';
       

        if(this.state.touched.description && description.length <=5 )
            errors.description = 'Description should be > 5 characters';
   

        if(this.state.touched.date_range && enddate.diff(startdate) < 0 )
        	errors.enddate = 'End Date should be after or equal to the start date';
       	
       	
        return errors;
    }

	render()
		{
			const { redirectToReferrer } = this.state
			if (redirectToReferrer === true) {
	     	 return (<Redirect to='/home' />)
	    	}

	    	const errors = this.validate(this.state.leave_type, this.state.description, this.state.startDate, this.state.endDate);

			return (
				<div>
					<Navbar />
				  	<div className="container">
				    		<div className="row">
				    			<div className="col-2"></div>
									<div className="col-6 mt-5">
						          		<Form>
						          			<FormGroup controlId="leave_type">
												<Label htmlFor="leave_type">Leave Type</Label>
												<select id="leave_type" className="form-control" onChange={this.handleChange} value={this.state.value} onBlur={this.handleBlur('leave_type')} >
													<option value="">Select Leave Type</option>
													<option value="1">Paid</option>
													<option value="2">Sick</option>
													<option value="3">Other</option>
												</select>
												<div className="errorMsg">{errors.leave_type}</div>
											</FormGroup>
											<FormGroup controlId="description">
										      	<Label htmlFor="description">Description</Label>
									            <textarea id="description" className="form-control" 
		                                        value={this.state.value} onChange={this.handleChange} onBlur={this.handleBlur('description')}/>
									    		<div className="errorMsg">{errors.description}</div>
									    	</FormGroup>
									    	
									    	<FormGroup controlId="dateRange">
										      	<Label className="mr-3"> Date Range </Label>

									           <DateRangePicker
													required
													startDate={this.state.startDate} 
													startDateId="startDate" 
													endDate={this.state.endDate} 
													endDateId="endDate" 
													onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
													focusedInput={this.state.focusedInput} 
													onFocusChange={focusedInput => this.setState({ focusedInput })}
												/>
												<div className="errorMsg">{errors.enddate}</div>
									    	</FormGroup>

									    	<Button onClick={this.handleSubmit} className="submit_btn btn-md btn-primary mt-4"> Apply for leave</Button>
								    </Form>
							        		
					    			</div>
					    		<div className="col-2"></div>
					    	</div>
					  </div>
				  </div>

			  );

		}


	}
