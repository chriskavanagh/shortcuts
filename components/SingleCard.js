import styles from "./SingleCard.module.css";
import cover from "../public/img/cover.png";
import Image from "next/image";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className={styles.card}>
      <div className={flipped ? styles.flipped : ""}>
        <div className={styles.front}>
          <Image src={card.src} alt="front" width={120} height={120} />
        </div>
        <div className={styles.back} onClick={handleClick}>
          <Image src={cover} alt="back" width={120} height={120} />
        </div>
      </div>
    </div>
  );
}
