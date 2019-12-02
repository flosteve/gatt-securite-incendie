import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Seo from "../components/Seo/Seo"
import Layout from "../components/Layout/Layout"
import Parallax from "../components/Parallax/Parallax"
import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import Button from "../components/CustomButtons/Button.js"
import InfoArea from "../components/InfoArea/InfoArea.js"
import Img from "gatsby-image"
import scrollTo from "gatsby-plugin-smoothscroll"

import { makeStyles } from "@material-ui/core"
import presentationStyle from "../assets/jss/material-kit-pro-react/views/presentationStyle"

import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"
import classNames from "classnames"
import BuildIcon from "@material-ui/icons/Build"
import CreateIcon from "@material-ui/icons/Create"
import MapIcon from "@material-ui/icons/Map"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"
import SectionContacts from "../templates/SectionsPage/Sections/SectionContacts"

const useStyles = makeStyles(presentationStyle)

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomeBanner {
      site {
        siteMetadata {
          title
          description
        }
      }
      file(relativePath: { eq: "banner_home_gsi.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, maxHeight: 900, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      allFile(filter: { relativePath: { eq: "nos_offres.jpeg" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const classes = useStyles()

  return (
    <Layout>
      <Seo title="Accueil" />
      <Parallax
        image={data.file.childImageSharp.fluid.src}
        className="parallax home"
        filter="dark"
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>{data.site.siteMetadata.title}</h1>
                <h3 className={classes.title}>
                  {data.site.siteMetadata.description}
                </h3>
                <Button
                  size="lg"
                  color="danger"
                  startIcon={<LibraryBooksIcon />}
                  children={<span> Demandez Votre devis</span>}
                  onClick={() => scrollTo("#contact-home-gsi")}
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.features3}>
          <GridContainer className={classes.gridContainer}>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.phoneContainer}>
                <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h2>Nos Offres</h2>
              <InfoArea
                className={classes.infoArea}
                icon={BuildIcon}
                title="Installation & Maintenance"
                description="Nous vous proposons un accompagnement et des conseils adaptés à votre entreprise selon la réglementation."
                iconColor="danger"
              />
              <InfoArea
                className={classes.infoArea}
                icon={CreateIcon}
                title="Formation"
                description="Nous vous proposons des formations à jour et adaptée aux besoins de vos équipes."
                iconColor="danger"
              />
              <InfoArea
                className={classes.infoArea}
                icon={MapIcon}
                title="Plans"
                description="Nous vous proposons la conception de plans, tels que les plans d'évacuation."
                iconColor="danger"
              />
              <InfoArea
                className={classes.infoArea}
                icon={VerifiedUserIcon}
                title="Audit / Étude"
                description="Nous vous proposons d'auditer votre structure pour cibler les points d'amélioration"
                iconColor="danger"
              />
            </GridItem>
          </GridContainer>
        </div>
        <SectionContacts id="contact-home-gsi" />
      </div>
    </Layout>
  )
}

export default IndexPage
