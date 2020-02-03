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

const Contact = () => {
    const data = useStaticQuery(graphql`
        query Contact {
            wordpressPage(wordpress_id: { eq: 115 }) {
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
                            <h1 className={classes.title}>Contact</h1>
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
                            <SectionContacts className="contact-page-gsi" />
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
