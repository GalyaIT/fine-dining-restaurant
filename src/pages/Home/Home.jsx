import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from '../../container';
import { Navbar} from '../../components';

const Home = () => {
    
    return (
        <div>
            <Navbar />
            <Header />
            <AboutUs />
            <SpecialMenu />
            <Chef />
            <Intro />
            <Laurels />
            <Gallery />
            <FindUs />
            <Footer />
            {/* <BackToTop /> */}
        </div>
    )
}
export default Home;