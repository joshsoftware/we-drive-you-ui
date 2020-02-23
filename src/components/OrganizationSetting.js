import React, { useState, useEffect } from 'react';
import {
  Card,
  Form,
  FormGroup,
  Row,
  Col,
  Button,
  Label,
  Input,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';
import sub from './subdomain';

function OrganizationSetting() {
  const [disabled, setDisabled] = useState(false);
  const emptyOrganizationSetting = {
    val_of_credit: '',
    max_yield: '',
    serviceType: 'fixed',
    costType: 'unpaid',
  };
  const [organizationSetting, setOrganizationSetting] = useState(
    emptyOrganizationSetting,
  );

  const handleorganizationSettingChange = (evt) => {
    const { value } = evt.target;
    setOrganizationSetting({
      ...organizationSetting,
      [evt.target.name]: value,
    });
  };

  const edit = () => {
    console.log('i am edit function');
    fetch(`${sub()}.172.30.1.203:4000/organization_settings`, {
      method: 'GET',
      headers: {
        Accept: 'application/cab-tab.com; version=1',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then((jsonResponse) => jsonResponse.json())
      .then((parsedResponse) => {
        setOrganizationSetting(parsedResponse.data[0]);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  };
  // Hook For Fetching Organization Setting Data from Api
  useEffect(() => {
    console.log('i am use effect');
    edit();
  }, []);

  // Submit Event for Saving Organization Settings
  const submit = () => {
    console.log('i am submit function');
    const organizationSettings = {
      val_of_credit: organizationSetting.val_of_credit,
      max_yield: organizationSetting.max_yield,
      service_type: organizationSetting.serviceType,
      cost_type: organizationSetting.costType,
    };

    fetch(`${sub()}.172.30.1.203:4000/organization_settings/`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/vnd.cab-tab.com; version=1',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(organizationSettings),
    })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        return jsonResponse.json();
      })
      .catch((error) => {
        console.error('Error', error);
      });
    setDisabled(!disabled);
    edit();
  };

  return (
    <Card className="App" style={{ width: '50%' }}>
      <Row>
        <Col sm="12" md={{ size: 12 }}>
          <h2 style={{ color: 'blue' }}>Organization Setting</h2>
        </Col>
      </Row>
      <br />
      <Form className="form">
        <Row>
          <Col md={4}>
            <Label>Value of Credit :</Label>
          </Col>
          <Col sm="12" md={{ size: 6, offset: 2 }}>
            <Input
              type="number"
              name="val_of_credit"
              value={organizationSetting.val_of_credit}
              onChange={handleorganizationSettingChange}
              disabled={disabled}
              placeholder="Enter Value of 1 Credit"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4}>
            <Label>Maximum Yield :</Label>
          </Col>
          <Col sm="12" md={{ size: 6, offset: 2 }}>
            <Input
              type="number"
              name="max_yield"
              value={organizationSetting.max_yield}
              onChange={handleorganizationSettingChange}
              disabled={disabled}
              placeholder="Enter Maximum Yields"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4}>
            <Label>Service Type :</Label>
          </Col>
          <Col sm="12" md={{ size: 6, offset: 2 }}>
            <Row>
              <Col>
                <FormGroup check sm={6}>
                  <Label check>
                    <Input
                      value="ondemand"
                      checked={organizationSetting.serviceType === 'ondemand'}
                      type="radio"
                      name="serviceType"
                      disabled={disabled}
                      onChange={handleorganizationSettingChange}
                    />
                    Ondemand
                    <div className="pading" />
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup check sm={6}>
                  <Label check>
                    <Input
                      value="fixed"
                      checked={organizationSetting.serviceType === 'fixed'}
                      type="radio"
                      name="serviceType"
                      disabled={disabled}
                      onChange={handleorganizationSettingChange}
                    />
                    Fixed
                  </Label>
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4}>
            <Label>Payment Type :</Label>
          </Col>
          <Col sm="12" md={{ size: 6, offset: 2 }}>
            <Row>
              <Col>
                <FormGroup check sm={6}>
                  <Label check>
                    <Input
                      value="paid"
                      checked={organizationSetting.costType === 'paid'}
                      type="radio"
                      name="costType"
                      disabled={disabled}
                      onChange={handleorganizationSettingChange}
                    />
                    Paid
                    <div className="pading" />
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup check sm={6}>
                  <Label check>
                    <Input
                      value="unpaid"
                      checked={organizationSetting.costType === 'unpaid'}
                      type="radio"
                      name="costType"
                      disabled={disabled}
                      onChange={handleorganizationSettingChange}
                    />
                    UnPaid
                  </Label>
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <Button color="success" onClick={submit}>
          {disabled ? 'Edit' : 'Save Settings'}
        </Button>
      </Form>
    </Card>
  );
}

export default OrganizationSetting;
