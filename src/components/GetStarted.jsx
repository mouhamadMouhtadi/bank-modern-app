import { arrowUp } from "../assets";
import styles from "../styles";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} cursor-pointer w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px]  `}
  >
    <div
      className={` ${styles.flexCenter} rounded-full flex-col hover:bg-primary transition-colors blur-[40px] hover:blur-none w-[100%] h-[100%]   `}
    >
      <div className={` ${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient mr-2">Get</span>
        </p>
        <img src={arrowUp} className="w-[23px] h-[23px] object-contain"></img>
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
