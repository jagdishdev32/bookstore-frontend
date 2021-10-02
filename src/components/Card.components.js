const Card = (props) => {
  return (
    <div key={props.headKey}>
      <div className="card shadow p-3 mb-5 pb-0 bg-body rounded">
        <div className="card-body">
          <p className="card-header">{props.header}</p>
          <div className="card-body text-dark">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
