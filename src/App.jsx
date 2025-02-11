import "./App.css";
import { FaCircle } from "react-icons/fa";
import Avatar from "./components/avatar";
import InfoContact from "./components/infoContact";
import Title from "./components/title";
import Skill from "./components/skill";
import BoxHobbies from "./components/boxHobbies";
import UserName from "./components/userName";
import CareerObjective from "./components/careerObjective";
import Education from "./components/education";
import WorkExperience from "./components/workExperience";
import Project from "./components/project";
import PersonalQualities from "./components/personalQualities";

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-300 p-5">
        <div className="relative w-[794px] h-[1123px] bg-white shadow-2xl rounded-md border border-gray-400 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-gray-100 opacity-30 pointer-events-none"></div>
          <div className="cv-container flex h-full">
            <div className="w-[70px] h-full bg-[#696969]">
              <div className="flex flex-col gap-20 mt-8 ml-4">
                <div>
                  <FaCircle className="text-white text-2xl" />
                </div>
                <div>
                  <FaCircle className="text-white text-2xl" />
                </div>
                <div>
                  <FaCircle className="text-white text-2xl" />
                </div>
                <div>
                  <FaCircle className="text-white text-2xl" />
                </div>
                <div>
                  <FaCircle className="text-white text-2xl" />
                </div>
                <div>
                  <FaCircle className="text-white text-2xl" />
                </div>
                <div>
                  <FaCircle className="text-white text-2xl" />
                </div>
                <div>
                  <FaCircle className="text-white text-2xl" />
                </div>
                <div>
                  <FaCircle className="text-white text-2xl" />
                </div>
                <div>
                  <FaCircle className="text-white text-2xl" />
                </div>
                <div>
                  <FaCircle className="text-white text-2xl" />
                </div>
              </div>
            </div>
            <div className="w-full h-full">
              <div className="grid grid-cols-12 gap-4 h-full">
                <div className="col-span-4  p-4">
                  <Avatar />
                  <div className="mt-4 space-y-4">
                    <InfoContact title="Phone Number" value="0342925377" />
                    <InfoContact
                      title="Email"
                      value="tranthang0369@gmail.com"
                    />
                    <InfoContact title="Address" value="Thu Duc City" />
                    <InfoContact title="Day of birth" value="06/06/2002" />
                    <hr className="border-t-2 border-gray-400 w-full mt-4" />
                  </div>
                  <div className="mt-4">
                    <Title title="Skill" />
                    <div className="flex justify-center items-center mt-2 ">
                      <div className="w-[300px] space-y-4 bg-white">
                        <Skill skill="Javascript" level={80} />
                        <Skill skill="ReactJS" level={70} />
                        <Skill skill="NodeJS" level={75} />
                        <Skill skill="TypeScript" level={50} />
                        <Skill skill="Tailwind" level={85} />
                        <Skill skill="NextJS" level={40} />
                      </div>
                    </div>
                    <hr className="border-t-2 border-gray-400 w-full mt-6" />
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-center items-center">
                      <div className="w-full bg-white ">
                        <Title title="Hobbies" />
                        <BoxHobbies />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-8  p-4">
                  <div className="flex justify-center mt-4">
                    <UserName />
                  </div>
                  <div className="mt-6">
                    <p className="text-center font-medium italic text-gray-700">
                      Alumnus of University of Transport and{" "}
                    </p>
                    <p className="text-center  font-medium italic text-gray-700">
                      Communications, Faculty of Information Technology.
                    </p>
                  </div>
                  <div className="mt-4">
                    <CareerObjective />
                    <hr className="border-t-2 border-gray-400 w-full mt-4" />
                  </div>
                  <div className="mt-4">
                    <Education />
                    <WorkExperience />
                    <Project />
                    <hr className="border-t-2 border-gray-400 w-full mt-4" />
                  </div>
                  <div className="mt-4">
                    <PersonalQualities />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
