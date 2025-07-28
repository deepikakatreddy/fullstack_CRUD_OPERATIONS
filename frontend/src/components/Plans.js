// src/pages/Plans.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Plans = () => {
  return (
    <Container className="mt-4">
      <h3>Plans & Add-ons</h3>
      <Row className="mt-3">
        <Col md={4}>
          <Card className="text-center shadow rounded p-3">
            <Card.Body>
              <Card.Title>Free Plan</Card.Title>
              <Card.Text>
                ₹0/month<br />
                • Basic features<br />
                • 1 User
              </Card.Text>
              <Button variant="outline-primary">Current Plan</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center shadow rounded p-3">
            <Card.Body>
              <Card.Title>Pro Plan</Card.Title>
              <Card.Text>
                ₹999/month<br />
                • All Free features<br />
                • Up to 10 Users<br />
                • Priority support
              </Card.Text>
              <Button variant="primary">Upgrade</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center shadow rounded p-3">
            <Card.Body>
              <Card.Title>Enterprise</Card.Title>
              <Card.Text>
                Custom pricing<br />
                • Unlimited users<br />
                • Dedicated account manager<br />
                • Custom integrations
              </Card.Text>
              <Button variant="dark">Contact Sales</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Plans;
