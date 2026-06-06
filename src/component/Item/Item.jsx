import { use } from "react";
import Meals from "../Meals/Meals";
import './Item.css';

const Item = ({fetchMeals}) => {
    const getMeals = use(fetchMeals);
    const meals = getMeals.meals

    return (
        <div className="meals-container">
            {
                meals.map(meals => <Meals key={meals.idMeal} meals={meals}></Meals>)
            }
        </div>
    );
};

export default Item;