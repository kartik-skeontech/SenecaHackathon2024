import SampleImage from "../../../svgs/banner.jpg";
import Timer from "../../Timer/Timer";
import "../about.css";
import SponsersBanner from "./sponsersBanner";

const styles = {
  paperContainer: {
    backgroundImage: `url(${SampleImage})`,
    height: "100%",
    width: "100%",
  },
};

export default function HeaderBanner() {
  return (
    <div style={{ marginBottom: "3em" }}>
      <div id="head-banner">
        <img src={SampleImage} alt="Banner" />
        <div className="content">
          <h1 className="md:text-6xl">
            <strong>
              Housing <span className="text-my-red">Hackathon </span>
            </strong>
          </h1>
          <div style={{ width: "50%", margin: "auto" }}>
            <p className="md:text-lg" style={{ margin: "1em 0" }}>
              Elevate your skills, connect with industry experts, and transform
              your ideas into reality. Join the hackathon for a chance to win
              amazing prizes and contribute to shaping the future of the housing
              industry!
            </p>
          </div>
          <div className="button">
            <a
              // href={`https://registrations.senecahackathon.com/`}
              target="_blank"
              rel="noreferrer"
            >
              <button>Register Here</button>
            </a>
          </div>
          <div>
            <Timer />
          </div>
          <p className="md:text-lg">Registration closes on March 8th, 2024</p>
        </div>
      </div>
      <div className="bg-wh rounded-3xl overflow-hidden border border-gray-100 "></div>
      <SponsersBanner />
    </div>
  );
}
