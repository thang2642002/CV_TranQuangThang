import Title from "./title";
const workExperience = () => {
  return (
    <div>
      <h2 className="font-bold text-xl">Work Experience</h2>
      <div>
        <p>April 2022 – October 2022.</p>
        <Title title="Ocean it company" />
        <p>Position: Intern</p>
        <ul className="list-disc pl-5">
          <li>Assisted with equipment installation.</li>
          <li>Learned and assisted in creating weekly schedules.</li>
        </ul>
      </div>
    </div>
  );
};

export default workExperience;
