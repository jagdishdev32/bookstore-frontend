const Button = (props) => {
  return (
    <button
      type={props.type ? props.type : "submit"}
      className={"btn btn-primary " + (props.className ? props.className : "")}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
