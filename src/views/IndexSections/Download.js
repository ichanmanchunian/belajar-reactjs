/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                  Do you love this awesome{" "}
                  <span className="text-success">
                    Design System for Bootstrap 4?
                  </span>
                </h2>
                <p className="lead">
                  Cause if you do, it can be yours for FREE. Hit the button
                  below to navigate to Creative Tim where you can find the
                  Design System in React. Start a new project or give an old
                  Bootstrap project a new look!
                </p>
               
                <div className="text-center">
                  <h4 className="display-4 mb-5 mt-5">
                    Available on these technologies
                  </h4>
                  
                </div>
              </Col>
            </Row>
            <Row>
                        <Col lg="4">
                            <div className="info">
                                <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle">
                                <i class="ni ni-settings-gear-65"></i>
                                </div>
                                <h6 className="info-title text-uppercase text-primary">Social Conversations</h6>
                                <p class="description opacity-8">We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
                                <div className="text-primary">
                                    <Link  to="/">
                                        More about us
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className="info">
                                <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle">
                                <i class="ni ni-atom"></i>
                                </div>
                                <h6 className="info-title text-uppercase text-primary">Social Conversations</h6>
                                <p class="description opacity-8">We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
                                <div className="text-primary">
                                    <Link  to="/">
                                        More about us
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className="info">
                                <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle">
                                <i class="ni ni-world"></i>
                                </div>
                                <h6 className="info-title text-uppercase text-primary">Social Conversations</h6>
                                <p class="description opacity-8">We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
                                <div className="text-primary">
                                    <Link  to="/">
                                        More about us
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Download;
