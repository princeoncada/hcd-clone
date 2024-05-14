import Header from "../components/Header";
import Menubar from "../components/Menubar";
import AdmissionContent from "../components/AdmissionContent";
import Footer from "../components/Footer";

export default function AdmissionRequirements() {
    return (
        <div className="w-screen max-w-full" style={{
            fontFamily: 'Montserrat'
        }}>
            <Header />
            <Menubar current="admission"/>
            <AdmissionContent />
            <Footer />
        </div>
    );
}