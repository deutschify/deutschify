const ContactPopup = (props) => {
    return (
        <div className="z-10 flex justify-center">
            <div className="w-11/12 h-36 bg-palette-10/75 text-palette-50 text-center p-8 rounded-xl border-8 border-palette-70" onClick={props.handleClose}>
          
                    {props.content}
               
            </div>
        </div>
    );
};

export default ContactPopup;
