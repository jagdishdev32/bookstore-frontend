const HeadWithSearch = (props) => {
  return (
    <div className="books-head flex d-flex justify-content-between ">
      <h1>{props.title}</h1>
      <div className="search">
        <input
          type="search"
          className="form-control inline mr-sm-2"
          // className="d-inline-flex p-2 my-1"
          placeholder={props.placeholder ? props.placeholder : "Search"}
          onChange={props.onChange}
        />
      </div>
      {props.children}
    </div>
  );
};

export default HeadWithSearch;
