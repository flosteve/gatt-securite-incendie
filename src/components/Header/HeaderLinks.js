/* eslint-disable */
import React from "react"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// react components for routing our app without refresh
import { Link } from "gatsby"

// @material-ui/core components
import { List, ListItem, makeStyles } from "@material-ui/core"

// @material-ui/icons
import Apps from "@material-ui/icons/Apps"
import HomeIcon from "@material-ui/icons/Home"
import BusinessIcon from "@material-ui/icons/Business"
import Layers from "@material-ui/icons/Layers"
import LineStyle from "@material-ui/icons/LineStyle"
import EmailIcon from "@material-ui/icons/Email"

// core components
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js"

import styles from "../../assets/jss/material-kit-pro-react/components/headerLinksStyle.js"

const useStyles = makeStyles(styles)

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      )
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault()
        var targetScroll = document.getElementById(target)
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250)
      }
    }
  }
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20

    var animateScroll = function() {
      currentTime += increment
      var val = easeInOutQuad(currentTime, start, change, duration)
      element.scrollTop = val
      if (currentTime < duration) {
        setTimeout(animateScroll, increment)
      }
    }
    animateScroll()
  }
  var onClickSections = {}

  const { dropdownHoverColor } = props
  const classes = useStyles()
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Link to={"/"} className={classes.navLink}>
          <HomeIcon />
          Accueil
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Prestations"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/installation" className={classes.dropdownLink}>
              <LineStyle className={classes.dropdownIcons} /> Installation /
              Maintenance
            </Link>,
            <Link to="/formations" className={classes.dropdownLink}>
              <Layers className={classes.dropdownIcons} />
              Formations
            </Link>,
            <Link to="/signaletiques" className={classes.dropdownLink}>
              <Layers className={classes.dropdownIcons} />
              Signalétiques
            </Link>,
            <Link to="/audit" className={classes.dropdownLink}>
              <Layers className={classes.dropdownIcons} />
              Audit / Étude
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={"/entreprise"} className={classes.navLink}>
          <BusinessIcon />
          Entreprise
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={"/contact"} className={classes.navLink}>
          <EmailIcon />
          Contact
        </Link>
      </ListItem>
    </List>
  )
}

HeaderLinks.defaultProps = {
  hoverColor: "primary",
}

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
}
