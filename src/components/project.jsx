import Title from "./title";

const projects = [
  {
    id: 0,
    name: "Medical Booking Website",
    technologies: "ReactJS, NodeJS, Tailwind CSS, MySQL.",
    link: "https://bit.ly/scheduleHealths",
  },
  {
    id: 1,
    name: "Book Management Website",
    technologies: "ReactJS, NodeJS, Tailwind CSS, MySQL.",
    link: "https://bit.ly/petservice-github",
  },
  {
    id: 2,
    name: "Pet Service Website",
    technologies: "ReactJS, NodeJS, Ant Design, MySQL.",
    link: "https://bit.ly/petservice-github",
  },
  {
    id: 3,
    name: "Portfolio",
    technologies: "TypeScripJS, NodeJS, Ant Design, MySQL.",
    link: "https://2tdev.io.vn/",
  },
];

const project = () => {
  return (
    <div className="mt-2">
      <Title title="Project" />
      {projects &&
        projects.length > 0 &&
        projects.map((items) => {
          return (
            <div key={items.id}>
              <p className="font-bold">- {items.name}</p>
              <ul className="list-disc pl-5">
                <li>
                  <strong className="mr-1">Technologies:</strong>
                  {items.technologies}
                </li>
                <li>
                  Github:
                  <a
                    href={items.link}
                    className="text-blue-500 underline ml-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {items.link}
                  </a>
                </li>
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default project;
