import { useEffect, useMemo, useRef, useState } from "react";
import classes from "./HomePage.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faUserGroup,
  faComment,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  const messages = useMemo(
    () => [
      "Fresh products every day",
      "High quality ingredients",
      "Careful preparation of the meal",
    ],
    []
  );

  const [displayingMessage, setDisplayingMessage] = useState(messages[0]);
  let number = useRef(0);
  let h1ref = useRef();

  useEffect(() => {
    let timeout;
    let interval = setInterval(() => {
      if (number.current++ > 1) number.current = 0;
      setDisplayingMessage(messages[number.current]);
      h1ref.current.classList.add(classes.showMessage);

      timeout = setTimeout(() => {
        h1ref.current.classList.remove(classes.showMessage);
      }, 500);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [messages]);

  return (
    <>
      <section className={classes.homeBanner}>
        <h1 ref={h1ref}>{displayingMessage}</h1>
      </section>
      <div className={classes.homeInfoSection}>
        <div className={classes["info-item"]}>
          <FontAwesomeIcon icon={faUserGroup} />
          <p>about us</p>
        </div>
        <div className={classes["info-item"]} style={{ background: "#ffca40" }}>
          <FontAwesomeIcon icon={faLocationDot} />
          <p>our address</p>
        </div>
        <div className={classes["info-item"]}>
          <FontAwesomeIcon icon={faComment} />
          <p>socials</p>
        </div>
        <div className={classes["info-item"]} style={{ background: "#ffca40" }}>
          <FontAwesomeIcon icon={faCircleInfo} />
          <p>info</p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
