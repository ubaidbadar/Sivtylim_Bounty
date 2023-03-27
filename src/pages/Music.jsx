import Header from "../components/Header/Header";
import Sound from "../components/Sound/Sound";

const Music = () => {
    return (
        <>
            <Header />
            <div className="max-w-xl mx-auto lg:p-4 p-3 grid grid-auto-rows-1fr grid-cols-2 md:gap-4 gap-3">
                <Sound title="My Everything" src="sound_1.png" singer="Ariana Grande" />
                <Sound title="Lemonade" src="sound_2.jpg" singer="Beyonce" />
                <Sound title="Waka Waka" src="sound_3.jpg" singer="Shakira" />
                <Sound title="Bilionera" src="sound_4.jpg" singer="Otilia" />
            </div>
        </>
    )
}

export default Music;