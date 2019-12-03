import React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import Parallax from "../components/Parallax/Parallax"
import { makeStyles, Tooltip } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import aboutUsStyle from "../assets/jss/material-kit-pro-react/views/aboutUsStyle"
import tooltipsStyle from "../assets/jss/material-kit-pro-react/tooltipsStyle.js"
import Button from "../components/CustomButtons/Button"
import classNames from "classnames"
import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import NavPills from "../components/NavPills/NavPills"
import SectionContacts from "../templates/SectionsPage/Sections/SectionContacts"
import GavelIcon from "@material-ui/icons/Gavel"

const useStyles = makeStyles(aboutUsStyle)
const useStyle2 = makeStyles(tooltipsStyle)

const Installation = () => {
  const data = useStaticQuery(graphql`
    query Installation {
      wpgraphql {
        pageBy(pageId: 299) {
          banniere {
            titreDeLaPage
            imageDeBanniere {
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
          contenu_page_prestation {
            paragrapheDeReglementation
            texteDuLienReglementation
          }
          contenu_page {
            titreDuParagraphe
            contenuDuParagraphe
          }
          type_equipements {
            tabsTypeEquipements {
              tabContent
              tabButton
            }
          }
        }
      }
    }
  `)

  const classes = useStyles()
  const classesToolTip = useStyle2()

  const formatTabs = tabsTypeEquipements => {
    const arrayTabs = []

    tabsTypeEquipements.map(tab => {
      const currentTab = {
        tabContent: (
          <div dangerouslySetInnerHTML={{ __html: tab.tabContent }} />
        ),
        tabButton: tab.tabButton,
      }
      arrayTabs.push(currentTab)
      return ""
    })
    return arrayTabs
  }

  return (
    <Layout>
      <Seo title={data.wpgraphql.pageBy.banniere.titreDeLaPage} />
      <Parallax
        image={
          data.wpgraphql.pageBy.banniere.imageDeBanniere.imageFile
            .childImageSharp.fluid.src
        }
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
              <h1 className={classes.title}>
                {data.wpgraphql.pageBy.banniere.titreDeLaPage}
              </h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer className="page-gsi">
            <GridItem xs={12} className={classes.mlAuto + " " + classes.mrAuto}>
              <h2>{data.wpgraphql.pageBy.contenu_page.titreDuParagraphe}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.wpgraphql.pageBy.contenu_page.contenuDuParagraphe,
                }}
              />
              <Tooltip
                title={
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        data.wpgraphql.pageBy.contenu_page_prestation
                          .paragrapheDeReglementation,
                    }}
                  />
                }
                placement="top"
                classes={{ tooltip: classesToolTip.tooltip }}
                className="page-tooltip"
              >
                <Button
                  color="danger"
                  children={
                    data.wpgraphql.pageBy.contenu_page_prestation
                      .texteDuLienReglementation
                  }
                  startIcon={<GavelIcon />}
                />
              </Tooltip>
            </GridItem>
            <GridItem xs={12} className={classes.mlAuto + " " + classes.mrAuto}>
              <h2>Type d'équipements</h2>
              <NavPills
                color="danger"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 5 },
                  contentGrid: { xs: 12, sm: 8, md: 7 },
                }}
                tabs={formatTabs(
                  data.wpgraphql.pageBy.type_equipements.tabsTypeEquipements
                )}
              />
            </GridItem>
          </GridContainer>
        </div>
        <SectionContacts />
      </div>
    </Layout>
  )
}

export default Installation
