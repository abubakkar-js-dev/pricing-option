import PropTypes from 'prop-types';
import Feature from '../feature/Feature';



const PriceOption = ({option}) => {
    const {name,price,features} = option;
    return (
        <div className='bg-blue-500 text-white p-8 rounded-xl space-y-8 flex flex-col'>
            <div>
                <span className='text-6xl md:text-7xl text-center'>{price}</span>
                <span>/mon</span>
            </div>
            <h3 className='text-3xl  lg:text-5xl'>{name}</h3>
            <div className='space-y-3 flex-grow'>
            {features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)}
            </div>
            <button className='h-12 px-6 bg-green-500 hover:bg-transparent hover:border-2 hover:border-green-500 mt-14 w-full rounded-full duration-75'>Buy now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired,
};

export default PriceOption;