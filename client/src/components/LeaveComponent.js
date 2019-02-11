import React, {Component} from 'react';
import { Label, Button, ButtonToolbar } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { Card, CardBody, CardTitle, Table } from 'reactstrap';
import Circle from 'react-circle';
import Navbar from './NavbarComponent';
import '../index.css';
import { IconContext } from "react-icons";
import { IoIosInfinite } from 'react-icons/io';


class Leave extends Component {

	constructor(props){
		super(props)

		this.state = {
			paid_leave: (20/30),
			casual_leave: (27/30),
			
			other_leave: 2
		};
	}
	render(){


		return(

			<div>
				<Navbar />
				<div className="container mt-5">
			    		<div className="row">
			    			<div className="col-xs-12 col-md-6 col-lg-3">
			    				<Card className="mb-3 small-card">
					        		<CardBody>
						          		<p className="small_card_title "> Paid Leave </p>
						          		<div className="outerDiv">
											<div className="leftDiv">
												<div className="box black">
												    
												</div>
												<div className="box-text ml-1">
												   Available Leave
												</div>
											</div>
											<div className="rightDiv">
												3
											</div>		
											<div style={{clear:'both'}}></div>
										</div>

										<div className="outerDiv">
											<div className="leftDiv">
												<div className="box black">
												    
												</div>
												<div className="box-text ml-1">
												   Consumed Leave
												</div>
											</div>
											<div className="rightDiv">
												3
											</div>		
											<div style={{clear:'both'}}></div>
										</div>

										<div className="outerDiv">
											<div className="leftDiv">
												<div className="box black">
												    
												</div>
												<div className="box-text ml-1">
												   Accured so far
												</div>
											</div>
											<div className="rightDiv">
												3
											</div>		
											<div style={{clear:'both'}}></div>
										</div>

										<div className="outerDiv">
											<div className="leftDiv">
												<div className="box black">
												    
												</div>
												<div className="box-text ml-1">
												   Annual Quota
												</div>
											</div>
											<div className="rightDiv">
												3
											</div>		
											<div style={{clear:'both'}}></div>
										</div>
						          		
					        		</CardBody>
					      		</Card>
					      	</div>
				    			
							
							<div className="col-xs-12 col-md-6 col-lg-3">
								<Card className="mb-3 small-card">
					        		<CardBody>
						          		<p className="small_card_title"> Sick Leave </p>
						          			
						          			<div className="outerDiv">
											<div className="leftDiv">
												<div className="box black">
												    
												</div>
												<div className="box-text ml-1">
												   Available Leave
												</div>
											</div>
											<div className="rightDiv">
												3
											</div>		
											<div style={{clear:'both'}}></div>
										</div>

										<div className="outerDiv">
											<div className="leftDiv">
												<div className="box black">
												    
												</div>
												<div className="box-text ml-1">
												   Consumed Leave
												</div>
											</div>
											<div className="rightDiv">
												3
											</div>		
											<div style={{clear:'both'}}></div>
										</div>

										<div className="outerDiv">
											<div className="leftDiv">
												<div className="box black">
												    
												</div>
												<div className="box-text ml-1">
												   Accured so far
												</div>
											</div>
											<div className="rightDiv">
												3
											</div>		
											<div style={{clear:'both'}}></div>
										</div>

										<div className="outerDiv">
											<div className="leftDiv">
												<div className="box black">
												    
												</div>
												<div className="box-text ml-1">
												   Annual Quota
												</div>
											</div>
											<div className="rightDiv">
												3
											</div>		
											<div style={{clear:'both'}}></div>
										</div>
						          		
						          	{/*	<IconContext.Provider value={{ color: "rgb(60, 179, 113)", className: "global-class-name", size: "5em" }}>
										  <div>
										    <IoIosInfinite />
										  </div>
										</IconContext.Provider> */ }

					        		</CardBody>
					      		</Card>
							</div>
					    	<div className="col-xs-12 col-md-6 col-lg-3">
								<Card className="mb-3 small-card">
					        		<CardBody>
						          		<p className="small_card_title"> Other Leave </p>
						          			
						          			<div className="outerDiv">
											<div className="leftDiv">
												<div className="box black">
												    
												</div>
												<div className="box-text ml-1">
												   Available Leave
												</div>
											</div>
											<div className="rightDiv">
												3
											</div>		
											<div style={{clear:'both'}}></div>
										</div>

										<div className="outerDiv">
											<div className="leftDiv">
												<div className="box black">
												    
												</div>
												<div className="box-text ml-1">
												   Consumed Leave
												</div>
											</div>
											<div className="rightDiv">
												3
											</div>		
											<div style={{clear:'both'}}></div>
										</div>

										<div className="outerDiv">
											<div className="leftDiv">
												<div className="box black">
												    
												</div>
												<div className="box-text ml-1">
												   Accured so far
												</div>
											</div>
											<div className="rightDiv">
												3
											</div>		
											<div style={{clear:'both'}}></div>
										</div>

										<div className="outerDiv">
											<div className="leftDiv">
												<div className="box black">
												    
												</div>
												<div className="box-text ml-1">
												   Annual Quota
												</div>
											</div>
											<div className="rightDiv">
												3
											</div>		
											<div style={{clear:'both'}}></div>
										</div>
						          		
					        		</CardBody>
					      		</Card>
							</div>

							<div className="col-xs-12 col-md-6 col-lg-3">
								<Card className="mb-3 small-card">
					        		<CardBody>
						          		<p className="small_card_title"> Leave Actions </p>
						          			
						          			<a className="btn btn-success" href="/new_leave"> Apply for Leave</a>
						          			<div className="mt-2">
	    										<p style={{float:'left'}}><a href="#"> Request Compensatory Off </a></p>
											</div>	
											
											<div className="mt-3">
	    									<p style={{float:'left'}}> USEFUL LINK </p>
											</div>	

											<div className="outerDiv">
											<div className="leftDiv">
												<div className="box">
												    <IconContext.Provider value={{ color: "rgb(60, 179, 113)", className: "global-class-name", size: "1.3em" }}>
														  <div style={{marginTop:'-7px'}}>
														    <IoIosInfinite />
														  </div>
														</IconContext.Provider>
												</div>
												<div className="box-text" style={{fontSize:'14px'}}>
												   <a>Leave Policy Document</a>
												</div>
											</div>
											
										</div>

										
						          		
					        		</CardBody>
					      		</Card>
							</div>
				    	</div>

				    	<div className="row">

				    		<div className="col-12">
			    				<Card className="mb-3 table-card">
			    				<div className="docs-example mb-4"> </div>

			    				<CardBody>
			    					 <Table responsive>
										<thead>
											<tr>
											<th style={{width:'13%'}}></th>
											<th style={{width:'15%'}}></th>
											<th style={{width:'5%'}}></th>
											<th style={{width:'65%'}}></th>
											<th style={{width:'10%'}}></th>
											<th style={{width:'10%'}}></th>
											<th style={{width:'10%'}}></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row"><p> 24th Oct, WED</p></th>
												<td><p className="leave_type_title">Leave Type</p><p className="leave_type"> Sick Leave </p></td>
												<td><p className="leave_type_title">Status</p><p className="leave_type green"> Approved </p></td>
												<td className="leave_type">I will be off tomorrow as I plan to take a short break</td>
												<td><p className="leave_type_title">Approved By</p><p className="leave_type"> Baljit Singh </p></td>
												<td>Options</td>
											</tr>
											<tr>
											<th scope="row"><p> 24th Oct, WED</p></th>
												<td><p className="leave_type_title">Leave Type</p><p className="leave_type"> Sick Leave </p></td>
												<td><p className="leave_type_title">Status</p><p className="leave_type green"> Approved </p></td>
												<td className="leave_type">I will be off tomorrow as I plan to take a short break</td>
												<td><p className="leave_type_title">Approved By</p><p className="leave_type"> Panos Theoderopolis</p></td>
												<td>Options</td>
											</tr>
											<tr>
											<th scope="row"><p> 24th Oct, WED</p></th>
												<td><p className="leave_type_title">Leave Type</p><p className="leave_type"> Sick Leave </p></td>
												<td><p className="leave_type_title">Status</p><p className="leave_type red"> Declined </p></td>
												<td className="leave_type">Need to attend a wedding ceremony of my cousin and my presence there is needed for all of the week.</td>
												<td><p className="leave_type_title">Approved By</p><p className="leave_type"> N/A </p></td>
												<td>Options</td>
											</tr>
										</tbody>
									</Table>

			    				</CardBody>
			    				</Card>
			    			</div>

				    	</div>
				  </div>
			</div>
			)
		
	}
}


export default Leave;