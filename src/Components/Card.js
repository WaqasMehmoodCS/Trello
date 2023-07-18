import styles from "../Styles/Card.module.css";
import acc from "../Images/check-mark.png";
import rej from "../Images/close.png";
import i1 from "../Images/1.jpg";
import i2 from "../Images/2.jpg";
import i3 from "../Images/3.jpg";
import i4 from "../Images/4.jpg";

const Card = ({ team }) => {
  return (
    <>
      {team.map((person) => {
        return (
          <div
            className={styles.card}
            key={person.id}
            style={{ cursor: "move" }}
          >
            <div className={styles.designation}>{person.designation}</div>
            <hr />
            <div className={styles.intro}>
              <div className={styles.pic}>
                <img
                  src={person.image}
                  alt="pic"
                  className={styles.dp}
                  loading="lazy"
                />
              </div>
              <div className={styles.detail}>
                <div className={styles.name}>{person.name}</div>
                <p>{person.intro}</p>
              </div>
            </div>
            <hr />
            <div className={styles.icons}>
              <div className={styles.accepted}>
                <div className={styles.acc}>
                  <img
                    loading="lazy"
                    src={acc}
                    alt="check"
                    className={styles.icon}
                  />

                  <div className={styles.images}>
                    <img
                      loading="lazy"
                      src={i1}
                      alt="image1"
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.images}>
                    <img
                      loading="lazy"
                      src={i2}
                      alt="image2"
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.images}>
                    <img
                      loading="lazy"
                      src={i3}
                      alt="image3"
                      className={styles.image}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.rejected}>
                <div className={styles.acc}>
                  <img
                    loading="lazy"
                    src={rej}
                    alt="check"
                    className={styles.icon}
                  />
                  <div className={styles.images}>
                    <img
                      loading="lazy"
                      src={i4}
                      alt="image4"
                      className={styles.image}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
