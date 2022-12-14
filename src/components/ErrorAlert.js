import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function SuccessAlert(props) {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => (setShow(false), props.setSuccess())} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    The Email: {props.email} already exists! Please use a different one.
                </p>
            </Alert>
        );
    }
}
export default SuccessAlert;