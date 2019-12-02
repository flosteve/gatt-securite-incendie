import React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import Parallax from "../components/Parallax/Parallax"
import { makeStyles } from "@material-ui/core"
import { graphql, Link, useStaticQuery } from "gatsby"
import aboutUsStyle from "../assets/jss/material-kit-pro-react/views/aboutUsStyle"
import classNames from "classnames"
import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import SectionContacts from "../templates/SectionsPage/Sections/SectionContacts"
import Card from "../components/Card/Card"
import CardBody from "../components/Card/CardBody"
import Button from "../components/CustomButtons/Button"
import hydraulique from "../assets/img/hydraulique.png"
import evacuation from "../assets/img/evacuation.jpg"
import esi from "../assets/img/esi.jpeg"
import epi from "../assets/img/epi.jpg"
import manipulation from "../assets/img/extinguisher.jpg"
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"

const useStyles = makeStyles(aboutUsStyle)
const Formations = () => {
  const data = useStaticQuery(graphql`
    query Formation {
      site {
        siteMetadata {
          title
          description
        }
      }
      file(relativePath: { eq: "formation.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1280, maxHeight: 900, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const classes = useStyles()
  return (
    <Layout>
      <Seo title="Formations" />
      <Parallax
        image={data.file.childImageSharp.fluid.src}
        className="parallax"
        filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>Nos Formations</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer className="page-gsi formations">
            <GridItem xs={12} className={classes.mlAuto + " " + classes.mrAuto}>
              <h2>Les formations</h2>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card
                raised
                background
                style={{ backgroundImage: "url(" + hydraulique + ")" }}
              >
                <CardBody background>
                  <h6 className={classes.category}>Hydraulique</h6>
                  <Link to="/formations/hydraulique">
                    <h3 className={classes.cardTitle}>
                      La Formation Hydraulique
                    </h3>
                  </Link>
                  <p className={classes.category}>
                    <strong>Objectifs:</strong> Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Ad adipisci et illo maiores
                    nihil sunt. Ad omnis qui saepe vel.
                  </p>
                  <Link to={"/formations/hydraulique"}>
                    <Button round color="danger">
                      <LibraryBooksIcon /> Voir le détail
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card
                raised
                background
                style={{ backgroundImage: "url(" + evacuation + ")" }}
              >
                <CardBody background>
                  <h6 className={classes.category}>Évacuation</h6>
                  <Link to="/formations/evacuation">
                    <h3 className={classes.cardTitle}>
                      La Formation Évacuation
                    </h3>
                  </Link>
                  <p className={classes.category}>
                    <strong>Objectifs:</strong> Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Ad adipisci et illo maiores
                    nihil sunt. Ad omnis qui saepe vel.
                  </p>
                  <Link to={"/formations/evacuation"}>
                    <Button round color="danger">
                      <LibraryBooksIcon /> Voir le détail
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card
                raised
                background
                style={{ backgroundImage: "url(" + esi + ")" }}
              >
                <CardBody background>
                  <h6 className={classes.category}>ESI</h6>
                  <Link to="/formations/esi">
                    <h3 className={classes.cardTitle}>La Formation ESI</h3>
                  </Link>
                  <p className={classes.category}>
                    <strong>Objectifs:</strong> Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Ad adipisci et illo maiores
                    nihil sunt. Ad omnis qui saepe vel.
                  </p>
                  <Link to={"/formations/esi"}>
                    <Button round color="danger">
                      <LibraryBooksIcon /> Voir le détail
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card
                raised
                background
                style={{ backgroundImage: "url(" + epi + ")" }}
              >
                <CardBody background>
                  <h6 className={classes.category}>EPI</h6>
                  <Link to="/formations/epi">
                    <h3 className={classes.cardTitle}>La Formation EPI</h3>
                  </Link>
                  <p className={classes.category}>
                    <strong>Objectifs:</strong> Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Ad adipisci et illo maiores
                    nihil sunt. Ad omnis qui saepe vel.
                  </p>
                  <Link to={"/formations/epi"}>
                    <Button round color="danger">
                      <LibraryBooksIcon /> Voir le détail
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <Card
                raised
                background
                style={{ backgroundImage: "url(" + manipulation + ")" }}
              >
                <CardBody background>
                  <h6 className={classes.category}>Extincteur</h6>
                  <Link to="/formations/manipulation-extincteur">
                    <h3 className={classes.cardTitle}>
                      La Formation manipulation des extincteurs
                    </h3>
                  </Link>
                  <p className={classes.category}>
                    <strong>Objectifs:</strong> Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Ad adipisci et illo maiores
                    nihil sunt. Ad omnis qui saepe vel.
                  </p>
                  <Link to={"/formations/manipulation-extincteur"}>
                    <Button round color="danger">
                      <LibraryBooksIcon /> Voir le détail
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <SectionContacts />
      </div>
    </Layout>
  )
}

export default Formations
