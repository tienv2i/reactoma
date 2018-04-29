import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AddItem from 'components/Todo/AddItem.js';

class TodoApp extends React.Component {
	render () {
		return (
			<Grid>
				<Row>
					<Col md={8} mdPush={2}>
						<AddItem />
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default TodoApp;