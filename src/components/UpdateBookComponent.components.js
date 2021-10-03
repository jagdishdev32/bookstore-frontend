const UpdateBookComponent = (props) => {
  return (
    <>
      <h1>Update Book Component</h1>
      {props.children}
      <h2>{props.book.name}</h2>
    </>
  );
};

export default UpdateBookComponent;
