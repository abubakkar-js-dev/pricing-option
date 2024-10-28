import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div>
          <li className='hover:bg-slate-700 lg:hover:bg-transparent lg:hover:text-gray-300 py-2 rounded-md'><a className='text-base lg:bg-transparent' href={route.path}>{route.name}</a></li>   
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired,
};

export default Link;