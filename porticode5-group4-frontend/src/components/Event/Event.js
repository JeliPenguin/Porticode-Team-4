import { useEffect, useState } from "react";
import axios from 'axios'
import Navbar from "components/Navbars/AuthNavbar.js";
import { useParams } from "react-router";

const Event = () => {
    const [attenders, setAttenders] = useState([{ full_name: "John" }])
    const { eventID } = useParams()
    const [event, setEvent] = useState({})

    const fetchEvent = async () => {
        const res = await axios.get(`/events/${eventID}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setEvent(res.data)
    }

    const fetchAttenders = async () => {
        const res = await axios.post(`/event/${eventID}/users-attending`)
        console.log(res.data)
        setAttenders(res.data)
    }

    useEffect(() => {
        fetchEvent()
        fetchAttenders()
    }, [])

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
                        <div className="relative flex flex-col min-w-0 break-words bg-red-400 w-full mb-6 shadow-xl rounded-lg -mt-64" >
                            <div className="px-6">
                                <div className="text-center mt-12">
                                    <h3 className="text-4xl font-semibold leading-normal text-white mb-2">
                                        {event.name}
                                    </h3>
                                    <h4>{`Event Code: ${event.id}`}</h4>

                                    <p className="text-white">{`${event.start_time} - ${event.end_time}`}</p>
                                </div>
                                <div className="mt-10 py-10 border-t border-blueGray-200 grid grid-col-3">
                                    <div className="text-sm leading-normal mt-0 mb-2 text-white font-bold uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-white"></i>{" "}
                                        {event.location}
                                    </div>
                                    <ol className="text-white">
                                        Attenders:
                                        {attenders.map(attender => (
                                            <li className="text-black">{attender.full_name}</li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Event