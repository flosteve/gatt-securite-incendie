import React from 'react';

import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';
import Parallax from '../components/Parallax/Parallax';
import { makeStyles } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import aboutUsStyle from '../assets/jss/material-kit-pro-react/views/aboutUsStyle';
import classNames from 'classnames';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import SectionContacts from '../templates/SectionsPage/Sections/SectionContacts';

const useStyles = makeStyles(aboutUsStyle);
const Faq = () => {
    const data = useStaticQuery(graphql`
        query Faq {
            site {
                siteMetadata {
                    title
                    description
                }
            }
            file(relativePath: { eq: "faq.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1280, maxHeight: 774, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    `);

    const classes = useStyles();
    return (
        <Layout>
            <Seo title="FAQ" />
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
                            <h1 className={classes.title}>FAQ</h1>
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
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Amet aut beatae consequatur
                                debitis dolor dolorum est eum ex facere fugit
                                harum impedit in iure magnam molestias natus
                                officia porro quae quisquam quod repellendus
                                sequi similique sint sunt suscipit temporibus,
                                tenetur vel velit voluptate voluptatum?
                                Doloremque illum ipsum laudantium possimus quos
                                ullam, velit voluptas! Adipisci, asperiores
                                deserunt ducimus fugit maxime minus neque
                                praesentium quis rerum totam. Aliquid fugit
                                placeat quis suscipit veritatis! Culpa optio
                                quia quidem voluptatum? Aut porro qui
                                repudiandae suscipit. Cum ducimus minima
                                voluptates.
                            </p>
                        </GridItem>
                    </GridContainer>
                </div>
                <SectionContacts />
            </div>
        </Layout>
    );
};

export default Faq;
