export default function AboutHero() {
    return <>
        <div className="text-center px-6 py-12 md:px-12 lg:px-16 lg:py-20">
            <div className="text-lg md:text-4xl lg:text-5xl font-bold text-blue-950 leading-5">
                Welcome to <span className="text-red-500">The HOLY CHILD</span> College of Davao
            </div>
            <div className="pt-6 md:pt-12 lg:pt-24">
                <div className="flex flex-row justify-center">
                    <img className="w-1/2 md:w-1/4 object-cover" src="./about/logo-about.png" alt="" />
                    <img className="w-1/2 md:w-1/4 object-cover" src="./home/logo.jpg" alt="" />
                </div>
                <div>
                    <img className="md:w-2/3 mx-auto" src="./about/logo-about2.png" alt="" />
                </div>
            </div>
        </div>
    </>
}