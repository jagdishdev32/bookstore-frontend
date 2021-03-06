import { Link } from "react-router-dom";

const LinkButton = (props) => {
  return (
    <Link
      to={props.to}
      className={"btn btn-primary mx-2 px-4 py-2 mb-4 " + props.className}
      // className={
      //   "btn btn-primary mx-2 px-4 " + (props.className ? props.className : "")
      // }
      state={props.state}
    >
      {props.title}
    </Link>
  );
};

export default LinkButton;
