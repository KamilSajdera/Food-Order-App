import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import classes from "./HomeInfoDetails.module.css";

const HomeInfoDetails = (props) => {
  const { optionNr } = props;

  const titles = [
    "About Us", 
    "Location",
    "Socials",
    "Info"
  ]

  const infoContents = [
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. <br /> <br />
      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
      molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
      eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
      zzril delenit augue duis dolore te feugait nulla facilisi.
    </p>,
    <p>
      <FontAwesomeIcon icon={faLocationDot} style={{ paddingRight: "7px" }} />
      Warsaw, Nowhere 14a <br /> <br />
      Open from <b>14:00</b> to <b>23:00</b>
    </p>,
    <div>
      <p>Facebook</p>
      <p>Instagram</p>
      <p>Tiktok</p>
    </div>,
    <p>
      Graphic design isn't mine. I was guided by the appearance of this{" "}
      <a
        href="https://dribbble.com/shots/14408728-Point-of-Sale-System-App-Design?"
        target="_blank"
        rel="noreferrer"
      >
        template.
      </a>
      <br />
      <br />
      However, many of elements I came up with it myself. Code and
      implementation is in 100% mine.
    </p>,
  ];

  return (
    <div className={classes.infoOverlay} onClick={() => props.onClose()}>
      <div
        className={classes.infoContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes["info-title"]}>{titles[optionNr]}</div>
        <div className={classes["info-content"]}>{infoContents[optionNr]}</div>
      </div>
    </div>
  );
};

export default HomeInfoDetails;
