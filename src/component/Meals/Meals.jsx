import './Meals.css';
const Meals = ({meals , getCount}) => {
    return (
        <div className='meals-item'>
            <h1 className="meals-title">{meals.strMeal}</h1>     
            <img className='meals-img' src={meals.strMealThumb} alt="" />
            <p className='meals-description'>{meals.strInstructions}</p>
            <p className='meals-area'>
                {
                (meals.strArea == null) ? 'Unknown' : meals.strArea
                }
            Dish</p>
            <button onClick={() => getCount(meals)} className='meals-btn'>Add To Card</button>
        </div>
    );
};

export default Meals;