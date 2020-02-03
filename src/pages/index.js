import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core';
import { gsap } from 'gsap';
// import ScrollMagic from 'scrollmagic';
/*
Components & Templates
 */
import Seo from '../components/Seo/Seo';
import Layout from '../components/Layout/Layout';
import Parallax from '../components/Parallax/Parallax';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Button from '../components/CustomButtons/Button.js';
import InfoArea from '../components/InfoArea/InfoArea.js';
import SectionContacts from '../templates/SectionsPage/Sections/SectionContacts';
/*
Assets
 */
import Img from 'gatsby-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import BuildIcon from '@material-ui/icons/Build';
import CreateIcon from '@material-ui/icons/Create';
import MapIcon from '@material-ui/icons/Map';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
/*
Style
 */
import presentationStyle from '../assets/jss/material-kit-pro-react/views/presentationStyle';
import classNames from 'classnames';

const useStyles = makeStyles(presentationStyle);

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query HomeBanner {
            wordpressAcfPages(wordpress_id: { eq: 65 }) {
                acf {
                    titre_principal
                    bouton_demande_devis
                    slogan
                    image_banniere {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 1600, maxHeight: 900) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        source_url
                    }
                    section_nos_offres {
                        titre
                        image {
                            localFile {
                                childImageSharp {
                                    fluid(maxWidth: 1600, maxHeight: 1200) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                        }
                        les_offres {
                            descriptif
                            titre
                        }
                    }
                }
            }
        }
    `);
    // let controller = new ScrollMagic.Controller();
    let tl = gsap.timeline({ defaults: { duration: 1.2 } });
    let title = useRef(null);
    let slogan = useRef(null);
    let buttonBanner = useRef(null);
    // let imageSection = useRef(null);

    const classes = useStyles();

    useEffect(() => {
        tl.from(title, {
            opacity: 0,
            y: 'random(-100, 100, 5)',
            ease: 'power3.out',
        })
            .from(slogan, {
                opacity: 0,
                y: 'random(-100, 100, 5)',
                ease: 'power3.out',
            })
            .from(buttonBanner, {
                opacity: 0,
                ease: 'bounce.out',
                y: 100,
            });

        // new ScrollMagic.Scene({
        //     duration: 100, // the scene should last for a scroll distance of 100px
        //     offset: 200,
        // })
        //     .setTween(
        //         tl.from(imageSection, {
        //             opacity: 0,
        //             x: 100,
        //             ease: 'power3.out',
        //             duration: 3,
        //         })
        //     )
        //     .setPin(imageSection) // pins the element for the the scene's duration
        //     .addTo(controller);
    });

    return (
        <Layout>
            <Seo title="Accueil" />
            {data.wordpressAcfPages.acf.image_banniere.localFile
                .childImageSharp && (
                <Parallax
                    image={
                        data.wordpressAcfPages.acf.image_banniere.localFile
                            .childImageSharp.fluid.src
                    }
                    className="parallax home"
                    filter="dark"
                >
                    <div className={classes.container}>
                        <GridContainer>
                            {data.wordpressAcfPages.acf && (
                                <GridItem>
                                    <div className={classes.brand}>
                                        <h1 ref={el => (title = el)}>
                                            {
                                                data.wordpressAcfPages.acf
                                                    .titre_principal
                                            }
                                        </h1>
                                        <h3
                                            className={classes.title}
                                            ref={el => (slogan = el)}
                                        >
                                            {data.wordpressAcfPages.acf.slogan}
                                        </h3>
                                        <Button
                                            size="lg"
                                            color="danger"
                                            startIcon={<LibraryBooksIcon />}
                                            ref={el => (buttonBanner = el)}
                                            id="buttonBanner"
                                            children={
                                                <span>
                                                    {' '}
                                                    {
                                                        data.wordpressAcfPages
                                                            .acf
                                                            .bouton_demande_devis
                                                    }
                                                </span>
                                            }
                                            onClick={() =>
                                                scrollTo('#contact-home-gsi')
                                            }
                                        />
                                    </div>
                                </GridItem>
                            )}
                        </GridContainer>
                    </div>
                </Parallax>
            )}

            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className="nos-offres-section">
                    <GridContainer className={classes.gridContainer}>
                        <GridItem xs={12} sm={12} md={6}>
                            <div
                                className={classes.phoneContainer}
                                // ref={el => (imageSection = el)}
                            >
                                <Img
                                    fluid={
                                        data.wordpressAcfPages.acf
                                            .section_nos_offres.image.localFile
                                            .childImageSharp.fluid
                                    }
                                />
                            </div>
                        </GridItem>
                        {data.wordpressAcfPages.acf.section_nos_offres && (
                            <GridItem xs={12} sm={12} md={6}>
                                <h2>
                                    {
                                        data.wordpressAcfPages.acf
                                            .section_nos_offres.titre
                                    }
                                </h2>
                                <InfoArea
                                    className={classes.infoArea}
                                    icon={BuildIcon}
                                    title={
                                        data.wordpressAcfPages.acf
                                            .section_nos_offres.les_offres[0]
                                            .titre
                                    }
                                    description={
                                        data.wordpressAcfPages.acf
                                            .section_nos_offres.les_offres[0]
                                            .descriptif
                                    }
                                    iconColor="danger"
                                />
                                <InfoArea
                                    className={classes.infoArea}
                                    icon={CreateIcon}
                                    title={
                                        data.wordpressAcfPages.acf
                                            .section_nos_offres.les_offres[1]
                                            .titre
                                    }
                                    description={
                                        data.wordpressAcfPages.acf
                                            .section_nos_offres.les_offres[1]
                                            .descriptif
                                    }
                                    iconColor="danger"
                                />
                                <InfoArea
                                    className={classes.infoArea}
                                    icon={MapIcon}
                                    title={
                                        data.wordpressAcfPages.acf
                                            .section_nos_offres.les_offres[2]
                                            .titre
                                    }
                                    description={
                                        data.wordpressAcfPages.acf
                                            .section_nos_offres.les_offres[2]
                                            .descriptif
                                    }
                                    iconColor="danger"
                                />
                                <InfoArea
                                    className={classes.infoArea}
                                    icon={VerifiedUserIcon}
                                    title={
                                        data.wordpressAcfPages.acf
                                            .section_nos_offres.les_offres[3]
                                            .titre
                                    }
                                    description={
                                        data.wordpressAcfPages.acf
                                            .section_nos_offres.les_offres[3]
                                            .descriptif
                                    }
                                    iconColor="danger"
                                />
                            </GridItem>
                        )}
                    </GridContainer>
                </div>
                <SectionContacts id="contact-home-gsi" />
            </div>
        </Layout>
    );
};

export default IndexPage;
