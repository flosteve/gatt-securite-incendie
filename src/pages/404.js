import React from 'react';

import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import classNames from 'classnames';
import Parallax from '../components/Parallax/Parallax';
import { GatsbyLink } from 'gatsby-theme-material-ui';
import Button from '../components/CustomButtons/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core';
import aboutUsStyle from '../assets/jss/material-kit-pro-react/views/aboutUsStyle';

const useStyles = makeStyles(aboutUsStyle);

const NotFoundPage = () => {
    const data = useStaticQuery(graphql`
        query NonTrouve {
            wordpressPage(wordpress_id: { eq: 45932 }) {
                acf {
                    titre_de_la_page
                    image_banniere {
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
                }
            }
        }
    `);
    const classes = useStyles();

    return (
        <Layout>
            <Seo title="404: Page non trouvée" />
            <Parallax
                image={
                    data.wordpressPage.acf.image_banniere.localFile
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
                    <GridContainer className="page-gsi succes">
                        <GridItem
                            xs={12}
                            className={classes.mlAuto + ' ' + classes.mrAuto}
                        >
                            <h2>
                                {data.wordpressPage.acf.titre_du_paragraphe}
                            </h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        data.wordpressPage.acf
                                            .contenu_du_paragraphe,
                                }}
                            />
                            <GatsbyLink to="/" className="retour-succes">
                                <Button
                                    color="danger"
                                    startIcon={<ArrowBackIcon />}
                                >
                                    Retour Accueil
                                </Button>
                            </GatsbyLink>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
