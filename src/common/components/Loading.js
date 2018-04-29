import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import injectSheet from 'react-jss'

const styles = {
	loader: {
    border: '16px solid #f3f3f3', /* Light grey */
    borderTop: '16px solid #3498db', /* Blue */
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    margin: '0px auto',
    animation: 'spin 2s linear infinite'
	},
	'@keyframes spin': {
		from : { transform: 'rotate(0deg)' },
		to: { transform: 'rotate(360deg)' }
	},
	'loading-text': {
		textAlign: 'center',
		marginTop: '10px'
	}
};

const Loading = (props) => {
	return (
		<Grid>
			<Row >
				<Col md={8} mdPush={2}>
					<div className={props.classes.loader}></div>
					<div className={props.classes['loading-text']}>LOADING</div>
				</Col>
			</Row>
		</Grid>
	);
}

export default injectSheet(styles)(Loading);