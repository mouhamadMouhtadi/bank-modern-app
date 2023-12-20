import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => (
  <section id="CardDeal" className={layout.section}>
    <div
      className={`${layout.sectionInfo} flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6}`}
    >
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px]`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor . Aliquet ultries ac, ametau.
      </p>
      <Button styles="mt-10 rounde " />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} className="w-[100%] h-[100%] mr-16" />
    </div>
  </section>
);

export default CardDeal;
