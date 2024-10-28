import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';

const Feature = ({feature}) => {
    return (
        <div className='text-left flex gap-2 items-start'>
            <AiFillCheckCircle className='w-6 h-6 text-green-500' />
            <p>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string.isRequired,
}

export default Feature;