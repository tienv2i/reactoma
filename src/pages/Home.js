import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={8} mdPush={2}>
            Homepage here!
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
