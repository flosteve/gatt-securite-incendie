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
import SectionContacts from '../templates/SectionsPage/Sections/SectionContacts';
/*
Style
 */
import aboutUsStyle from '../assets/jss/material-kit-pro-react/views/aboutUsStyle';
import classNames from 'classnames';

const useStyles = makeStyles(aboutUsStyle);

const Societe = () => {
    const data = useStaticQuery(graphql`
        query Societe {
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
                                        maxHeight: 900
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
        }
    `);

    const classes = useStyles();

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
                <SectionContacts />
            </div>
        </Layout>
    );
};

export default Societe;
