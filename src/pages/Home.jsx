import coverImg from "../assets/hammer.png";
import Header from "../components/Header";
import "../css/Home.css";

const Home = () => {
  return (
    <div
      className="coverImg-wrapper"
      style={{ backgroundImage: `url(${coverImg})` }}
    >

      <div className="cover-items text-center">
        <h1 className="cover-text text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-400 to-purple-600 leading-[1.2] pb-1">
          OkO-Forge Development & Consulting
        </h1>


        <p className="cover-text text-xl text-gray-200">
          Solutions that WORK, Mentorship that INSPIRES!
        </p>
      </div>
    </div>
  );
};

export default Home;
