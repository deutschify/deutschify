import emailjs from "emailjs-com";
import { useState } from "react";
import { useStore } from "../../store";
import { Navigate } from "react-router";
import ContactPopup from "./ContactPopup";
import ContactA from "../../../public/images/illus/contact1.png"
import ContactB from "../../../public/images/illus/contact2.png"

const ContactUs = () => {
    const currentUser = useStore((state) => state.currentUser);
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_sibh6aj",
                "template_s5ji57q",
                e.target,
                "r4VXiStFKFZmc17at"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        togglePopup();
    }

    return (
        <>
            {currentUser.accessGroups?.includes("loggedInUsers") ? (
                <div className="bg-palette-60 p-4 mb-4">
                    <h1 className="text-center text-3xl text-palette-50">
                        Wir freuen uns von dir zu hören!
                    </h1>
                    <h2 className="text-center text-2xl mt-10 text-palette-50">
                        Dein direkter Draht zu uns
                    </h2>
                    <div className="flex justify-center p-4 relative">
                        <img src={ContactA} alt="contact us" className="hidden md:block bg-palette-50 w-80 h-60 absolute left-60 rounded-xl bottom-72 border-8 border-palette-60 "/>
                        <form
                            onSubmit={sendEmail}
                            className="bg-palette-80 border-4 border-palette-50 w-full md:w-2/4 md:h-full md:p-4 flex justify-center rounded-2xl shadow-outer"
                        >
                            <div className="">
                                <div className="m-6 flex justify-center">
                                    <input
                                        type="text"
                                        required
                                        className="input p-3 md:w-80 border-palette-50"
                                        placeholder="Name"
                                        name="from_name"
                                    />
                                </div>
                                <div className="m-6 flex justify-center">
                                    <input
                                        type="email"
                                        required
                                        className="input md:w-80 p-3 border-palette-50"
                                        placeholder="Email Adresse"
                                        name="reply_to"
                                    />
                                </div>
                                <div className="m-6 flex justify-center">
                                    <textarea
                                        type="text"
                                        required
                                        className="input w-11/12 p-3 border-palette-50"
                                        name="message"
                                        id=""
                                        cols={3}
                                        rows={10}
                                        placeholder="Tippe deine Nachricht hier... "
                                    ></textarea>
                                </div>

                                <div className="m-6 flex justify-center">
                                    <input
                                        type="submit"
                                        className="p-4 btn border-palette-60"
                                        value="abschicken"
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute bottom-10">
                                        {isOpen && (
                                            <ContactPopup
                                                content={
                                                    <>
                                                        <b>
                                                            Danke für deine
                                                            Nachricht!
                                                        </b>
                                                        <p>
                                                            Wir werden dein
                                                            Anliegen zeitnah
                                                            bearbeiten.
                                                        </p>
                                                    </>
                                                }
                                                handleClose={togglePopup}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </form>
                        <img src={ContactB} alt="contact us" className="hidden md:block bg-palette-40 w-80 h-60 absolute right-60 bottom-24 border-8 border-palette-60 rounded-xl" />
                    </div>
                </div>
            ) : (
                <>
                    <p>Login to contact us</p>
                    <Navigate replace to="/login" />
                </>
            )}
        </>
    );
};

export default ContactUs;
