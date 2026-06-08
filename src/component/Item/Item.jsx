import { use, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Count from "../Count/Count";
import Meals from "../Meals/Meals";
import '../Meals/Meals.css';
import './Item.css';

const Item = ({fetchMeals}) => {
    const getMeals = use(fetchMeals);
    const meals = getMeals.meals

    const [count, setCount] = useState([])

    const getCount = (getMealsCount) => {
        setCount([...count, getMealsCount])
    }
    const getOrder = () => {
        setCount([]);
      toast.success("Order Confirmed! 🎉");
    }

    return (
        <div className="item-wrapper">
            <div className="meals-main-container">
                <div className="meals-container">
                {
                    meals.map(meals =>
                    <Meals getCount ={getCount} key={meals.idMeal} meals={meals}></Meals>)
                }
                </div>
                <div className="count-container">
                    <Count count={count}></Count>
                    <button onClick={() => getOrder()} className="meals-btn order-btn">Order Items</button>
                </div>
            </div>
            <ToastContainer 
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Item;