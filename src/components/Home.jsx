import { Link } from "react-router-dom";

function Home() {
    return (

        <section
            className="hero"
            style={{ backgroundImage: "url('/ferrari-hero.png')" }}
        >

            <div className="overlay">
                <div className="hero-content">

                    <h2>WELCOME TO</h2>

                    <h1>AUTO HQ</h1>

                    <p>

                        The ultimate community for car enthusiasts.

                        <br />
                        Share. Discuss. Connect.
                        <br />
                        Drive your passion.
                    </p>
                    <div className="hero-buttons">

                        <Link to="/events">
                            <button>Browse Events</button>
                        </Link>

                        <Link to="/forums">
                            <button>Browse Forums</button>
                        </Link>

                    </div>

                </div>

            </div>
        </section>


    )
}

export default Home