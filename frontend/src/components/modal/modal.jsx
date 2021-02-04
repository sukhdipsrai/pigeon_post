import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
// import CreateTaskContainer from '../dashboard/task/create_task_container';
import Gapiform from '../task_form/gapi_form'
function Modal({ modal, closeModal }) {
    if (!modal) { return null; }
    let component;
    switch (modal.modal) {
        case 'create-task':
            component = <Gapiform
                authorId={modal.authorId}
            />
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const mSTP = state => {
    return {
        modal: state.ui.modal
    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(Modal);