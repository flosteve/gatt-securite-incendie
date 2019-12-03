import React from "react"

import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo/Seo"
import Parallax from "../../components/Parallax/Parallax"
import { makeStyles, Paper, Box } from "@material-ui/core"
import { graphql } from "gatsby"
import aboutUsStyle from "../../assets/jss/material-kit-pro-react/views/aboutUsStyle"
import classNames from "classnames"
import GridContainer from "../../components/Grid/GridContainer"
import GridItem from "../../components/Grid/GridItem"
import Card from "../../components/Card/Card.js"
import CardBody from "../../components/Card/CardBody.js"

import SectionContacts from "../../templates/SectionsPage/Sections/SectionContacts"
import Img from "gatsby-image"

import TrackChangesIcon from "@material-ui/icons/TrackChanges"
import SchoolIcon from "@material-ui/icons/School"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import AvTimerIcon from "@material-ui/icons/AvTimer"

const useStyles = makeStyles(aboutUsStyle)

const Audit = ({ data }) => {
  const classes = useStyles()
  return (
    <Layout>
      <Seo title={data.wpgraphql.formations.nodes[0].title} />
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
                    <Img
                      fluid={
                        data.wpgraphql.formations.nodes[0].formations
                          .imageFormation.imageFile.childImageSharp.fluid
                      }
                    />
                  </Paper>
                </GridItem>
                <GridItem
                  xs={12}
                  className={
                    classes.mlAuto + " formation-description " + classes.mrAuto
                  }
                >
                  <h2>{data.wpgraphql.formations.nodes[0].title}</h2>
                  {data.wpgraphql.formations.nodes[0].formations
                    .programmeTheorique && (
                    <Box>
                      <h3>Programme Théorique</h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            data.wpgraphql.formations.nodes[0].formations
                              .programmeTheorique,
                        }}
                      />
                    </Box>
                  )}
                  {data.wpgraphql.formations.nodes[0].formations
                    .programmePratique && (
                    <Box>
                      <h3>Programme Pratique</h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            data.wpgraphql.formations.nodes[0].formations
                              .programmePratique || "",
                        }}
                      />
                    </Box>
                  )}
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
                        {data.wpgraphql.formations.nodes[0].formations
                          .objectifs && (
                          <li>
                            <TrackChangesIcon />
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  data.wpgraphql.formations.nodes[0].formations
                                    .objectifs,
                              }}
                            />
                          </li>
                        )}
                        {data.wpgraphql.formations.nodes[0].formations
                          .pedagogie && (
                          <li>
                            <SchoolIcon />
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  data.wpgraphql.formations.nodes[0].formations
                                    .pedagogie,
                              }}
                            />
                          </li>
                        )}
                        {data.wpgraphql.formations.nodes[0].formations
                          .validation && (
                          <li>
                            <CheckCircleIcon />
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  data.wpgraphql.formations.nodes[0].formations
                                    .validation,
                              }}
                            />
                          </li>
                        )}
                        {data.wpgraphql.formations.nodes[0].formations
                          .duree && (
                          <li>
                            <AvTimerIcon />
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  data.wpgraphql.formations.nodes[0].formations
                                    .duree || "",
                              }}
                            />
                          </li>
                        )}
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

export const data = graphql`
  query SinglePostFormation($id: Int!) {
    file(relativePath: { eq: "formation.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 900, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    wpgraphql {
      formations(where: { id: $id }) {
        nodes {
          title
          slug
          formationId
          formations {
            duree
            fieldGroupName
            objectifs
            pedagogie
            programmePratique
            programmeTheorique
            validation
            imageFormation {
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(maxWidth: 1280, maxHeight: 900, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
