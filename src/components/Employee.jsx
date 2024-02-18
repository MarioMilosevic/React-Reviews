const Employee = ({ firstPerson }) => {
  console.log(firstPerson);
  return (
    <>
      <article className="w-[560px] border border-black">
        <img
          src={firstPerson.image}
          alt={firstPerson.image}
          className="rounded-full"
        ></img>
        <h2>{firstPerson.name}</h2>
        <h3>{firstPerson.job}</h3>
        <p>{firstPerson.text}</p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
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
