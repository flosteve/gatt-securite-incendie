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
            wpgraphql {
                pageBy(pageId: 27062) {
                    banniere {
                        titreDeLaPage
                        imageDeBanniere {
                            sourceUrl
                            imageFile {
                                childImageSharp {
                                    fluid(
                                        maxWidth: 1280
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
                    }
                }
                formations {
                    nodes {
                        title
                        uri
                        formations {
                            tagFormation
                            imageFormation {
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
                                sourceUrl
                            }
                        }
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
                    <GridContainer
                        className="page-gsi formations"
                        justify="center"
                    >
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
                        </GridItem>

                        {data.wpgraphql.formations &&
                            data.wpgraphql.formations.nodes.map(formation => (
                                <GridItem xs={12} sm={6} md={6}>
                                    <Card
                                        raised
                                        background
                                        style={{
                                            backgroundImage: `url("${formation.formations.imageFormation.imageFile.childImageSharp.fluid.src}")`,
                                        }}
                                    >
                                        <CardBody background>
                                            <h6 className={classes.category}>
                                                {
                                                    formation.formations
                                                        .tagFormation
                                                }
                                            </h6>
                                            <Link
                                                to={`/formations/${formation.uri}`}
                                            >
                                                <h3
                                                    className={
                                                        classes.cardTitle
                                                    }
                                                >
                                                    {formation.title}
                                                </h3>
                                            </Link>
                                            <Link
                                                to={`/formations/${formation.uri}`}
                                            >
                                                <Button round color="danger">
                                                    <LibraryBooksIcon /> Voir le
                                                    détail
                                                </Button>
                                            </Link>
                                        </CardBody>
                                    </Card>
                                </GridItem>
                            ))}
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
