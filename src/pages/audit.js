/*
Core
 */
import React from 'react';
import {
    makeStyles,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide,
    Box,
} from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
/*
Componenents & Templates
 */
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';
import Parallax from '../components/Parallax/Parallax';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import styles from '../assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js'; /*
Style
 */
import aboutUsStyle from '../assets/jss/material-kit-pro-react/views/aboutUsStyle';
import classNames from 'classnames';
import Button from '../components/CustomButtons/Button';
import GavelIcon from '@material-ui/icons/Gavel';
import { GatsbyLink } from 'gatsby-theme-material-ui';

const useStyles = makeStyles(aboutUsStyle);
const useStyles2 = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} timeout={1000} />;
});

const Audit = () => {
    const classes = useStyles();
    const classesPrefooter = useStyles2();

    const data = useStaticQuery(graphql`
        query Audit {
            file(relativePath: { eq: "contact_gsi.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1600, maxHeight: 1067, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            wpgraphql {
                pageBy(pageId: 26919) {
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
                    contenu_page_prestation {
                        paragrapheDeReglementation
                        texteDuLienReglementation
                    }
                    contenu_page {
                        titreDuParagraphe
                        contenuDuParagraphe
                    }
                }
            }
        }
    `);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                            <Box className="page-modal-reglementation">
                                <Button
                                    color="danger"
                                    children={
                                        data.wpgraphql.pageBy
                                            .contenu_page_prestation
                                            .texteDuLienReglementation
                                    }
                                    startIcon={<GavelIcon />}
                                    onClick={handleClickOpen}
                                />
                            </Box>
                            <Dialog
                                open={open}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-reglementation-titre"
                                aria-describedby="alert-dialog-reglementation-description"
                                className="alert-dialog-reglementation"
                            >
                                <DialogTitle id="alert-dialog-slide-title">
                                    Réglementation
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-slide-description">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    data.wpgraphql.pageBy
                                                        .contenu_page_prestation
                                                        .paragrapheDeReglementation,
                                            }}
                                        />
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions className="alert-dialog-button-container">
                                    <Button
                                        onClick={handleClose}
                                        color="danger"
                                    >
                                        Ok
                                    </Button>
                                </DialogActions>
                            </Dialog>
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

export default Audit;
