import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import famholdIconDarkGreen from '../../assets/images/brand/famholdIconDarkGreen.png'

export default function Footer () {
  return (
        <Fragment>
            <footer className="footer" style={{backgroundColor: '#f8f9fb'}}>
                <div className="container">
                    <Row className="row align-items-center flex-row-reverse">
                        <Col lg={12} sm={12} className="text-center">
                            <img src={famholdIconDarkGreen} className="header-brand-img icon-logo" style={{height: 19, width: 'auto', marginRight: 15, marginBottom: 3}} alt="logo" />

                            Copyright © 2024 <Link to="#"> Famhold</Link> Derechos reservados.
                        </Col>
                    </Row>
                </div>
            </footer>
        </Fragment>)
}
