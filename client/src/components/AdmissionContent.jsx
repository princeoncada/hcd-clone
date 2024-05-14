export default function AdmissionContent() {
    return (
        <div className="flex flex-col px-8 pt-10 text-justify items-start lg:w-4/5 lg:mx-auto">
            <div>
                The world has changed but learning never stops. At HOLY CHILD College of Davao we offer a variety of programs from Kindergarten to College undergraduate degrees. We continue to promote a holistic approach in education while guiding our students in the ways of Christ even virtually.
            </div>
            <div className="font-bold pt-4">
                Click on the desired program you wish to enroll below to view requirements and to proceed for enrollment!
            </div>
            <a href="/scholarship" className="bg-red-500 text-white p-2 px-4 rounded hover:bg-blue-950 mt-2">
                Scholarship Offerings
            </a>
            <div className="font-bold text-xl pt-8">
                BASIC EDUCATION
            </div>
            <div className="pt-5 pl-4">
                <ul className="list-disc text-left text-base">
                    <li>
                        <a href="/" className="text-blue-500">Kinderville (Pre-Kinder and Kindergarten)</a>
                    </li>
                    <li>
                        <a href="/" className="text-blue-500">Grade School Primary and Level Middle Grade (Grades 1-6)</a>
                    </li>
                    <li>
                        <a href="/" className="text-blue-500">Junior High School (Grades 7-10)</a>
                    </li>
                    <li>
                        <a href="/">MWSP-Junior High School (Grades 7-10)</a>
                    </li>
                </ul>
            </div>
            <div className="pt-5 text-sm text-red-500 italic">
                * For more enrollment inquiries for KinderVille and Basic Education kindly contact 0950-717-1747
            </div>
            <div className="font-bold text-xl pt-8">
                SENIOR HIGH SCHOOL
            </div>
            <div className="pt-5 pl-4">
                <ul className="list-disc text-left text-base">
                    <li>
                        <a href="/" className="text-blue-500">Accountancy Business and Management (ABM)</a>
                    </li>
                    <li>
                        <a href="/" className="text-blue-500">Humanities and Social Sciences (HUMSS)</a>
                    </li>
                    <li>
                        <a href="/" className="text-blue-500">Information and Communications Technology (TVL)</a>
                    </li>
                    <li>
                        <a href="/" className="text-blue-500">Science, Technology, Engineering and Mathematics Strand (STEM)</a>
                    </li>
                    <div className="pt-3">
                        Specialization Offered:
                    </div>
                    <ol className="list-decimal pl-4 pt-2">
                        <li>
                            Animation
                        </li>
                        <li>
                            Computer Programming
                        </li>
                        <li>
                            Computer System Servicing
                        </li>
                        <li>
                            Contact Center Services
                        </li>
                    </ol>
                </ul>
            </div>
            <div className="pt-5 text-sm text-red-500 italic">
                * For more enrollment inquiries for Senior High School, kindly contact 0981-068-2527
            </div>
            <div className="font-bold text-xl pt-8">
                COLLEGE UNDERGRADUATE PROGRAMS
            </div>
            <div className="pt-5 pl-4">
                <ul className="list-disc text-left text-base">
                    <li>
                        <div>BS in Business Administration Major in Marketing Management</div>
                    </li>
                    <li>
                        <div>BS in Computer Science</div>
                    </li>
                    <li>
                        <div>BS in Criminology</div>
                    </li>
                    <li>
                        <div>BS in Information Technology</div>
                    </li>
                    <li>
                        <div>Bachelor of Elementary Education - Generalist</div>
                    </li>
                    <li>
                        <div>Bachelor of Secondary Education - Major in English</div>
                    </li>
                    <li>
                        <div>Earning Units in Education</div>
                    </li>
                </ul>
            </div>
            <a href="/" className="font-bold text-lg pt-8 text-left">
                Click Here for Admission Requirements for College
            </a>
            <div className="pt-5 text-sm text-red-500 italic">
                * For more enrollment inquiries for College Programs, kindly contact 0991-433-1050
            </div>
            <img className="pt-16 ml-auto" src="./hc_illustration-01.webp" alt="" />
        </div>
    );
}