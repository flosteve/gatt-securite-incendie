import React from 'react';

import Layout from '../../components/Layout/Layout';
import Seo from '../../components/Seo/Seo';
import Parallax from '../../components/Parallax/Parallax';
import { makeStyles, Paper, Box } from '@material-ui/core';
import { graphql } from 'gatsby';
import aboutUsStyle from '../../assets/jss/material-kit-pro-react/views/aboutUsStyle';
import classNames from 'classnames';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Card from '../../components/Card/Card.js';
import CardBody from '../../components/Card/CardBody.js';

import Img from 'gatsby-image';

import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import SchoolIcon from '@material-ui/icons/School';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import styles from '../../assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js';
import { GatsbyLink } from 'gatsby-theme-material-ui';
import Button from '../../components/CustomButtons/Button';

const useStyles = makeStyles(aboutUsStyle);
const useStyles2 = makeStyles(styles);

export default ({ data }) => {
    const classes = useStyles();
    const classesPrefooter = useStyles2();
    return (
        <Layout>
            <Seo title={data.allWordpressWpFormation.nodes[0].title} />
            <Parallax
                image={data.allFile.nodes[0].childImageSharp.fluid.src}
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
                                Descriptif de la formation
                            </h1>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <GridContainer className="page-gsi" spacing={4}>
                        <GridItem item xs={12} md={8}>
                            <GridContainer>
                                <GridItem xs={12}>
                                    <Paper elevation={20}>
                                        <Img
                                            fluid={
                                                data.allWordpressWpFormation
                                                    .nodes[0].acf
                                                    .image_formation.localFile
                                                    .childImageSharp.fluid
                                            }
                                        />
                                    </Paper>
                                </GridItem>
                                <GridItem
                                    xs={12}
                                    className={
                                        classes.mlAuto +
                                        ' formation-description ' +
                                        classes.mrAuto
                                    }
                                >
                                    <h2>
                                        {
                                            data.allWordpressWpFormation
                                                .nodes[0].title
                                        }
                                    </h2>
                                    {data.allWordpressWpFormation.nodes[0].acf
                                        .programme_theorique && (
                                        <Box>
                                            <h3>Programme Théorique</h3>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        data
                                                            .allWordpressWpFormation
                                                            .nodes[0].acf
                                                            .programme_theorique,
                                                }}
                                            />
                                        </Box>
                                    )}
                                    {data.allWordpressWpFormation.nodes[0].acf
                                        .programme_pratique && (
                                        <Box>
                                            <h3>Programme Pratique</h3>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        data
                                                            .allWordpressWpFormation
                                                            .nodes[0].acf
                                                            .programme_pratique ||
                                                        '',
                                                }}
                                            />
                                        </Box>
                                    )}
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                        <GridItem item xs={12} md={4}>
                            <GridContainer>
                                <GridItem xs={12}>
                                    <Card
                                        pricing
                                        raised
                                        className="formation-features"
                                    >
                                        <CardBody pricing>
                                            <h3
                                                className={
                                                    classes.cardDescription
                                                }
                                            >
                                                Caractéristiques
                                            </h3>
                                            <ul>
                                                {data.allWordpressWpFormation
                                                    .nodes[0].acf.objectifs && (
                                                    <li>
                                                        <TrackChangesIcon />
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html:
                                                                    data
                                                                        .allWordpressWpFormation
                                                                        .nodes[0]
                                                                        .acf
                                                                        .objectifs,
                                                            }}
                                                        />
                                                    </li>
                                                )}
                                                {data.allWordpressWpFormation
                                                    .nodes[0].acf.pedagogie && (
                                                    <li>
                                                        <SchoolIcon />
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html:
                                                                    data
                                                                        .allWordpressWpFormation
                                                                        .nodes[0]
                                                                        .acf
                                                                        .pedagogie,
                                                            }}
                                                        />
                                                    </li>
                                                )}
                                                {data.allWordpressWpFormation
                                                    .nodes[0].acf
                                                    .validation && (
                                                    <li>
                                                        <CheckCircleIcon />
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html:
                                                                    data
                                                                        .allWordpressWpFormation
                                                                        .nodes[0]
                                                                        .acf
                                                                        .validation,
                                                            }}
                                                        />
                                                    </li>
                                                )}
                                                {data.allWordpressWpFormation
                                                    .nodes[0].acf.duree && (
                                                    <li>
                                                        <AvTimerIcon />
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html:
                                                                    data
                                                                        .allWordpressWpFormation
                                                                        .nodes[0]
                                                                        .acf
                                                                        .duree ||
                                                                    '',
                                                            }}
                                                        />
                                                    </li>
                                                )}
                                            </ul>
                                        </CardBody>
                                    </Card>
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                    </GridContainer>
                </div>
                <div
                    className={classNames(
                        classesPrefooter.subscribeLine,
                        classesPrefooter.subscribeLineImage
                    )}
                    style={{
                        backgroundImage: `url(${data.allFile.nodes[1].childImageSharp.fluid.src})`,
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

export const data = graphql`
    query SinglePostFormation($id: Int!) {
        allFile(
            filter: {
                relativePath: { in: ["formation.jpeg", "contact_gsi.jpg"] }
            }
        ) {
            nodes {
                childImageSharp {
                    fluid(maxWidth: 1280, maxHeight: 900, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
        allWordpressWpFormation(filter: { wordpress_id: { eq: $id } }) {
            nodes {
                title
                slug
                wordpress_id
                acf {
                    duree
                    objectifs
                    pedagogie
                    programme_pratique
                    programme_theorique
                    validation
                    image_formation {
                        localFile {
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
            }
        }
    }
`;
