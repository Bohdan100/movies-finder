import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RequestError = ({ message }) => {
  return (
    <div role="alert">
      {toast.error(
        'An error occurred while searching for your query. Try to refine your search keyword.'
      )}
      <p>{message}</p>
    </div>
  );
};

RequestError.propTypes = {
  message: PropTypes.string.isRequired,
};
