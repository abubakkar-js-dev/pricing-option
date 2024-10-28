import PriceOption from '../PriceOption/PriceOption';
const PriceOptions = () => {
  const priceOption = [
    {
      "id": 1,
      "name": "Basic Plan",
      "price": 20,
      "currency": "USD",
      "features": [
        "Full access to gym equipment",
        "Locker facility",
        "Complimentary water refill station",
        "General fitness orientation",
        "Open gym access during staffed hours"
      ]
    },
    {
      "id": 2,
      "name": "Standard Plan",
      "price": 40,
      "currency": "USD",
      "features": [
        "Full access to gym equipment and cardio ",
        "Locker facility with dedicated storage",
        "4 personal training sessions per month",
        "Group class access (yoga, Zumba)",
        "Weekly progress tracking and fitness tips",
        "Priority booking for gym equipment during "
      ]
    },
    {
      "id": 3,
      "name": "Premium Plan",
      "price": 60,
      "currency": "USD",
      "features": [
        "24/7 access to gym and cardio zones",
        "Dedicated locker and towel service",
        "Unlimited personal training sessions",
        "Exclusive group class access ",
        "Full access to sauna, steam room, and hot",
        "Monthly fitness assessment and nutrition ",
        "10% discount on gym merchandise"
      ]
    }
  ];
  
      console.log(priceOption[0].name)       
    return (
        <div>
          <h2 className='text-5xl text-white text-center mb-14'>Best Price in Town</h2>
            <div className='grid md:grid-cols-3 gap-6'>
            {priceOption.map(option => <PriceOption key={option.id} option = {option}></PriceOption>)}
            </div>
        </div>
    );
};

export default PriceOptions;