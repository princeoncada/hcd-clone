import Header from '../components/Header.jsx';
import Menubar from '../components/Menubar.jsx';
import HomeHero from '../components/HomeHero.jsx';
import HomeContent from '../components/HomeContent.jsx';
import HomeVerse from '../components/HomeVerse.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
    return (
        <div className="w-screen max-w-full" style={{
            fontFamily: 'Montserrat'
        }}>
            <Header />
            <Menubar current="home"/>
            <HomeHero />
            <HomeContent />
            <HomeVerse />
            <Footer />
        </div>
    )
}