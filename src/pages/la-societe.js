/*
Core
 */
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
/*
Components & Templates
 */
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';
import Parallax from '../components/Parallax/Parallax';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
/*
Style
 */
import aboutUsStyle from '../assets/jss/material-kit-pro-react/views/aboutUsStyle';
import styles from '../assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js';

import classNames from 'classnames';
import { GatsbyLink } from 'gatsby-theme-material-ui';
import Button from '../components/CustomButtons/Button';

const useStyles = makeStyles(aboutUsStyle);
const useStyles2 = makeStyles(styles);

const Societe = () => {
    const data = useStaticQuery(graphql`
        query Societe {
            file(relativePath: { eq: "contact_gsi.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1600, maxHeight: 1067, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            wpgraphql {
                pageBy(pageId: 117) {
                    banniere {
                        titreDeLaPage
                        imageDeBanniere {
                            sourceUrl
                            imageFile {
                                childImageSharp {
                                    fluid(
                                        maxWidth: 1600
                                        maxHeight: 1200
                                        quality: 100
                                    ) {
                                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                    }
                                }
                            }
                        }
                    }
                    contenu_page {
                        titreDuParagraphe
                        contenuDuParagraphe
                    }
                }
            }
        }
    `);

    const classes = useStyles();
    const classesPrefooter = useStyles2();

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
                        <GridItem
                            xs={12}
                            className={classes.mlAuto + ' ' + classes.mrAuto}
                        >
                            <h2>
                                {
                                    data.wpgraphql.pageBy.contenu_page
                                        .titreDuParagraphe
                                }
                            </h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        data.wpgraphql.pageBy.contenu_page
                                            .contenuDuParagraphe,
                                }}
                            />
                        </GridItem>
                    </GridContainer>
                </div>
                <div
                    className={classNames(
                        classesPrefooter.subscribeLine,
                        classesPrefooter.subscribeLineImage
                    )}
                    style={{
                        backgroundImage: `url(${data.file.childImageSharp.fluid.src})`,
                    }}
                >
                    <div className={`prefooter ${classesPrefooter.container}`}>
                        <GridContainer>
                            <GridItem
                                xs={12}
                                sm={6}
                                md={6}
                                className={classNames(
                                    classesPrefooter.mlAuto,
                                    classesPrefooter.mrAuto
                                )}
                            >
                                <div className={classes.textCenter}>
                                    <h2 className={classesPrefooter.title}>
                                        Contact
                                    </h2>
                                    <p>
                                        Besoin d'un produit ? D'une formation ?
                                        D'un plan ? Ou simplement une question ?
                                        Nous serons ravis de vous aider.
                                    </p>
                                </div>
                                <div className="contact-pre-footer">
                                    <GatsbyLink to="/contact">
                                        <Button color="danger">
                                            Contactez-nous
                                        </Button>
                                    </GatsbyLink>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Societe;
