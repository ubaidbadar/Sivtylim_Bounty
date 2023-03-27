const { Link } = require("react-router-dom")

const FoodItem = ({title = "", className = "", ...props }) => (
    <Link {...props} className={`flex flex-col hover:[&>span>img]:scale-110 overflow-hidden ${className}`}>
        <span className="text-2xl my-3 font-semibold mx-auto">{title}</span>
        <span className="relative pt-[110%] overflow-hidden">
            <img src={`${title}.jpg`} alt="" className="w-full transition absolute top-0 object-cover left-0 h-full" />
        </span>
    </Link>
)

export default FoodItem;