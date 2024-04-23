
import React, { Fragment } from 'react'
import { Card, Col, Dropdown, Row } from 'react-bootstrap'
import { imagesData } from '../../../common/commomimages/imagedata'
import { Orderstatus, Statistics, WorldMap } from './ecommercedata/ecomcharts'
import Pageheader from '../../../layouts/pageheader/pageheader'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Link } from 'react-router-dom'

export default function Ecommerce () {
  const breadcrumbs = ["Home", "Dashboard02"];
  return (
    <Fragment>

      
          <Pageheader items={breadcrumbs} />
       
            <Row className=" row-sm">
              <Col sm={12} md={12} lg={12} xl={6} xxl={6}>
                <Row>
                  <Col lg={6} md={6} sm={6} xl={6}>
                    <Card className=" overflow-hidden">
                      <Card.Body>
                        <div className="d-flex">
                          <div>
                            <p className="mb-0 text-dark fw-semibold">Daily Revenue</p>
                            <h3 className="mt-1 mb-1 text-dark fw-semibold">$2,042</h3>
                            <div className="text-muted fs-12 mt-2"><i className="fa fa-signal text-success me-1"></i>
                              <span className="fw-bold fs-12 text-body">6.05%</span> (30 days)
                            </div>
                          </div>
                          <span className="ms-auto my-auto circle-icon bg-primary text-center"><i className="bi bi-pencil-square fs-16"></i></span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} md={6} sm={6} xl={6}>
                    <Card className=" overflow-hidden">
                      <Card.Body>
                        <div className="d-flex">
                          <div>
                            <p className="mb-0 text-dark fw-semibold">Daily Sales</p>
                            <h3 className="mt-1 mb-1 text-dark fw-semibold">4,628</h3>
                            <div className="text-muted fs-12 mt-2"><i className="fa fa-signal text-success me-1"></i>
                              <span className="fw-bold fs-12 text-body">04.12%</span> (30 days)
                            </div>
                          </div>
                          <span className="ms-auto my-auto circle-icon bg-info text-center"><i className="bi bi-bar-chart fs-16"></i></span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} md={6} sm={6} xl={6}>
                    <Card className=" overflow-hidden">
                      <Card.Body>
                        <div className="d-flex">
                          <div>
                            <p className="mb-0 text-dark fw-semibold">Daily Updates</p>
                            <h3 className="mt-1 mb-1 fw-semibold">1,206</h3>
                            <div className="text-muted"><i className="fa fa-signal text-success me-1"></i>
                              <span className="fw-bold text-body fs-12 ">0.60%</span> (30 days)
                            </div>
                          </div>
                          <span className="ms-auto my-auto circle-icon bg-success text-center"><i className="bi bi-graph-up fs-16"></i></span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} md={6} sm={6} xl={6}>
                    <Card className=" overflow-hidden">
                      <Card.Body>
                        <div className="d-flex">
                          <div>
                            <p className="mb-0 text-dark fw-semibold">Daily Users</p>
                            <h3 className="mt-1 mb-1 text-dark fw-semibold">3,024</h3>
                            <div className="text-muted fs-12 mt-2"><i className="fa fa-signal text-warning me-1"></i>
                              <span className="fw-bold fs-12 text-body">0.20%</span> (30 days)
                            </div>
                          </div>
                          <span className="circle-icon bg-warning text-center"><i className="bi bi-person fs-16"></i></span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} md={6} sm={6} xl={6}>
                    <Card className="overflow-hidden">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="text-dark fw-semibold">Male Visitors</p>
                          <span className="ms-auto my-auto visitors-icon bg-primary-transparent"><i className="fa fa-venus fs-18"></i></span>
                        </div>
                        <p className="text-muted mb-0 fs-12"><span className="fw-semibold fs-12"><i className="fa fa-arrow-up text-primary me-1"> </i>15%
                        </span> in this year</p>
                      
                        <ProgressBar animated className="progress-bar-striped progress-xs mt-2" variant='primary' now={30} />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} md={6} sm={6} xl={6}>
                    <Card className="overflow-hidden">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="text-dark fw-semibold">Female Visitors</p>
                          <span className="ms-auto my-auto visitors-icon bg-secondary-transparent"><i className="fa fa-mercury fs-18"></i></span>
                        </div>
                        <p className="text-muted mb-0 fs-12"><span className="fw-semibold fs-12"><i className="fa fa-arrow-up text-success me-1"> </i>32%
                        </span> in this year</p>
                       
                         <ProgressBar animated className="progress-bar-striped progress-xs mt-2" variant='secondary' now={60} />
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col sm={12} md={12} lg={12} xl={6} xxl={6}>
                <Card className=" overflow-hidden">
                  <Card.Header className=" d-flex justify-content-between allign-items-center">
                    <Card.Title className=" mb-0">Revenue Statistics</Card.Title>
                  
                     <Dropdown className=" ms-auto">
                      <Dropdown.Toggle as="a" variant='outline-light' className="btn btn-outline-default btn-sm fw-bold text-primary fs-12 d-flex align-items-center dropdown-toggle "
                        type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i className="bi bi-box-arrow-up-right fw-semibold me-2"></i> Monthly
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                        <Dropdown.Item href="#">Weekly</Dropdown.Item>
                        <Dropdown.Item href="#">Yearly</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Card.Header>
                  <Card.Body className=" py-0">
                  
                    <Statistics/>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xxl={4} xl={12} lg={12} md={12}>
                <Card className=" overflow-hidden">
                  <Card.Header className="border-bottom">
                    <Card.Title className=" mb-0">Top Products</Card.Title>
                  </Card.Header>
                  <Card.Body className="p-0">
                    <div className="table-responsive">
                      <table className="table border-0 mb-0 text-nowrap">
                        <thead>
                          <tr>
                            <th className="border-top-0 text-dark fw-semibold ps-5 fs-13">Product</th>
                            <th className="border-top-0 text-dark fw-semibold fs-13">Category</th>
                            <th className="border-top-0 text-dark fw-semibold pe-5 text-end fs-13">Price
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-dark">
                          <tr className="border-bottom">
                            <td className="ps-5 d-flex border-bottom-0 overflow-hidden">
                              <img alt="product-image" className="avatar avatar-md cover-image br-7 me-3" src={imagesData('product6')} />
                              <div>
                                <h6 className="mb-1 mt-1 fw-semibold">Red Printed Bag</h6>
                                <p className="mb-0 text-muted fs-12">Men, Backpack</p>
                              </div>
                            </td>
                            <td>
                              <h6 className="mb-0 fw-semibold text-primary">Bags</h6>
                            </td>
                            <td className="text-end pe-5">
                              <span className="text-dark fw-semibold">$124</span>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="ps-5 d-flex border-bottom-0 overflow-hidden">
                              <img alt="product-image" className="avatar avatar-md cover-image br-7 bg-light me-3" src={imagesData('product5')} />
                              <div>
                                <h6 className="mb-1 mt-1 fw-semibold">Black Headphones</h6>
                                <p className="mb-0 text-muted fs-12">Men, Bluetooth</p>
                              </div>
                            </td>
                            <td>
                              <h6 className="mb-0 fw-semibold text-secondary">Electronic</h6>
                            </td>
                            <td className="text-end pe-5">
                              <span className="text-dark fw-semibold">$56</span>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="ps-5 d-flex border-bottom-0 overflow-hidden">
                              <img alt="product-image" className="avatar avatar-md cover-image br-7 me-3" src={imagesData('product2')} />
                              <div>
                                <h6 className="mb-1 mt-1 fw-semibold">Blue Printed T-shirt</h6>
                                <p className="mb-0 text-muted fs-12">Men, T-shirt</p>
                              </div>
                            </td>
                            <td>
                              <h6 className="mb-0 fw-semibold text-info">Clothes</h6>
                            </td>
                            <td className="text-end pe-5">
                              <span className="text-dark fw-semibold">$240</span>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="ps-5">
                              <div className="d-flex">
                                <span className="avatar avatar-md me-3"><img alt="product-image" className=" cover-image br-7" src={imagesData('product4')} /></span>
                                <div className="flex-1">
                                  <h6 className="mb-1 mt-1 fw-semibold">Black Smart Watch</h6>
                                  <p className="mb-0 text-muted fs-12">Men, Handwatch</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <h6 className="mb-0 fw-semibold text-danger">Electronic</h6>
                            </td>
                            <td className="text-end pe-5">
                              <span className="text-dark fw-semibold">$86</span>
                            </td>
                          </tr>
                          <tr className="border-bottom-0">
                            <td className="ps-5 d-flex border-bottom-0 overflow-hidden">
                              <img alt="product-image" className="avatar avatar-md cover-image br-7 me-3" src={imagesData('product3')} />
                              <div>
                                <h6 className="mb-1 mt-1 fw-semibold">Watch</h6>
                                <p className="mb-0 text-muted fs-12">Men, Casual watch</p>
                              </div>
                            </td>
                            <td>
                              <h6 className="mb-0 fw-semibold text-warning">Electronic</h6>
                            </td>
                            <td className="text-end pe-5">
                              <span className="text-dark fw-semibold">$124</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={5} xl={7} lg={12} md={12}>
                <Card className=" overflow-hidden">
                  <Card.Header className=" border-bottom">
                    <Card.Title className="card-title mb-0">Visitors By Country</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div id="world-map-markers" className=" stateh world_map  ">
                  
                       <WorldMap/>
                       </div>
                     
                  </Card.Body>
                </Card>
              </Col>
              <Col xxl={3} xl={5} lg={12} md={12}>
                <Card className=" overflow-hidden">
                  <Card.Header className=" border-bottom">
                    <Card.Title>
                      Valuable Customers
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <ul className="list-group valuable-customers">
                      <li className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex justify-content-center align-items-center">
                            <img src={imagesData('male8')} className="avatar avatar-md br-7 cover-image" alt="person-image" />
                            <div className="p-1 ms-3">
                              <h6 className="mb-1 fw-semibold">Jordon Matey</h6>
                              <p className="mb-0 text-muted fs-12">matey@gmail.com</p>
                            </div>
                          </div>
                          <div>
                            <span className="badge badge-gradient-success shadow">+ $246</span>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex justify-content-center align-items-center">
                            <img src={imagesData('female21')} className="avatar avatar-md br-7 cover-image" alt="person-image" />
                            <div className="p-1 ms-3">
                              <h6 className="mb-1 fw-semibold">carolen valie</h6>
                              <p className="mb-0 text-muted fs-12">valie@02gmail.com</p>
                            </div>
                          </div>
                          <div>
                            <span className="badge badge-gradient-info shadow">- $58</span>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex justify-content-center align-items-center">
                            <img src={imagesData('female22')} className="avatar avatar-md br-7 cover-image" alt="person-image" />
                            <div className="p-1 ms-3">
                              <h6 className="mb-1 fw-semibold">Lisenen vasco</h6>
                              <p className="mb-0 text-muted fs-12">vasco@gmail.com</p>
                            </div>
                          </div>
                          <div>
                            <span className="badge badge-gradient-danger shadow">+ $69</span>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex justify-content-center align-items-center">
                            <img src={imagesData('male14')} className="avatar avatar-md br-7 cover-image" alt="person-image" />
                            <div className="p-1 ms-3">
                              <h6 className="mb-1 fw-semibold">Jordon Matey</h6>
                              <p className="mb-0 text-muted fs-12">Matey@gmail.com</p>
                            </div>
                          </div>
                          <div>
                            <span className="badge badge-gradient-primary shadow">+ $124</span>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex justify-content-center align-items-center">
                            <img src={imagesData('male28')} className="avatar avatar-md br-7 cover-image" alt="person-image" />
                            <div className="p-1 ms-3">
                              <h6 className="mb-1 fw-semibold">Sunee Jun</h6>
                              <p className="mb-0 text-muted fs-12">sunee24@gmail.com</p>
                            </div>
                          </div>
                          <div>
                            <span className="badge badge-gradient-secondary shadow">- $168</span>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex justify-content-center align-items-center">
                            <img src={imagesData('female23')} className="avatar avatar-md br-7 cover-image" alt="person-image" />
                            <div className="p-1 ms-3">
                              <h6 className="mb-1 fw-semibold">Drow Kano</h6>
                              <p className="mb-0 text-muted fs-12">kano@gmail.com</p>
                            </div>
                          </div>
                          <div>
                            <span className="badge badge-gradient-purple shadow">+ $86</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col sm={12} className="col-12 col-sm-12">
                <Card className=" overflow-hidden">
                  <Card.Header className="d-flex justify-content-between align-items-center border-bottom">
                    <Card.Title className="card-title mb-0">Order Status</Card.Title>
                    <button type="button" className="fw-semibold btn btn-sm btn-primary"><i className="fe fe-file-text"></i> Generate Report
                    </button>
                  </Card.Header>
                  <Card.Body className='order-status'>
                  <div className="table-responsive">
                    <Orderstatus/>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
        

    </Fragment>
  )
}
