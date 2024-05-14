import Header from '../components/Header.jsx';
import Menubar from '../components/Menubar.jsx';
import ScholarshipContent from '../components/ScholarshipContent.jsx';
import Footer from '../components/Footer.jsx';

export default function Scholarship() {
    return (
        <div className='w-screen max-w-full' style={{
            fontFamily: 'Montserrat'
        }}>
            <Header />
            <Menubar />
            <ScholarshipContent />
            <Footer />
        </div>
    );
}