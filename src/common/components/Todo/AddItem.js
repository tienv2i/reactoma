import React from 'react';
import { FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap';

const AddItem = (props) => {
	return (
		<FormGroup>
			<InputGroup>
				<FormControl type="text" />
				<InputGroup.Button>
					<Button>Add</Button>
				</InputGroup.Button>
			</InputGroup>
		</FormGroup>
	);
};

export default AddItem;