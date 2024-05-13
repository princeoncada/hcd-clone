/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Menubar({ current }) {
    const [admission, setAdmission] = useState(false);
    const [student, setStudent] = useState(false);
    const [menu, setMenu] = useState(false);

    function handleMenu() {
        setMenu(x => !x);
    }

    return (
        <>
            <div className="hidden lg:flex flex-row justify-center items-center bg-blue-950 text-white h-20">
                <div className="h-full">
                    <a href="/" className={`h-full flex justify-center items-center px-6 hover:text-slate-300 ${current === "home" ? "text-slate-300" : ""}`}>Home</a>
                </div>
                <div className="h-full">
                    <a href="/about" className={`h-full flex justify-center items-center px-6 hover:text-slate-300 ${current === "about" ? "text-slate-300" : ""}`}>About</a>
                </div>
                <div className="h-full">
                    <a href="" onMouseEnter={() => { setAdmission(true) }} onMouseLeave={() => { setAdmission(false) }} className={`h-full flex gap-2 items-center px-6 hover:text-slate-300 ${current === "admission" ? "text-slate-300" : ""}`}>Admission<i className='bx bx-chevron-down'></i>
                    </a>
                    <div className={`${admission ? "flex" : "hidden"}`}>
                        <a href="" onMouseEnter={() => { setAdmission(true) }} onMouseLeave={() => { setAdmission(false) }} className={`flex items-center px-6 bg-blue-950 hover:text-slate-300 text-white h-20 ${current === "scholarship" ? "text-slate-300" : ""}`}>Scholarship</a>
                    </div>
                </div>
                <div className="h-full">
                    <a href="" onMouseEnter={() => { setStudent(true) }} onMouseLeave={() => { setStudent(false) }} className={`h-full flex gap-2 items-center px-6 hover:text-slate-300 ${current === "student" ? "text-slate-300" : ""}`}>Student & Faculty Hub <i className='bx bx-chevron-down' ></i></a>
                    <div className={`${student ? "flex" : "hidden"}`}>
                        <a href="" onMouseEnter={() => { setStudent(true) }} onMouseLeave={() => { setStudent(false) }} className={`flex items-center px-6 hover:text-slate-300 bg-blue-950 text-white h-20 ${current === "career" ? "text-slate-300" : ""}}`}>Career Opportunities</a>
                    </div>
                </div>
                <div className="h-full">
                    <a href="" className={`h-full flex justify-center items-center px-6 hover:text-slate-300 ${current === "touch" ? "text-slate-300" : ""}`}>Get in Touch</a>
                </div>
                <div className="h-full">
                    <a href="" className={`h-full flex justify-center items-center px-6 hover:text-slate-300 ${current === "eagles" ? "text-slate-300" : ""}`}>Red Eagles</a>
                </div>
            </div>
            <div className="flex lg:hidden flex-row justify-center bg-blue-950 text-white h-20">
                <div className="flex flex-col gap-2 px-8 h-full items-start justify-center" onClick={handleMenu}>
                    <div className={`w-10 h-1.5 rounded-sm bg-white transition duration-500 ${menu ? "rotate-45 translate-y-3.5" : ""}`}></div>
                    <div className={`h-1.5 rounded-sm bg-white transition-width ease-in-out duration-500 ${menu ? "w-0" : "w-10"}`}></div>
                    <div className={`w-10 h-1.5 rounded-sm bg-white transition duration-500 ${menu ? "-rotate-45 -translate-y-3.5" : ""}`}></div>
                </div>
            </div>
            <div className={`absolute text-base flex lg:hidden flex-col justify-center bg-blue-950 text-center gap-10 pt-12 pb-16 text-white w-screen max-w-full transition duration-500 ${menu ? "" : "-translate-x-full"}`}>
                <a href="/" className={`${current === 'home' ? "text-slate-300" : ""}`}>Home</a>
                <a href="/about" className={`${current === 'about' ? "text-slate-300" : ""}`}>About</a>
                <a href="" className={`${current === 'admission' ? "text-slate-300" : ""}`}>Admission</a>
                <a href="" className={`${current === 'student' ? "text-slate-300" : ""}`}>Student & Faculty Hub</a>
                <a href="" className={`${current === 'touch' ? "text-slate-300" : ""}`}>Get in Touch</a>
                <a href="" className={`${current === 'eagles' ? "text-slate-300" : ""}`}>Red Eagles</a>
            </div>
        </>
    );
}