import Header from "../components/Header/Header";
import Movie from "../components/Movie/Movie";

const Home = () => {
    return (
        <>
            <Header />
            <div className="max-w-xl mx-auto p-4 grid grid-auto-rows-1fr grid-cols-2 gap-4">
                <Movie title="The Revenant" src="movie_1.jpg" />
                <Movie title="Mad Max Fury Road" src="movie_2.jpg" />
                <Movie title="The Martian" src="movie_4.jpg" />
                <Movie title="Jurassic World" src="movie_3.jpg" />
            </div>
        </>
    )
}

export default Home;