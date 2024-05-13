export default function HomeContent() {
    return <>
        <div className="flex flex-col lg:flex-row-reverse mt-12 bg-blue-950 text-white text-center">
            <img className="lg:w-1/2 object-cover" src="./home/image1.jpg" alt="" />
            <div className="flex flex-col gap-8 px-6 lg:px-10 lg:my-auto">
                <div className="text-4xl md:text-5xl mt-16 font-bold text-red-500">
                    A Christ Centered
                    <br />
                    Community
                </div>
                <div className="flex flex-col gap-4 md:gap-6">
                    <div className="text-xl md:text-3xl font-bold">
                        VISION
                    </div>
                    <div className="text-justify font-light md:text-xl md:px-14 lg:px-0">
                        By 2030, The HOLY CHILD would acquire International University status. It will be recognized as one of the best academic institutions in the Davao Region, applying relevant and modern information technology systems that are managed by the most qualified and highly dedicated faculty and staff.
                    </div>
                </div>
                
                <div className="flex flex-col gap-4 md:gap-6">
                    <div className="text-xl md:text-3xl font-bold">
                        MISSION
                    </div>
                    <div className="text-justify font-light md:text-xl md:px-14 lg:px-0">
                        With the promotion of the Word of God as its primary mission, The HOLY CHILD bridges faith and holistic development, leading students and stakeholders through spiritual growth and promoting service to the community. As an educational institution, The HOLY CHILD effectively facilitates a multi-modal teaching system, diversifying the learning process and improving quality of instruction.
                    </div>
                </div>
                
                <div className="mb-10 text-sm md:text-xl">
                    <button className="bg-red-500 text-white py-3 px-6 rounded">
                        Click to View Holy Child History
                    </button>
                </div>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row bg-red-500 text-white text-center">
            <img className="h-96 md:h-auto object-cover lg:w-1/2" src="./home/image2.jpg" alt="" />
            <div className="flex flex-col gap-8 px-6 lg:my-auto">
                <div className="text-4xl md:text-5xl mt-16 font-bold text-blue-950">
                    An Inspirational
                    <br />
                    Campus Spirit
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-justify font-light md:text-xl md:px-14 lg:px-4">
                        Come join us as brothers and sisters of Christ in celebrating, learning, and enjoying momentous events and occasions inside and outside of the classroom! Find out our upcoming events by clicking on the events calendar, or reminisce with us by checking out our Campus Spirit Gallery!
                    </div>
                </div>

                <div className="mb-10 text-sm md:text-xl">
                    <button className="bg-blue-950 text-white py-3 px-6 rounded">
                        View Campus Spirit Gallery
                    </button>
                </div>
            </div>
        </div>
    </>
}