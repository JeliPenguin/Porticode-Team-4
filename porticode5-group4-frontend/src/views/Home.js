import React from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import MapComponent from "components/Maps/MapComponent";
import TimetableComponent from "components/Timetable/timetable-list";

export default function Home() {
    return (
        <>
            <Navbar transparent />
            <main className="profile-page">
                <section className="relative block h-500-px">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-50 bg-black"
                        ></span>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-blueGray-200 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>
                <section className="relative py-16 bg-blueGray-200">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img
                                                alt="..."
                                                src={require("assets/img/team-2-800x800.jpg").default}
                                                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="text-center mt-24">
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                                        Jenna Stones
                                    </h3>
                                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                        <span class="px-2">Currently At:</span>
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                                        Malet Place, Engineering
                                    </div>
                                    <div className="mb-2 text-blueGray-600 mt-10">
                                        <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                                        BSc Computer Science
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                    <div className="flex flex-wrap items-center flex-row">
                                        <div className="w-full md:w-8/12 px-4">
                                            <MapComponent lat="51.524776" long='-0.133583' />
                                        </div>

                                        <div className="w-full lg:w-4/12 px-4 border-2 rounded-lg">
                                            <h1 className="text-xl font-bold mt-3">Upcoming Events</h1>
                                            <div className="container flex justify-center ">
                                                <ul className="flex flex-col">
                                                    <TimetableComponent color="bg-red-500" event="Maths Lecture" time="10:00 - 11:00" />
                                                    <TimetableComponent color="bg-orange-500" event="Study session" time="10:00 - 11:00" />
                                                    <TimetableComponent color="bg-pink-500" event="Mathematics Lab" time="10:00 - 11:00" />
                                                    <TimetableComponent color="bg-yellow-500" event="Dinner" time="10:00 - 11:00" />
                                                    <TimetableComponent color="bg-purple-500" event="Movie" time="10:00 - 11:00" />

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
