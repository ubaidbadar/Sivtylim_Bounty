import { NavLink } from "react-router-dom";
import styles from './header.module.scss';

const Header = () => {
    return (
        <header className="bg-primary text-white">
            <nav>
                <ul className={styles.list}>
                    <li><NavLink to='/'>Movie</NavLink></li>
                    <li><NavLink to='/music'>Music</NavLink></li>
                    <li><NavLink to='/breakfast'>Breakfast</NavLink></li>
                    <li><NavLink to='/dinner'>Dinner</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;