import FoodItem from "../components/FoodItem/FoodItem";
import Header from "../components/Header/Header";

const Dinner = () => {
    return (
        <>
            <Header />
            <div className="max-w-xl mx-auto lg:p-4 p-3 grid grid-auto-rows-1fr grid-cols-2 md:gap-4 gap-3">
                <FoodItem title="salmon" />
                <FoodItem title="filet" />
                <FoodItem title="vegan" />
                <FoodItem title="pasta" />
            </div>
        </>
    )
}

export default Dinner;