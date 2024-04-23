import React from 'react'
import { Badge, Button, Card, Col, Dropdown, Form, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { imagesData } from "../../../common/commomimages/imagedata"
import { Country, Recent, Timeline } from './salesdata/chartsdata'

import ProgressBar from 'react-bootstrap/ProgressBar'
import Pageheader from '../../../layouts/pageheader/pageheader'

export default function Sales () {
    const breadcrumbs = ["Home", "Dashboard01"];
  return (
    <div>
          <Pageheader items={breadcrumbs} />
            <Row>
              <Col sm={12} lg={6} md={6} xxl={3}>
                <Card className="overflow-hidden">
                  <Card.Body>
                    <Row>
                      <Col>
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="mb-0 fw-semibold text-dark lh-1">Projects</p>
                            <div className="fs-12 text-muted mb-5">Overview of this month</div>
                            <div className="fs-30 fw-semibold mb-0 lh-1">3,456
                            </div>
                          </div>
                          <div className="text-end d-flex flex-column align-items-center">

                          
                              <Form.Check defaultChecked className="custom-switch mt-2 mb-3 ms-5" type="switch"/>
                            <span className="text-primary lh-1 mt-6 fs-26"><i
                              className="fe fe-layers"></i></span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
         
              <Col sm={12} lg={6} md={6} xxl={3}>
                <Card className="overflow-hidden">
                  <Card.Body>
                    <Row>
                      <Col>
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="mb-0 fw-semibold text-dark lh-1">Employees</p>
                            <div className="fs-12 text-muted mb-5">Overview of this month</div>
                            <div className="fs-30 fw-semibold mb-0 lh-1">4,738
                            </div>
                          </div>
                          <div className="text-end d-flex flex-column align-items-center">
                         
                           <Form.Check className="custom-switch mt-2  mb-3 ms-5" type="switch"/>
                            <span className="text-secondary lh-1 mt-6 fs-26"><i
                              className="fe fe-users"></i></span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} lg={6} md={6} xxl={3}>
                <Card className="overflow-hidden">
                  <Card.Body>
                    <Row>
                      <Col>
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="mb-0 fw-semibold text-dark lh-1">Task</p>
                            <div className="fs-12 text-muted mb-5">Overview of this month</div>
                            <div className="fs-30 fw-semibold mb-0 lh-1">6,738
                            </div>
                          </div>
                          <div className="text-end d-flex flex-column align-items-center">
                          
                            <Form.Check className="custom-switch mt-2  mb-3 ms-5" type="switch"/>
                            <span className="text-warning lh-1 mt-6 fs-26"><i
                              className="fe fe-file-text"></i></span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            
              <Col sm={12} lg={6} md={6} xxl={3}>
                <Card className="overflow-hidden">
                  <Card.Body>
                    <Row>
                      <Col>
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="mb-0 fw-semibold text-dark lh-1">Earnings</p>
                            <div className="fs-12 text-muted mb-5">Overview of this month</div>
                            <div className="fs-30 fw-semibold mb-0 lh-1">$8,963 <i className=""></i>
                            </div>
                          </div>
                          <div className="text-end d-flex flex-column align-items-center">
                           
                            <Form.Check className="custom-switch mt-2  mb-3 ms-5" type="switch"/>
                            <span className="text-danger lh-1 mt-6 fs-26"><i
                              className="fe fe-external-link"></i></span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
             
            </Row>

            <Row className="row">
              <Col xxl={7} lg={12} md={12} className="col-xxl-7 col-lg-12 col-md-12">
                <Card className="card overflow-hidden">
                  <Row className="row">
                    <Col lg={4} className="col-lg-4 border-end">
                      <Card.Body className="card-body">
                        <Row className="row">
                          <Col className="col">
                            <p className="mb-0 fw-semibold text-muted-dark">Total
                              Purchase</p>
                            <h3 className="mt-2 mb-1 text-dark fw-semibold">
                              $7,483</h3>
                            <p className="text-muted fs-12 mb-0"><span
                              className="text-body fw-semibold"><i
                                className="fa fa-arrow-up text-success me-1"> </i>23%
                            </span> in this year</p>
                          </Col>
                          <div className="col mt-3 col-auto">
                            <span>
                              <i className="fe fe-briefcase mb-3 text-primary p-3 bg-primary-transparent fs-24 rounded-circle mb-1"></i>
                            </span>
                          </div>
                        </Row>
                        <ProgressBar animated className="progress-xs mt-2" variant='primary' now={50} />
                      </Card.Body>
                    </Col>
                    <Col lg={4} className="col-lg-4 border-end">
                      <Card.Body className="card-body">
                        <Row className="row">
                          <Col className="col">
                            <p className="mb-0 fw-semibold  text-muted-dark">Total
                              Orders</p>
                            <h3 className="mt-2 mb-1 text-dark fw-semibold">
                              65,457</h3>
                            <p className="text-muted fs-12 mb-0"><span
                              className="text-body fw-semibold"><i
                                className="fa fa-arrow-up text-success me-1"> </i>13%
                            </span> in this year</p>
                          </Col>
                          <div className="col mt-3 col-auto">
                            <span>
                              <i className="fe fe-truck mb-3 text-secondary p-3 bg-secondary-transparent fs-24 rounded-circle mb-1"></i>
                            </span>
                          </div>
                        </Row>
                        <ProgressBar animated className="progress-xs mt-2" variant='secondary' now={50} />
                      </Card.Body>
                    </Col>
                    <Col lg={4} className="col-lg-4 border-end">
                      <Card.Body className="card-body">
                        <Row className="row">
                          <Col className="col">
                            <p className="mb-0 fw-semibold text-muted-dark">Total
                              Sales</p>
                            <h3 className="mt-2 mb-1 text-dark fw-semibold">
                              $6,128</h3>
                            <p className="text-muted fs-12 mb-0"><span
                              className="text-body fw-semibold"><i
                                className="fa fa-arrow-down text-danger me-1"> </i>12%
                            </span> in this year</p>
                          </Col>
                          <div className="col mt-3 col-auto">
                            <span>
                              <i className="fe fe-trending-up mb-3 text-danger p-3 bg-danger-transparent fs-24 rounded-circle mb-1"></i>
                            </span>
                          </div>
                        </Row>
                         <ProgressBar animated className="progress-xs mt-2" variant='danger' now={50} />
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
                <Card className="card overflow-hidden">
              
                  <Timeline/>
                </Card>
              </Col>
              <Col xxl={5} lg={12} col={12}>
                <Card className="card d-inline-block overflow-hidden">
                  <Card.Header className="card-header border-bottom">
                    <Card.Title className="card-title mb-0">Sales Country Wise</Card.Title>
                  </Card.Header>
                  <Card.Body className="card-body pb-0">
                    <div id="sales-country-wise"></div>
                    <Country/>
                  </Card.Body>
                  <Card.Footer className="card-footer py-0">
                    <Row className="row">
                      <div className="col-6 border-end">
                        <div className="text-body fw-semibold fs-12 text-center mt-3">Monthly Average</div>
                        <div className="d-flex justify-content-center align-items-center mb-3">
                          <span className="me-3 fs-20 fw-semibold">2,186</span>
                          <span className="text-success fw-semibold mt-1"><i
                            className="fa fa-caret-up me-1"></i>0.48%
                          </span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="text-body fw-semibold fs-12 text-center mt-3">Weekly Average</div>
                        <div className="d-flex justify-content-center align-items-center mb-3">
                          <span className="me-3 fs-20 fw-semibold">1,068</span>
                          <span className="text-danger fw-semibold mt-1"><i
                            className="fa fa-caret-down me-1"></i>0.20%
                          </span>
                        </div>
                      </div>
                    </Row>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
            <Row className=" row-deck">
               <Col xxl={6} xl={12} lg={12}>
                <Card className="d-inline-block overflow-hidden">
                  <Card.Header className="custom-header">
                    <Card.Title className=" mb-0">Popular Products</Card.Title>
                  </Card.Header>
                  <Card.Body className=" overflow-hidden p-0">
                    <div className="table-responsive">
                      <table className="table border-0 mb-0 text-nowrap">
                        <thead>
                          <tr>
                            <th className="border-top-0 text-dark fw-semibold ps-5 fs-13">s.no</th>
                            <th className="border-top-0 text-dark fw-semibold fs-13">Product Name</th>
                            <th className="border-top-0 text-dark fw-semibold fs-13">Popularity</th>
                            <th className="border-top-0 text-dark fw-semibold pe-5 text-end fs-13">Percentage %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-bottom">
                            <td className="ps-5">
                              <div className="text-body">01</div>
                            </td>
                            <td>
                              <div className="text-dark fw-semibold">Samsung Smartwatches</div>
                            </td>
                            <td>
                              <ProgressBar animated className="progress-xs" variant='primary' now={50} />
                            </td>
                            <td className="text-end pe-5">
                              <div>
                                <Button variant='primary' size="sm" className="btn-outline-primary bg-primary-transparent">50%</Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="ps-5">
                              <div className="text-body">02</div>
                            </td>
                            <td>
                              <div className="text-dark fw-semibold">Kids Wear</div>
                            </td>
                            <td>
                               <ProgressBar animated className="progress-xs" variant='secondary' now={20} />
                            </td>
                            <td className="text-end pe-5">
                              <div>
                                <Button variant='outline-secondary' size="sm" className="btn-outline-secondary bg-secondary-transparent">20%</Button>
                            
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="ps-5">
                              <div className="text-body">03</div>
                            </td>
                            <td>
                              <div className="text-dark fw-semibold">Home Decores</div>
                            </td>
                            <td>
                                <ProgressBar animated className="progress-xs" variant='info' now={30} />
                            </td>
                            <td className="text-end pe-5">
                              <div>
                                <Button size="sm" variant='outline-info' className=" bg-info-transparent">30%</Button>
                              
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="ps-5">
                              <div className="text-body">04</div>
                            </td>
                            <td>
                              <div className="text-dark fw-semibold">Furnitures</div>
                            </td>
                            <td>
                              <ProgressBar animated className="progress-xs" variant='success' now={50} />
                            </td>
                            <td className="text-end pe-5">
                              <div>
                                <Button variant='outline-success' size="sm"
                                className="btn-outline-success bg-success-transparent">45%</Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="ps-5">
                              <div className="text-body">05</div>
                            </td>
                            <td>
                              <div className="text-dark fw-semibold">Electroni Gadgets</div>
                            </td>
                            <td>
                                 <ProgressBar animated className="progress-xs" variant='warning' now={70} />
                            </td>
                            <td className="text-end pe-5">
                              <div>
                                <Button variant='warning' size="sm"
                                className=" btn-sm btn-outline-warning bg-warning-transparent">70%</Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom-0">
                            <td className="ps-5">
                              <div className="text-body">06</div>
                            </td>
                            <td>
                              <div className="text-dark fw-semibold">Mechanical Parts</div>
                            </td>
                            <td>

                               <ProgressBar animated className="progress-xs" variant='pink' now={50} />
                            </td>
                            <td className="text-end pe-5">
                              <div>
                                <Button variant='pink' size='sm'
                                className="btn-outline-pink bg-pink-transparent">45%</Button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={6} lg={12} md={12}>
                <Card>
                  <Card.Header
                    className="border-bottom">
                    <Card.Title className=" mb-0">Sales Activities</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="timeline-label">
                      <div className="sales-activity mb-4 fs-13">
                        <span className="text-muted ms-5">14:20</span>
                        <h6 className="my-1 ms-5 fw-semibold">New Customer</h6>
                        <p className="mb-0 ms-5 text-muted fs-12"><Link to="#"
                          className="text-azure fw-semibold p-0">Jhon124</Link> successfully
                          Signed </p>
                      </div>
                      <div className="sales-activity mb-4">
                        <span className="text-muted ms-5">08:00</span>
                        <h6 className="my-1 mb-0 ms-5 fw-semibold">Potential Customer</h6>
                        <p className="mb-0 ms-5 text-muted fs-12">User <Link to="#"
                          className="text-azure">Charlie_T</Link> checked out <Link to="#"
                            className="text-purple">Item #42</Link>. <Link to="#"
                              className="text-success fw-semibold">View</Link></p>
                      </div>
                      <div className="sales-activity mb-4">
                        <span className="text-muted ms-5">16:24</span>
                        <h6 className="my-1 mb-0 ms-5 fw-semibold">New Ticket Arrived</h6>
                        <p className="mb-0 ms-5 text-muted fs-12">User <Link to="#"
                          className="text-azure">Michael85</Link> Submitted a ticket <Link to="#"
                            className="text-success fw-semibold">Details</Link></p>
                      </div>
                      <div className="sales-activity">
                        <span className="text-muted ms-5">04:16</span>
                        <h6 className="my-1 mb-0 ms-5 fw-semibold">Monthly Sales Report</h6>
                        <p className="mb-0 ms-5 text-muted fs-12"><Link to="#" className="text-danger">4
                          days left</Link> notification to submit the monthly sales report.
                          <Link to="#" className="text-success fw-semibold">View report</Link>
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={6} lg={12} md={12}>
                <Card>
                  <Card.Header
                    className=" border-bottom">
                    <Card.Title className=" mb-0">Recent Orders</Card.Title>
                  </Card.Header>
                  <Card.Body className=" px-0">
                  
                    <Recent/>

                  </Card.Body>
                  <Card.Footer>
                    <Row className=" pb-0 mb-0">
                      <Col md={6} className="col justify-content-center text-center border-end">
                        <p className="mb-0 d-flex fw-semibold text-muted justify-content-center">
                          <span className="legend bg-primary"></span>Last Month
                        </p>
                        <h4 className="mb-0 fw-semibold">$3,006</h4>
                      </Col>
                      <Col md={6} className=" col text-center float-end">
                        <p className="mb-0 d-flex fw-semibold text-muted justify-content-center ">
                          <span className="legend bg-secondary"></span>This Month
                        </p>
                        <h4 className="mb-0 fw-semibold">$4,026</h4>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col sm={12} className="col-12 ">
                <Card>
                  <Card.Header className=" border-bottom ">
                    <Card.Title className=" mb-0">Product Sales</Card.Title>
                    <Dropdown className=" ms-auto">
                      <Dropdown.Toggle as="a" variant='outline-light' className="btn btn-outline-default btn-sm fw-bold text-primary fs-12 d-flex align-items-center dropdown-toggle "
                        type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i className="bi bi-calendar-date fw-semibold mx-1"></i> Week
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                        <Dropdown.Item href="#">Month</Dropdown.Item>
                        <Dropdown.Item href="#">Year</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Card.Header>
                  <Card.Body>
                    <div className="table-responsive">
                      <Table id="data-table" className="table border p-0 text-nowrap mb-0">
                        <thead className="bg-light text-dark">
                          <tr>
                            <th
                              className="fw-semibold fs-14 border-bottom-0 w-5">
                              Order ID</th>
                            <th
                              className="fw-semibold fs-14 border-bottom-0">
                              Customer</th>
                            <th
                              className="fw-semibold fs-14 border-bottom-0">
                              Order Date</th>
                            <th
                              className="fw-semibold fs-14 border-bottom-0">
                              Product name</th>
                            <th
                              className="fw-semibold fs-14 border-bottom-0">
                              Price</th>
                            <th
                              className="fw-semibold fs-14 border-bottom-0">
                              Status</th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-bottom">
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <h6 className="mb-0 fw-semibold text-dark">#420153</h6>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex contact-image">
                                <img src={imagesData('male33')} className="avatar avatar-md brround" alt="person-image" />
                                <div className="d-flex mt-1 flex-column ms-2">
                                  <h6 className="mb-0 fs-14 fw-semibold text-dark">Jake poole</h6>
                                  <span
                                    className="fs-12 text-muted">jacke123@gmail.com</span>
                                </div>
                              </div>
                            </td>
                            <td className="fs-13 fw-semibold text-dark"><i className="fe fe-calendar me-2"></i>20-11-2020 </td>
                            <td className="fs-13 fw-semibold text-dark">Sofa</td>
                            <td className="fs-13 fw-semibold text-dark">$426.56</td>
                            <td className="fs-15 fw-semibold">
                              <div className="d-flex justify-content-between align-items-center">
                                <Badge bg="danger" text="white"
                                  className="fw-semibold fs-11">Out
                                  Stock</Badge>
                                <Dropdown >
                                  <Dropdown.Toggle as="a" to="#" variant='default' className="fw-semibold no-caret" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                  
                                      <i className="fe fe-more-vertical fw-semibold"></i>
                                  
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu className=" dropdown-menu-end" role="menu">
                                    <Dropdown.Item to="#;">Add</Dropdown.Item>
                                    <Dropdown.Item>Remove</Dropdown.Item>
                                    <Dropdown.Item>More</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <h6 className="mb-0 fw-semibold text-dark">#243153</h6>
                              </div>
                            </td>
                            <td className="d-flex border-bottom-0">
                              <div>
                                <span className="avatar avatar-md me-2"><img src={imagesData('female19')} alt="img" className="rounded-circle cover-image" /></span>
                              </div>
                              <div className="flex-1 mt-1 lh-1">
                                <h6 className="mb-1 fs-14 fw-semibold text-dark">Virginia Mak
                                </h6>
                                <span
                                  className="fs-12 text-muted">virginia456@gmail.com</span>
                              </div>
                            </td>
                            <td className="fs-13 fw-semibold text-dark"><i className="fe fe-calendar me-2"></i>20-11-2020 </td>
                            <td className="fs-13 fw-semibold text-dark">Watch</td>
                            <td className="fs-13 fw-semibold text-dark">$265.04</td>
                            <td className="fs-15 fw-semibold">
                              <div className="d-flex justify-content-between align-items-center">
                                <Badge bg="success" text="white"
                                  className=" fw-semibold fs-11">In
                                  Stock</Badge>

                                <Dropdown>
                                  <Dropdown.Toggle as="a" to="" variant='default' className="fw-semibold no-caret" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <span className="fs-14 text-dark"><i className="fe fe-more-vertical fw-semibold"></i></span>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu className=" dropdown-menu-end" role="menu">
                                    <Dropdown.Item>Add</Dropdown.Item>
                                    <Dropdown.Item>Remove</Dropdown.Item>
                                    <Dropdown.Item>More</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <h6 className="mb-0 fw-semibold text-dark">#230153</h6>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex contact-image">
                                <img src={imagesData('female21')} className="avatar avatar-md brround" alt="person-image" />
                                <div className="d-flex mt-1 flex-column ms-2">
                                  <h6 className="mb-0 fs-14 fw-semibold text-dark">Kylie north</h6>
                                  <span
                                    className="fs-12 text-muted">kylie@gmail.com</span>
                                </div>
                              </div>
                            </td>
                            <td className="fs-13 fw-semibold text-dark"><i className="fe fe-calendar me-2"></i>19-11-2020 </td>
                            <td className="fs-13 fw-semibold text-dark">Coat</td>
                            <td className="fs-13 fw-semibold text-dark">$652.00</td>
                            <td className="fs-15 fw-semibold">
                              <div className="d-flex justify-content-between align-items-center">
                                <Badge bg="danger" text="white"
                                  className=" fw-semibold fs-11">out
                                  Stock</Badge>

                                <Dropdown>
                                  <Dropdown.Toggle as="a" variant='default' to="" className="fw-semibold no-caret" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <span className="fs-14 text-dark"><i className="fe fe-more-vertical fw-semibold"></i></span>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu className=" dropdown-menu-end" role="menu">
                                    <Dropdown.Item href="#">Add</Dropdown.Item>
                                    <Dropdown.Item href="#">Remove</Dropdown.Item>
                                    <Dropdown.Item href="#">More</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <h6 className="mb-0 fw-semibold text-dark">#124153</h6>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex contact-image">
                                <img src={imagesData('male13')} className="avatar avatar-md brround" alt="person-image" />
                                <div className="d-flex mt-1 flex-column ms-2">
                                  <h6 className="mb-0 fs-14 fw-semibold text-dark">Jan Hodges</h6>
                                  <span className="fs-12 text-muted">jan@gmail.com</span>
                                </div>
                              </div>
                            </td>
                            <td className="fs-13 fw-semibold text-dark"><i className="fe fe-calendar me-2"></i>19-11-2020 </td>
                            <td className="fs-13 fw-semibold text-dark">Shoes</td>
                            <td className="fs-13 fw-semibold text-dark">$200.56</td>
                            <td className="fs-15 fw-semibold">
                              <div className="d-flex justify-content-between align-items-center">
                                <Badge bg="success" text="white"
                                  className=" fw-semibold fs-11">In
                                  Stock</Badge>

                                <Dropdown>
                                  <Dropdown.Toggle as="a" variant='default' to="" className="fw-semibold no-caret" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <span className="fs-14 text-dark"><i className="fe fe-more-vertical fw-semibold"></i></span>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu className="dropdown-menu dropdown-menu-end" role="menu">
                                    <Dropdown.Item href="#">Add</Dropdown.Item>
                                    <Dropdown.Item href="#">Remove</Dropdown.Item>
                                    <Dropdown.Item href="#">More</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <h6 className="mb-0 fw-semibold text-dark">#024153</h6>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex contact-image">
                                <img src={imagesData('male8')} className="avatar avatar-md brround" alt="person-image" />
                                <div className="d-flex mt-1 flex-column ms-2">
                                  <h6 className="mb-0 fs-14 fw-semibold text-dark">Trevor Thomson
                                  </h6>
                                  <span
                                    className="fs-12 text-muted">trevor@gmail.com</span>
                                </div>
                              </div>
                            </td>
                            <td className="fs-13 fw-semibold text-dark"><i className="fe fe-calendar me-2"></i>19-11-2020 </td>
                            <td className="fs-13 fw-semibold text-dark">T-shirts</td>
                            <td className="fs-13 fw-semibold text-dark">$364.56</td>
                            <td className="fs-15 fw-semibold">
                              <div className="d-flex justify-content-between align-items-center">
                                <Badge bg="danger" text="white"
                                  className=" fw-semibold fs-11">Out
                                  Stock</Badge>

                                <Dropdown>
                                  <Dropdown.Toggle as="a" variant='default' to="" className="fw-semibold no-caret" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <span className="fs-14 text-dark"><i className="fe fe-more-vertical fw-semibold"></i></span>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu className="dropdown-menu dropdown-menu-end" role="menu">
                                    <Dropdown.Item href="#">Add</Dropdown.Item>
                                    <Dropdown.Item href="#">Remove</Dropdown.Item>
                                    <Dropdown.Item href="#">More</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bootom">
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <h6 className="mb-0 fw-semibold text-dark">#420153</h6>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex contact-image">
                                <img src={imagesData('female23')} className="avatar avatar-md brround" alt="person-image" />
                                <div className="d-flex mt-1 flex-column ms-2">
                                  <h6 className="mb-0 fs-14 fw-semibold text-dark">Emily Lewis</h6>
                                  <span
                                    className="fs-12 text-muted">emily@gmail.com</span>
                                </div>
                              </div>
                            </td>
                            <td className="fs-13 fw-semibold text-dark"><i className="fe fe-calendar me-2"></i>19-11-2020 </td>
                            <td className="fs-13 fw-semibold text-dark ">Jeans</td>
                            <td className="fs-13 fw-semibold text-dark ">$56.035</td>
                            <td className="fs-15 fw-semibold">
                              <div className="d-flex justify-content-between align-items-center">
                                <Badge bg="success" text="white"
                                  className=" fw-semibold fs-11">In
                                  Stock</Badge>

                                <Dropdown>
                                  <Dropdown.Toggle as="a" variant='default' to="" className="fw-semibold no-caret" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <span className="fs-14 text-dark"><i className="fe fe-more-vertical fw-semibold"></i></span>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu className="dropdown-menu dropdown-menu-end" role="menu">
                                    <Dropdown.Item href="#">Add</Dropdown.Item>
                                    <Dropdown.Item href="#">Remove</Dropdown.Item>
                                    <Dropdown.Item href="#">More</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                   
                    </div>
                  </Card.Body>
                </Card>
              </Col>
           
            </Row>
     
    </div>
  )
}
