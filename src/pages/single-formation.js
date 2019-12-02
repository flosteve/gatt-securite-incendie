import React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import Parallax from "../components/Parallax/Parallax"
import { makeStyles, Paper } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import aboutUsStyle from "../assets/jss/material-kit-pro-react/views/aboutUsStyle"
import classNames from "classnames"
import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import Card from "../components/Card/Card.js"
import CardBody from "../components/Card/CardBody.js"

import SectionContacts from "../templates/SectionsPage/Sections/SectionContacts"
import Img from "gatsby-image"

const useStyles = makeStyles(aboutUsStyle)
const Audit = () => {
  const data = useStaticQuery(graphql`
    query SingleFormation {
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
      <Seo title="Single Formation" />
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
              <h1 className={classes.title}>Descriptif de la formation</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer className="page-gsi" spacing={4}>
            <GridItem item xs={12} md={8}>
              <GridContainer>
                <GridItem xs={12}>
                  <Paper elevation={20}>
                    <Img fluid={data.file.childImageSharp.fluid} />
                  </Paper>
                </GridItem>
                <GridItem
                  xs={12}
                  className={
                    classes.mlAuto + " formation-description " + classes.mrAuto
                  }
                >
                  <h2>Titre de la formation</h2>
                  <p>
                    PROGRAMME THÉORIQUE: – La réglementation – Le feu : causes
                    et conséquences d’un incendie – Le triangle du feu – Les
                    classes de feux – L’alarme – Information sur vos consignes
                    de sécurité interne – Les différents types d’extincteurs et
                    leurs rôles – L’effet des produits extincteurs sur un feu –
                    Les règles de sécurité sur les extincteurs – Distance
                    d’attaque du feu PROGRAMME PRATIQUE: Apprentissage de
                    l’extinction de divers feux par la mise en situation.
                  </p>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem item xs={12} md={4}>
              <GridContainer>
                <GridItem xs={12}>
                  <Card pricing raised className="formation-features">
                    <CardBody pricing>
                      <h3 className={classes.cardDescription}>
                        Caractéristiques
                      </h3>
                      <ul>
                        <li>
                          <b>Objectifs: </b>
                          Permettre à l’ensemble du personnel de manipuler les
                          extincteurs à feu
                        </li>
                        <li>
                          <b>Pédagogie: </b> La méthode utilisée est basée
                          essentiellement sur le visuel et la mémoire, avec la
                          remise d’un support pédagogique spécifique.
                        </li>
                        <li>
                          <b>Validation: </b> Attestation de formation
                        </li>
                        <li>
                          <b>Durée: </b> De 2 heures à 1/2 journée suivant le
                          nombre de participants
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
        <SectionContacts id="contact-home-gsi" />
      </div>
    </Layout>
  )
}

export default Audit
