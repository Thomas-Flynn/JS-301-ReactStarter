import React from 'react';
import {
    Container, Row, Col
} from 'reactstrap';
const JSXRules = function () {
    return (
        <Container className="main">
            <Row>
                <Col xs="12">
                    <h1>JSX Rules</h1>
                    <p>Most of JSX (JavaScript XML) highly resembles HTML5 and many of the tags are exactly the same.</p>
                    <dl>
                        <dt>Resembles HTML </dt>
                        <dd>It's not. It really is much closer to JavaScript.</dd>
                        <dt>React.createElement() </dt>
                        <dd>Used to construct and update the DOM (What you see on the screen).</dd>
                        <dt>Not required</dt>
                        <dd>You can write this in vanilla JavaScript, but JSX makes it much simpler.</dd>
                    </dl>
                </Col>
            </Row>
        </Container>
    );
};

export default JSXRules;