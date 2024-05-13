export default function HomeHero() {
    return <>
        <div>
            <img className="md:w-4/5 lg:w-2/5 mx-auto" src="./home/logo.jpg" alt="" />
        </div>
        <div className="text-center px-5">
            <div className="text-lg md:text-4xl lg:text-5xl font-bold text-blue-950 leading-5">
                Welcome to <span className="text-red-500">The HOLY CHILD</span>
                <br />
                College of Davao
            </div>
            <div className="text-base md:text-2xl mt-5 lg:mt-16 tracking-tighter font-bold text-blue-950 leading-5">
                <span className="text-red-500">ENROLLMENT for SY 2024-2025</span> is ONGOING!
            </div>
            <div className="mt-10 lg:w-5/6 mx-auto px-2 text-sm md:text-xl md:px-12">
                The HOLY CHILD College of Davao is a Bible-based Christian School in the Philippines founded by Mrs. Victoria D. Leuterio in 1981. Founded in God’s love that looks upon every child as a holy offering, the HOLY CHILD community, together and by association, provides quality human, professional and Christian education by teaching minds, touching hearts, and transforming lives.
            </div>
            <div className="mt-10 lg:mt-16 text-sm md:text-xl">
                <button className="bg-red-500 text-white py-3 px-6 rounded">
                    Know More About Our History
                </button>
            </div>
        </div>
    </>    
}