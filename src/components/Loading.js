import React from 'react';
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap';

const Loading = (props) => {
	return (
		<Grid>
			<Row>
				<Col md={8} mdPush={2}>
					<ProgressBar active now={100} />
				</Col>
			</Row>
		</Grid>
	);
}

export default Loading;