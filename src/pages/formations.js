/*
Core
 */
import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core';
/*
Components & Layout
 */
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';
import Parallax from '../components/Parallax/Parallax';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Card from '../components/Card/Card';
import CardBody from '../components/Card/CardBody';
import Button from '../components/CustomButtons/Button';
/*
Style
 */
import aboutUsStyle from '../assets/jss/material-kit-pro-react/views/aboutUsStyle';
import classNames from 'classnames';

/*
Assets
 */
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PreFooterContact from '../components/PreFooterContact/PreFooterContact';

const useStyles = makeStyles(aboutUsStyle);

const Formations = () => {
    const data = useStaticQuery(graphql`
        query Formation {
            file(relativePath: { eq: "contact_gsi.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1600, maxHeight: 1067, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            wordpressPage(wordpress_id: { eq: 27062 }) {
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
            allWordpressWpFormation(sort: { fields: title, order: ASC }) {
                nodes {
                    link
                    title
                    path
                    acf {
                        tag_formation
                        image_formation {
                            localFile {
                                childImageSharp {
                                    fluid {
                                        src
                                    }
                                }
                            }
                            source_url
                        }
                    }
                }
            }
        }

        #            wpgraphql {
        #                pageBy(pageId: 27062) {
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
        #                    contenu_page {
        #                        titreDuParagraphe
        #                    }
        #                }
        #                formations {
        #                    nodes {
        #                        title
        #                        uri
        #                        formations {
        #                            tagFormation
        #                            imageFormation {
        #                                imageFile {
        #                                    childImageSharp {
        #                                        fluid(
        #                                            maxWidth: 1600
        #                                            maxHeight: 900
        #                                            quality: 100
        #                                        ) {
        #                                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
        #                                        }
        #                                    }
        #                                }
        #                                sourceUrl
        #                            }
        #                        }
        #                    }
        #                }
        #            }
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
                    <GridContainer
                        className="page-gsi formations"
                        justify="center"
                    >
                        <GridItem
                            xs={12}
                            className={classes.mlAuto + ' ' + classes.mrAuto}
                        >
                            <h2>
                                {data.wordpressPage.acf.titre_du_paragraphe}
                            </h2>
                        </GridItem>

                        {data.allWordpressWpFormation.nodes &&
                            data.allWordpressWpFormation.nodes.map(
                                formation => (
                                    <GridItem xs={12} sm={6} md={6}>
                                        <Card
                                            raised
                                            background
                                            style={{
                                                backgroundImage: `url("${formation.acf.image_formation.localFile.childImageSharp.fluid.src}")`,
                                            }}
                                        >
                                            <CardBody background>
                                                <h6
                                                    className={classes.category}
                                                >
                                                    {
                                                        formation.acf
                                                            .tag_formation
                                                    }
                                                </h6>
                                                <Link to={formation.path}>
                                                    <h3
                                                        className={
                                                            classes.cardTitle
                                                        }
                                                    >
                                                        {formation.title}
                                                    </h3>
                                                </Link>
                                                <Link to={formation.path}>
                                                    <Button
                                                        round
                                                        color="danger"
                                                    >
                                                        <LibraryBooksIcon />{' '}
                                                        Voir le détail
                                                    </Button>
                                                </Link>
                                            </CardBody>
                                        </Card>
                                    </GridItem>
                                )
                            )}
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

export default Formations;
