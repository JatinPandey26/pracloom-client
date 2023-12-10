import HomePageNavbar from "../components/HomePageNavbar.jsx";
import HomePageBanner from "../components/HomePageBanner.jsx";
import '../styles/HomePage.scss'
import HomeFeatures from "../components/HomeFeatures.jsx";
import HomeCustomBanner from "../components/HomeCustomBanner.jsx";
import Footer from "../components/footer.jsx";

const Home = () => {
    return (
        <div className={"home-page"}>
            <HomePageNavbar/>
            <HomePageBanner/>
            <HomeFeatures/>
            <HomeCustomBanner/>
            <Footer/>
        </div>
    );
};

export default Home;