import emailjs from "emailjs-com";
import { useState } from "react";
import ContactPopup from "./ContactPopop";

const ContactUs = () => {
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
        <div className="bg-palette-60  p-4 ">
            <h1 className="text-center text-3xl text-palette-50">
                Wir freuen uns von dir zu hören!
            </h1>
            <h2 className="text-center text-2xl text-palette-50">
                Euer direkter Draht zu uns
            </h2>
            <div className="flex justify-center p-10">
                <form
                    onSubmit={sendEmail}

                    className="bg-palette-80 border-4 border-palette-50 md:w-2/4 md:h-full md:p-4 flex justify-center rounded-2xl shadow-outer"
                >
                    <div className="">
                        <div className="m-6">
                            <input
                                type="text"
                                required
                                className="w-96 h-10 p-4 rounded-full bg-palette-60 border-4 border-palette-50 shadow-inner outline-none"

                                placeholder="Name"
                                name="from_name"
                            />
                        </div>
                        <div className="m-6">
                            <input
                                type="email"
                                required

                                className="w-96 h-10 p-4 rounded-full bg-palette-60 shadow-inner outline-none border-4 border-palette-50"

                                placeholder="Email Adresse"
                                name="reply_to"
                            />
                        </div>
                        <div className="m-6">
                            <textarea
                                type="text"
                                required

                                className="w-96 h-60 p-4 rounded-2xl bg-palette-60 shadow-inner border-4 border-palette-50 outline-none"

                                name="message"
                                id=""
                                cols={3}
                                rows={10}
                                placeholder="Tippe deine Nachricht hier..."
                            ></textarea>
                        </div>

                        <div className="m-6">
                            <input
                                type="submit"
                                className="w-96 h-10 rounded-full bg-palette-50 text-palette-60 shadow-outer hover:bg-palette-60 hover:text-palette-50 hover:border-4 border-palette-50 hover:box-border active:shadow-inner"
                                value="abschicken"
                            />
                        </div>
                        <div className="relative">
                        <div className="absolute">
                            {isOpen && (
                                <ContactPopup
                                    content={
                                        <>
                                            <b>Danke für deine Nachricht!</b>
                                            <p>
                                                Wir werden dein Anliegen zeitnah
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
            </div>
        </div>
    );
};

export default ContactUs;
