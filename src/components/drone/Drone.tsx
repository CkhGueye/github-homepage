import "./drone.scss";
import droneSrc from "../../assets/drone.webp";

export default function Drone() {
  return (
    <div className="drone">
      <img src={droneSrc} alt="drone" />
    </div>
  );
}
