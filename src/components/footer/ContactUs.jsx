import emailjs from "emailjs-com";
import { useState } from "react";
import ContactPopup from "./ContactPopop";

const ContactUs = () => {
    const [isOpen, setIsOpen] = useState(false);

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
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-palette-50 h-max p-4">
            <h1 className="text-center text-3xl">
                Wir freuen uns von dir zu hören!
            </h1>
            <h2 className="text-center text-2xl">Euer direkter Draht zu uns</h2>
            <div className="flex justify-center p-10">
                <form
                    onSubmit={sendEmail}
                    className="bg-palette-60  md:w-2/4 md:h-full md:p-10 flex justify-center rounded-2xl"
                >
                    <div className=" ">
                        <div className="m-6">
                            <input
                                type="text"
                                className="w-96 h-10 p-2 rounded-full"
                                placeholder="Name"
                                name="from_name"
                            />
                        </div>
                        <div className="m-6">
                            <input
                                type="email"
                                className="w-96 h-10 p-2 rounded-full"
                                placeholder="Email Adresse"
                                name="reply_to"
                            />
                        </div>
                        <div className="m-6">
                            <textarea
                                className="w-96 h-60 p-2 rounded-2xl"
                                name="message"
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Tippe deine Nachricht hier..."
                            ></textarea>
                        </div>
                        <div className="m-6 relative">
                            <input
                                type="submit"
                                className="w-96 h-10 p-2 rounded-full bg-palette-70"
                                value="send message"
                                onClick={togglePopup}
                            />
                            <div className="absolute bottom-40"> 
                                {isOpen && (
                                    <ContactPopup
                                        content={
                                            <>
                                                <b>
                                                    Danke für deine Nachricht!
                                                </b>
                                                <p>
                                                    Wir werden dein Anliegen
                                                    zeitnah bearbeiten.
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
            </div>
        </div>
    );
};

export default ContactUs;
