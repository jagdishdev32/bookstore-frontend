const Card = (props) => {
  return (
    <div key={props.headKey}>
      <div
        className={
          "card shadow p-3 mb-5 pb-0 bg-body rounded " + props.mainClassName
        }
      >
        <div className={"card-body " + props.className}>
          {props.header ? (
            <>
              {/* If Header */}
              <p className="card-header text-secondary">{props.header}</p>
            </>
          ) : (
            <>{/* If not Header */}</>
          )}
          <div className="card-body text-dark">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
