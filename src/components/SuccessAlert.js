import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function SuccessAlert(props) {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="success" onClose={() => (setShow(false), props.setSuccess())} dismissible>
                <Alert.Heading>Yeaahh! You Successfully signed up!!"}</Alert.Heading>
                <p>
                    Name: {props.name} and Email: {props.email} registered!
                </p>
            </Alert>
        );
    }
}
export default SuccessAlert;