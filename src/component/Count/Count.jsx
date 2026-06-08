import '../Meals/Meals.css';
const Count = ({count}) => {
    return (
        <div>
            <h1>Add Meal Items</h1>

            <ol>
                    {
                        count.map(getTitles => <li>{getTitles.strMeal}</li>)
                    }
            </ol>
        </div>
    );
};

export default Count;