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
      #      site {
      #        siteMetadata {
      #          title
      #          description
      #        }
      #      }
      #      allFile(filter: { relativePath: { eq: "nos_offres.jpeg" } }) {
      #        edges {
      #          node {
      #            childImageSharp {
      #              fluid(maxWidth: 1600, maxHeight: 1200, quality: 100) {
      #                ...GatsbyImageSharpFluid_withWebp_tracedSVG
      #              }
      #            }
      #          }
      #        }
      #      }
      wpgraphql {
        pageBy(pageId: 65) {
          bannerHomePage {
            titrePrincipal
            boutonDemandeDevis
            slogan
            imageBanniere {
              imageFile {
                childImageSharp {
                  fluid(maxWidth: 1600, maxHeight: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              sourceUrl
            }
            sectionNosOffres {
              titre
              image {
                imageFile {
                  childImageSharp {
                    fluid(maxWidth: 1600, maxHeight: 1200, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
                sourceUrl
              }
              lesOffres {
                descriptif
                titre
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
      {data.wpgraphql.pageBy.bannerHomePage.imageBanniere.imageFile
        .childImageSharp && (
        <Parallax
          image={
            data.wpgraphql.pageBy.bannerHomePage.imageBanniere.imageFile
              .childImageSharp.fluid.src
          }
          className="parallax home"
          filter="dark"
        >
          <div className={classes.container}>
            <GridContainer>
              {data.wpgraphql.pageBy.bannerHomePage && (
                <GridItem>
                  <div className={classes.brand}>
                    <h1>
                      {data.wpgraphql.pageBy.bannerHomePage.titrePrincipal}
                    </h1>
                    <h3 className={classes.title}>
                      {data.wpgraphql.pageBy.bannerHomePage.slogan}
                    </h3>
                    <Button
                      size="lg"
                      color="danger"
                      startIcon={<LibraryBooksIcon />}
                      children={
                        <span>
                          {" "}
                          {
                            data.wpgraphql.pageBy.bannerHomePage
                              .boutonDemandeDevis
                          }
                        </span>
                      }
                      onClick={() => scrollTo("#contact-home-gsi")}
                    />
                  </div>
                </GridItem>
              )}
            </GridContainer>
          </div>
        </Parallax>
      )}

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.features3}>
          <GridContainer className={classes.gridContainer}>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.phoneContainer}>
                <Img
                  fluid={
                    data.wpgraphql.pageBy.bannerHomePage.sectionNosOffres.image
                      .imageFile.childImageSharp.fluid
                  }
                />
              </div>
            </GridItem>
            {data.wpgraphql.pageBy.bannerHomePage.sectionNosOffres && (
              <GridItem xs={12} sm={12} md={6}>
                <h2>
                  {data.wpgraphql.pageBy.bannerHomePage.sectionNosOffres.titre}
                </h2>
                <InfoArea
                  className={classes.infoArea}
                  icon={BuildIcon}
                  title={
                    data.wpgraphql.pageBy.bannerHomePage.sectionNosOffres
                      .lesOffres[0].titre
                  }
                  description={
                    data.wpgraphql.pageBy.bannerHomePage.sectionNosOffres
                      .lesOffres[0].descriptif
                  }
                  iconColor="danger"
                />
                <InfoArea
                  className={classes.infoArea}
                  icon={CreateIcon}
                  title={
                    data.wpgraphql.pageBy.bannerHomePage.sectionNosOffres
                      .lesOffres[1].titre
                  }
                  description={
                    data.wpgraphql.pageBy.bannerHomePage.sectionNosOffres
                      .lesOffres[1].descriptif
                  }
                  iconColor="danger"
                />
                <InfoArea
                  className={classes.infoArea}
                  icon={MapIcon}
                  title={
                    data.wpgraphql.pageBy.bannerHomePage.sectionNosOffres
                      .lesOffres[2].titre
                  }
                  description={
                    data.wpgraphql.pageBy.bannerHomePage.sectionNosOffres
                      .lesOffres[2].descriptif
                  }
                  iconColor="danger"
                />
                <InfoArea
                  className={classes.infoArea}
                  icon={VerifiedUserIcon}
                  title={
                    data.wpgraphql.pageBy.bannerHomePage.sectionNosOffres
                      .lesOffres[3].titre
                  }
                  description={
                    data.wpgraphql.pageBy.bannerHomePage.sectionNosOffres
                      .lesOffres[3].descriptif
                  }
                  iconColor="danger"
                />
              </GridItem>
            )}
          </GridContainer>
        </div>
        <SectionContacts id="contact-home-gsi" />
      </div>
    </Layout>
  )
}

export default IndexPage
