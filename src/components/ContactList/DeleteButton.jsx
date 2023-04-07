import { deleteContact } from 'redux/PhonebookSlice';
import { DeleteBtn } from './DeleteButton.styled';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

export const DeleteButton = ({ contactId }) => {
    const dispatch = useDispatch();
    const handleDeleteContact = e => {
        e.preventDefault();
        let idToRemove = e.target.value;
        dispatch(deleteContact(idToRemove));
    }

    return <>
        <DeleteBtn onClick={ handleDeleteContact } type="button" value={contactId}>Delete</DeleteBtn>
    </>
}

DeleteButton.propTypes = {
    contactId: PropTypes.string.isRequired,
}