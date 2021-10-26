import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class Home extends React.Component{
    render(){
        return (
            <>
            <section 
                    className="section features-1">
                <Container>
                    <Row>
                        <Col lg="8" className="mx-auto text-center">
                            <span className="badge badge-primary badge-pill mb-3">
                                Insight
                            </span>
                            <h3 className="display-3Full-Funnel Social Analytics">  
                                Full-Funnel Social Analytics
                            </h3>
                            <p class="lead">The time is now for it to be okay to be great. For being a bright color. For standing out.</p>
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

export default Home;