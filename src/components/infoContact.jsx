const infoContact = ({ title, value }) => {
  return (
    <div>
      <p className="font-bold">{title}</p>
      <p className="text-gray-500 font-medium">{value}</p>
    </div>
  );
};

export default infoContact;
