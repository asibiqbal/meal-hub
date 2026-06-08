import '../Meals/Meals.css';

const Count = ({count}) => {
    return (
        <div className="count-content">
            <h1>🛒 Cart Items</h1>
            {count.length === 0 ? (
                <p className="empty-cart">No items added yet</p>
            ) : (
                <ol className="cart-list">
                    {
                        count.map((getTitles, index) => (
                            <li key={index} className="cart-item">
                                {getTitles.strMeal}
                            </li>
                        ))
                    }
                </ol>
            )}
            <div className="cart-summary">
                <p className="item-count">Total Items: <strong>{count.length}</strong></p>
            </div>
        </div>
    );
};

export default Count;