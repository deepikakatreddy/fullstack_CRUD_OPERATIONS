import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';

const Notifications = () => {
  const [settings, setSettings] = useState({
    email: true,
    sms: false,
    push: true,
    inApp: true,
    summary: false,
    updates: true,
  });

  const [showSummary, setShowSummary] = useState(false);

  const handleChange = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setShowSummary(true);
    setTimeout(() => {
      setShowSummary(false);
    }, 4000); // Hide after 4 seconds
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm border-0">
            <Card.Header as="h4" className="bg-primary text-white">
              Notification Preferences
            </Card.Header>
            <Card.Body>
              {showSummary && (
                <Alert variant="info">
                  <strong>Saved Preferences:</strong>
                  <ul style={{ marginBottom: 0 }}>
                    {Object.entries(settings).map(([key, value]) => (
                      <li key={key}>{key}: {value ? 'Enabled' : 'Disabled'}</li>
                    ))}
                  </ul>
                </Alert>
              )}
              <Form onSubmit={handleSave}>
                <Row>
                  <Col md={6}>
                    <Form.Check
                      type="switch"
                      label="Email Alerts"
                      checked={settings.email}
                      onChange={() => handleChange('email')}
                    />
                    <Form.Check
                      type="switch"
                      label="SMS Notifications"
                      checked={settings.sms}
                      onChange={() => handleChange('sms')}
                    />
                    <Form.Check
                      type="switch"
                      label="Push Notifications"
                      checked={settings.push}
                      onChange={() => handleChange('push')}
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Check
                      type="switch"
                      label="In-App Alerts"
                      checked={settings.inApp}
                      onChange={() => handleChange('inApp')}
                    />
                    <Form.Check
                      type="switch"
                      label="Weekly Summary Emails"
                      checked={settings.summary}
                      onChange={() => handleChange('summary')}
                    />
                    <Form.Check
                      type="switch"
                      label="System Updates"
                      checked={settings.updates}
                      onChange={() => handleChange('updates')}
                    />
                  </Col>
                </Row>
                <Button type="submit" className="mt-4" variant="success">
                  Save Preferences
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Notifications;
