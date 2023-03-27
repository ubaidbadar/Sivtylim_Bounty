const { Link } = require("react-router-dom")

const Movie = ({ src = "", title = "", ...props }) => (
    <Link {...props} className="flex hover:[&>img]:scale-110 overflow-hidden">
        <img src={src} alt={title} className="w-full transition-transform" />
    </Link>
)

export default Movie;