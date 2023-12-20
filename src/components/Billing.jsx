import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

const Billing = () => (
  <section className={layout.sectionReverse}>
    <div
      className={`${layout.sectionImgReverse} flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <img
        src={bill}
        alt="Billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 w-[50%]  h-[50%] top-0 white__gradient rounded-full" />
      <div className="absolute z-[0] -left-1/2 w-[50%]  h-[50%] bottom-0 pink__gradient rounded-full" />
    </div>
    <div
      className={`${layout.sectionInfo} flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <h2 className={styles.heading2}>
        {" "}
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed amssa etiam. Mauris eu adipiscing ulrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex ${styles.flexCenter} flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="Google_play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
