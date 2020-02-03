/*
Core
 */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core';
/*
Components & Templates
 */
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';
import Parallax from '../components/Parallax/Parallax';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Accordion from '../components/Accordion/Accordion';
import PreFooterContact from '../components/PreFooterContact/PreFooterContact';
import formatInArrayOfObjects from '../utils/getAnArrayOfObject';

/*
Style
 */
import aboutUsStyle from '../assets/jss/material-kit-pro-react/views/aboutUsStyle';
import classNames from 'classnames';

const useStyles = makeStyles(aboutUsStyle);

const Faq = () => {
    const data = useStaticQuery(graphql`
        query Faq {
            wordpressPage(wordpress_id: { eq: 309 }) {
                acf {
                    titre_de_la_page
                    image_de_banniere {
                        source_url
                        localFile {
                            childImageSharp {
                                fluid(
                                    maxWidth: 1600
                                    maxHeight: 1067
                                    quality: 100
                                ) {
                                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                }
                            }
                        }
                    }
                    contenu_du_paragraphe
                    titre_du_paragraphe
                    texte_du_lien_reglementation
                    paragraphe_de_reglementation
                    faq_content {
                        faq_answer
                        faq_question
                    }
                    tabs_type_equipements {
                        tab_button
                        tab_content
                    }
                }
            }

            #            wpgraphql {
            #                pageBy(pageId: 309) {
            #                    tabsFaq {
            #                        faqContent {
            #                            faqAnswer
            #                            faqQuestion
            #                        }
            #                    }
            #                    banniere {
            #                        titreDeLaPage
            #                        imageDeBanniere {
            #                            sourceUrl
            #                            imageFile {
            #                                childImageSharp {
            #                                    fluid(
            #                                        maxWidth: 1280
            #                                        maxHeight: 900
            #                                        quality: 100
            #                                    ) {
            #                                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
            #                                    }
            #                                }
            #                            }
            #                        }
            #                    }
            #                    contenu_page_prestation {
            #                        paragrapheDeReglementation
            #                        texteDuLienReglementation
            #                    }
            #                    contenu_page {
            #                        titreDuParagraphe
            #                        contenuDuParagraphe
            #                    }
            #                    type_equipements {
            #                        tabsTypeEquipements {
            #                            tabContent
            #                            tabButton
            #                        }
            #                    }
            #                }
            #            }
            file(relativePath: { eq: "contact_gsi.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1600, maxHeight: 1067, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    `);

    const classes = useStyles();

    return (
        <Layout>
            <Seo title={data.wordpressPage.acf.titre_de_la_page} />
            <Parallax
                image={
                    data.wordpressPage.acf.image_de_banniere.localFile
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
                                {data.wordpressPage.acf.titre_de_la_page}
                            </h1>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <GridContainer className="page-gsi">
                        <GridItem
                            xs={12}
                            sm={8}
                            md={8}
                            className={classes.mlAuto + ' ' + classes.mrAuto}
                        >
                            <h2>
                                {data.wordpressPage.acf.titre_du_paragraphe}
                            </h2>
                            <Accordion
                                active={0}
                                activeColor="danger"
                                collapses={formatInArrayOfObjects.formatAccordion(
                                    data.wordpressPage.acf.faq_content
                                )}
                            />
                        </GridItem>
                    </GridContainer>
                </div>
                <PreFooterContact
                    url={data.file.childImageSharp.fluid.src}
                    classes={classes}
                />
            </div>
        </Layout>
    );
};

export default Faq;
