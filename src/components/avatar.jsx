import image from "../assets/avatar.jpg";

const Avatar = () => {
  return (
    <div className="w-48 h-48 overflow-hidden rounded-full border-4 border-gray-500 shadow-xl mt-6 ml-[10px]">
      <img src={image} alt="avatar" className="w-full h-full object-cover" />
    </div>
  );
};

export default Avatar;
