export default function Footer() {
    return <>
        <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-center lg:text-start bg-blue-950 text-white pt-16 text-sm text-center px-10 gap-12">
            <div className="md:w-3/6 flex-1 lg:w-1/12 mx-auto  lg:mr-16">
                <img src="./home/logo-white.png" alt="" />
            </div>
            <div className="md:text-base flex-1">
                <i className='bx bx-map-pin text-xl'></i>
                <div>
                    Green Meadows
                    <br />
                    Brgy. Sto. Nino , Green Meadows Subdivision, Tugbok, Davao City, 8000 Davao del Sur
                    <br />
                    0950-717-1747
                    <br />
                    082-293-1178
                </div>
            </div>

            <div className="md:text-base flex-1">
                <i className='bx bx-map-pin text-xl'></i>
                <div>
                    Kalayaan
                    <br />
                    Emilio Jacinto Street, Brgy. Poblacion,
                    <br />
                    Davao City, 8000 
                    <br />
                    Davao del Sur
                    <br />
                    0981-068-2527
                </div>
            </div>

            <div className="md:text-base flex-1">
                <i className='bx bx-map-pin text-xl'></i>
                <div>
                    Trinity
                    <br />
                    Rd 1 Buhangin-Cabantian-Indangan Rd, Buhangin, 
                    <br />
                    Davao City, 8000 Davao del Sur
                    <br />
                    0981-465-9312
                    <br />
                    082-297-7462
                </div>
            </div>
        </div>
        <div className="bg-blue-950 text-white text-center text-xs p-10">
            © Copyright 2022 - The HOLY CHILD College of Davao - All Rights Reserved
        </div>
    </>
}