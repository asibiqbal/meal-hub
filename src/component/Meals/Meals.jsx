import './Meals.css';
const Meals = ({meals}) => {
    return (
        <div>
            <h className="meals-title">{meals.strMeal}</h>     
            <img className='meals-img' src={meals.strMealThumb} alt="" />
            <p className='meals-description'>{meals.strInstructions}</p>
            <p className='meals-area'>{meals.strArea} Dish</p>
        </div>
    );
};

export default Meals;