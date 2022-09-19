import react from "react";

const ContactPopup = (props) => {
    return (
        <div className="flex justify-center ">
            <div
                className="w-fit h-fit flex justify-center gap-20 bg-palette-50 flex-col text-palette-60 text-center text-3xl p-8 rounded-xl border-8 border-palette-60 -mt-96 z-20"
                onClick={props.handleClose}
            >
                {props.content}
            </div>
        </div>
    );
};

export default ContactPopup;
