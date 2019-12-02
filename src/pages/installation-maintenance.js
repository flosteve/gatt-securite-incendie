import React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import Parallax from "../components/Parallax/Parallax"
import { makeStyles } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import aboutUsStyle from "../assets/jss/material-kit-pro-react/views/aboutUsStyle"
import classNames from "classnames"
import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import NavPills from "../components/NavPills/NavPills"
import SectionContacts from "../templates/SectionsPage/Sections/SectionContacts"

const useStyles = makeStyles(aboutUsStyle)
const Installation = () => {
  const data = useStaticQuery(graphql`
    query Installation {
      site {
        siteMetadata {
          title
          description
        }
      }
      file(relativePath: { eq: "ria.jpeg" }) {
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
      <Seo title="Installation" />
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
              <h1 className={classes.title}>Installation & Maintenance</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer className="page-gsi">
            <GridItem xs={12} className={classes.mlAuto + " " + classes.mrAuto}>
              <h2>Ce que nous proposons</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                aut beatae consequatur debitis dolor dolorum est eum ex facere
                fugit harum impedit in iure magnam molestias natus officia porro
                quae quisquam quod repellendus sequi similique sint sunt
                suscipit temporibus, tenetur vel velit voluptate voluptatum?
                Doloremque illum ipsum laudantium possimus quos ullam, velit
                voluptas! Adipisci, asperiores deserunt ducimus fugit maxime
                minus neque praesentium quis rerum totam. Aliquid fugit placeat
                quis suscipit veritatis! Culpa optio quia quidem voluptatum? Aut
                porro qui repudiandae suscipit. Cum ducimus minima voluptates.
              </p>
              <h2>Pourquoi</h2>
              <p>
                Art. R4224-17 : « Les installations et dispositifs techniques et
                de sécurité des lieux de travail sont entretenus et vérifiés
                suivant une périodicité appropriée. Toute défectuosité
                susceptible d’affecter la santé et la sécurité des travailleurs
                est éliminée le plus rapidement possible. » Nous vous proposons
                un accompagnement et des conseils adaptés à votre entreprise
                selon la réglementation.
              </p>
            </GridItem>
            <GridItem xs={12} className={classes.mlAuto + " " + classes.mrAuto}>
              <h2>Type d'équipements</h2>
              <NavPills
                color="danger"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 5 },
                  contentGrid: { xs: 12, sm: 8, md: 7 },
                }}
                tabs={[
                  {
                    tabButton: "Extincteur",
                    tabContent: (
                      <p>
                        Art R.4227-39 : « Les chefs d’établissement doivent
                        prendre les mesures nécessaires pour que tout
                        commencement d’incendie puisse être rapidement et
                        efficacement combattu dans l’intérêt du sauvetage du
                        personnel. (…) Il y a au moins un extincteur portatif à
                        eau pulvérisée de 6 litres au minimum pour 200 mètres
                        carrés de plancher, avec un minimum d’un appareil par
                        niveau. Lorsque les locaux présentent des risques
                        d’incendie particuliers, notamment des risques
                        électriques, ils doivent être dotés d’extincteurs dont
                        le nombre et le type sont appropriés aux risques. » (cf.
                        code du travail sur Légifrance)
                      </p>
                    ),
                  },
                  {
                    tabButton: "Trappe de désenfumage",
                    tabContent: (
                      <p>
                        Art R4216-13 : «Les locaux de plus de 300 mètres carrés
                        situés en rez-de-chaussée et en étage, les locaux de
                        plus de 100 mètres carrés aveugles et ceux situés en
                        sous-sol ainsi que tous les escaliers comportent un
                        dispositif de désenfumage naturel ou mécanique. » (cf.
                        code du travail sur Légifrance)
                      </p>
                    ),
                  },
                  {
                    tabButton: "BAES",
                    tabContent: (
                      <p>
                        L’éclairage de sécurité doit : ― assurer l’éclairage
                        d’évacuation ; ― assurer l’éclairage d’ambiance ou
                        antipanique ; ― permettre la mise en œuvre des mesures
                        de sécurité et l’intervention éventuelle des secours.
                        (cf. code du travail sur Légifrance)
                      </p>
                    ),
                  },
                  {
                    tabButton: "Signalisation",
                    tabContent: (
                      <p>
                        Art. R4227-37 : « (…)une consigne de sécurité incendie
                        est établie et affichée de manière très apparente : 1°
                        Dans chaque local pour les locaux dont l’effectif est
                        supérieur à cinq personnes et pour les locaux mentionnés
                        à l’article R. 4227-24 ; 2° Dans chaque local ou dans
                        chaque dégagement desservant un groupe de locaux dans
                        les autres cas. (…) » (cf. code du travail sur
                        Légifrance)
                      </p>
                    ),
                  },
                  {
                    tabButton: "Poteaux Incendie",
                    tabContent: (
                      <p>
                        La consigne de sécurité incendie prévoit des essais et
                        visites périodiques du matériel et des exercices au
                        cours desquels les travailleurs apprennent à reconnaître
                        les caractéristiques du signal sonore d’alarme générale,
                        à se servir des moyens de premier secours et à exécuter
                        les diverses manœuvres nécessaires. Ces exercices et
                        essais périodiques ont lieu au moins tous les six mois.
                        Leur date et les observations auxquelles ils peuvent
                        avoir donné lieu sont consignées sur un registre tenu à
                        la disposition de l’inspection du travail. (cf. code du
                        travail sur Légifrance)
                      </p>
                    ),
                  },
                  {
                    tabButton: "RIA",
                    tabContent: (
                      <p>
                        Art. R4227-17 : « Les installations et dispositifs
                        techniques et de sécurité des lieux de travail sont
                        entretenus et vérifiés suivant une périodicité
                        appropriée. Toute défectuosité susceptible d’affecter la
                        santé et la sécurité des travailleurs est éliminée le
                        plus rapidement possible. » (cf. code du travail sur
                        Légifrance)
                      </p>
                    ),
                  },
                  {
                    tabButton: "Porte coupe-Feu",
                    tabContent: (
                      <p>
                        Art. R4224-12 : « Les portes et portails sont entretenus
                        et contrôlés régulièrement. » (cf. code du travail sur
                        Légifrance)
                      </p>
                    ),
                  },
                  {
                    tabButton: "Systèmes de sécurité Incendie",
                    tabContent: (
                      <p>
                        Un Système de Sécurité Incendie (SSI) assure la mise en
                        sécurité des personnes, limite la propagation du feu et
                        facilite l’intervention des secours au sein d’un
                        Établissement Recevant du Public (ERP). Pour cela, la
                        loi impose un SSI en adéquation avec le type, le groupe
                        et la catégorie dans lesquels appartient l’ERP. Art.
                        R4224-17 : « Les installations et dispositifs techniques
                        et de sécurité des lieux de travail sont entretenus et
                        vérifiés suivant une périodicité appropriée. Toute
                        défectuosité susceptible d’affecter la santé et la
                        sécurité des travailleurs est éliminée le plus
                        rapidement possible. » (cf. code du travail sur
                        Légifrance)
                      </p>
                    ),
                  },
                ]}
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
