import coverImg from "../assets/hammer.png";
import Header from "../components/Header";
import "../css/Home.css";

const Home = () => {
  return (
    <div
      className="coverImg-wrapper"
      style={{ backgroundImage: `url(${coverImg})` }}
    >
      <Header />
      <div className="cover-items">
        <h1 className="cover-text">OkO-Forge Development & Consulting</h1>
        <p className="cover-text">Solutions that WORK, Mentorship that INSPIRES!</p>
      </div>
    </div>
  );
};

export default Home;
