import FoodItem from "../components/FoodItem/FoodItem";
import Header from "../components/Header/Header";

const BreakFast = () => {
    return (
        <>
            <Header />
            <div className="max-w-xl mx-auto lg:p-4 p-3 grid grid-auto-rows-1fr grid-cols-2 md:gap-4 gap-3">
                <FoodItem title="toast" />
                <FoodItem title="juice" />
                <FoodItem title="pancake" />
                <FoodItem title="burrito" />
            </div>
        </>
    )
}

export default BreakFast;