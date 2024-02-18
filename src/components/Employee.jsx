const Employee = (props) => {
  return (
    <>
      <article>
        <img src={props.img} alt={props.img}></img>
        <h2>{props.name}</h2>
        <h3>{props.job}</h3>
        <p>{props.text}</p>
      </article>
    </>
  );
};

export default Employee;
