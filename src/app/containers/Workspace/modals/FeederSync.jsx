import chainedFunction from 'chained-function';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'app/components/Buttons';
import ModalTemplate from 'app/components/ModalTemplate';
import Modal from 'app/components/Modal';
import controller from 'app/lib/controller';
import i18n from 'app/lib/i18n';

const FeederSync = (props) => (
    <Modal
        size="xs"
        disableOverlay={true}
        showCloseButton={false}
    >
        <Modal.Body>
            <ModalTemplate type="warning">
                <h5>{props.title}</h5>
                <p>{i18n._('Sync Macro to Machine; holding until machine stops moving.')}</p>
            </ModalTemplate>
        </Modal.Body>
        <Modal.Footer>
            <Button
                btnStyle="danger"
                onClick={chainedFunction(
                    () => {
                        controller.command('feeder:stop');
                    },
                    props.onClose
                )}
            >
                {i18n._('Stop')}
            </Button>
        </Modal.Footer>
    </Modal>
);

FeederSync.propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func
};

export default FeederSync;
