import Title from "./title";
const project = () => {
  return (
    <div>
      <Title title="Project" />
      <div>
        <p>- Website for managing medical appointment bookings.</p>
        <ul className="list-disc pl-5">
          <li>
            Github:
            <a
              href="https://github.com/thang2642002/MedicalBookings"
              className="text-blue-500 underline ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/thang2642002/MedicalBookings
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>- Website for managing the sale of books and office supplies.</p>
        <ul className="list-disc pl-5">
          <li>
            Github:
            <a
              href="https://github.com/thang2642002/BookManagement"
              className="text-blue-500 underline ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/thang2642002/BookManagement
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>
          - Website for managing service bookings and selling pet-related
          products and pets.
        </p>
        <ul className="list-disc pl-5">
          <li>
            Github:
            <a
              href="https://github.com/thang2642002/PetService"
              className="text-blue-500 underline ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/thang2642002/PetService
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default project;
