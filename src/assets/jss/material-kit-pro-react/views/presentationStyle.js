import {
  container,
  title,
  main,
  whiteColor,
  grayColor,
  mainRaised,
  hexToRgb,
} from "../../material-kit-pro-react.js"
import footerStyle from "../../material-kit-pro-react/views/componentsSections/footerStyle.js"

const presentationStyle = {
  ...footerStyle,
  main: {
    ...main,
    /*overflow: "hidden"*/
  },
  mainRaised,
  parallax: {
    height: "90vh",
    overflow: "hidden",
  },
  container: {
    ...container,
    zIndex: 1,
  },
  title: {
    ...title,
    color: whiteColor,
  },
  brand: {
    color: whiteColor,
    textAlign: "center",
    "& h1": {
      fontSize: "4.2rem",
      fontWeight: "600",
      display: "inline-block",
      position: "relative",
      textTransform: "uppercase",
    },
  },
  proBadge: {
    position: "relative",
    fontSize: "22px",
    textTransform: "uppercase",
    fontWeight: "700",
    right: "-10px",
    padding: "10px 18px",
    top: "-30px",
    background: whiteColor,
    borderRadius: "3px",
    color: grayColor[18],
    lineHeight: "22px",
    boxShadow: "0 5px 5px -2px rgba(" + hexToRgb(grayColor[25]) + ",.4)",
  },
  features3: {
    padding: "80px 0",
    "& $phoneContainer": {
      // maxWidth: "220px",
      margin: "0 auto",
      padding: "0 20px",
    },
  },
  phoneContainer: {
    "& img": {
      width: "100%",
    },
  },
  infoArea: {
    maxWidth: "none",
    margin: "0 auto",
    padding: "10px 0 0px",
  },
  gridContainer: {
    marginRight: 0,
    marginLeft: 0,
  },
}

export default presentationStyle
