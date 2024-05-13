import Header from '../components/Header.jsx';
import Menubar from '../components/Menubar.jsx';
import AboutHero from '../components/AboutHero.jsx';
import AboutContent from '../components/AboutContent.jsx';
import AboutContent2 from '../components/AboutContent2.jsx';
import AboutVideoFrame from '../components/AboutVideoFrame.jsx';
import Footer from '../components/Footer.jsx';


export default function About() {
    return (
    <div className="w-screen max-w-full" style={{
        fontFamily: 'Montserrat'
    }}>
        <Header/>
        <Menubar current="about" />
        <AboutHero />
        <AboutContent />
        <AboutContent2 />
        <AboutVideoFrame />
        <Footer />
    </div>
    )
}