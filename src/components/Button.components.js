const Button = (props) => {
  return (
    <button
      type={props.type ? props.type : "submit"}
      // Old Design
      // className={"btn btn-primary mx-2 px-4 py-2 mb-4 " + props.className}
      className={
        "btn btn-primary mx-2 px-4 " + (props.className ? props.className : "")
      }
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
