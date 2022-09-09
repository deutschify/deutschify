const ContactPopup = props => {
    return (
      <div className="w-40 h-36 bg-palette-10 text-palette-90">
        <div className="">
          <span className="" onClick={props.handleClose}>x</span>
          {props.content}
        </div>
      </div>
    );
  };
   
  export default ContactPopup;