import { useNavigate } from "react-router-dom";
import coverImg from "../assets/hammer.png";
import "../css/Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="coverImg-wrapper"
      style={{ backgroundImage: `url(${coverImg})` }}
    >
      <div className="cover-items text-center px-4">
        {/* Title */}
        <h1 className="leading-tight mb-4">
          OkO-Forge Development & Consulting
        </h1>

        {/* Motto with Background Card */}
        <div className="motto-card mx-auto mt-4 mb-8 p-4 rounded-lg shadow-lg">
          <p className="text-lg sm:text-xl text-gray-100 font-semibold italic">
            "Solutions that WORK, Mentorship that INSPIRES!"
          </p>
        </div>

        {/* Info Card */}
        <div className="card mt-8 max-w-md mx-auto">
          <p className="text-gray-300 text-lg">
            Contact us to bring your ideas to life with cutting-edge web
            development solutions!
          </p>
          <button
            className="button mt-4"
            onClick={() => navigate("/contact")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
