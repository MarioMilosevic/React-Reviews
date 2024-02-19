const Employee = ({ firstPerson }) => {
  return (
    <>
      <article className="w-[560px] flex flex-col items-center justify-center border border-black">
        <img
          src={firstPerson.image}
          alt={firstPerson.image}
          className="h-[180px] w-[180px] object-cover mx-auto rounded-full"
        ></img>
        <h2 className="capitalize">{firstPerson.name}</h2>
        <h3 className="capitalize">{firstPerson.job}</h3>
        <p>{firstPerson.text}</p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <button>Surprise Me</button>
      </article>
    </>
  );
};

export default Employee;
