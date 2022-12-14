import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function SuccessAlert(props) {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Yeaahh! You Successfully signed up!!"}</Alert.Heading>
                <p>
                    Thank you!, everything okay!
                </p>
            </Alert>
        );
    }
}
export default SuccessAlert;