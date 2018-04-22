import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AddTodo from 'components/AddTodo.js';

class TodoApp extends React.Component {
	render () {
		return (
			<Grid>
				<Row>
					<Col md={8} mdPush={2}>
						<AddTodo />
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default TodoApp;