import { Link } from "react-router-dom";

const Sound = ({ title = "", src = "", singer = "", className = "", ...props }) => (
    <Link {...props} className={`shadow flex flex-col hover:shadow-xl overflow-hidden bg-white rounded-lg ${className}`}>
        <span className="relative pt-[100%] overflow-hidden">
            <img src={src} alt="" className="w-full absolute top-0 object-cover left-0 h-full" />
        </span>
        <small className="text-base mt-2 mx-3">{title}</small>
        <small className="text-gray-600 mx-3 mb-3">{singer}</small>
    </Link>
)

export default Sound;