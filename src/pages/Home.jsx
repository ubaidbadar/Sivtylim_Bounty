import Header from "../components/Header/Header";
import Movie from "../components/Movie/Movie";

const Home = () => {
    return (
        <>
            <Header />
            <div className="max-w-xl mx-auto lg:p-4 p-3 grid grid-auto-rows-1fr grid-cols-2 md:gap-4 gap-3">
                <Movie title="The Revenant" src="movie_1.jpg" />
                <Movie title="Mad Max Fury Road" src="movie_2.jpg" />
                <Movie title="The Martian" src="movie_4.jpg" />
                <Movie title="Jurassic World" src="movie_3.jpg" />
            </div>
        </>
    )
}

export default Home;