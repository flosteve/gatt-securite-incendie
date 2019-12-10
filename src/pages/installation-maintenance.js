/*
Core
 */
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
/*
Components & Layout
 */
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';
import Parallax from '../components/Parallax/Parallax';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import NavPills from '../components/NavPills/NavPills';
import formatInArrayOfObjects from '../utils/formatInArrayOfObject';
/*
Style
 */
import aboutUsStyle from '../assets/jss/material-kit-pro-react/views/aboutUsStyle';
import classNames from 'classnames';

/*
Assets
 */
import PageContent from '../components/PageContent/PageContent';
import PreFooterContact from '../components/PreFooterContact/PreFooterContact';

const useStyles = makeStyles(aboutUsStyle);

const Installation = () => {
    const data = useStaticQuery(graphql`
        query Installation {
            file(relativePath: { eq: "contact_gsi.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1600, maxHeight: 1067, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            wpgraphql {
                pageBy(pageId: 299) {
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
                    contenu_page_prestation {
                        paragrapheDeReglementation
                        texteDuLienReglementation
                    }
                    contenu_page {
                        titreDuParagraphe
                        contenuDuParagraphe
                    }
                    type_equipements {
                        tabsTypeEquipements {
                            tabContent
                            tabButton
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
                    <GridContainer className="page-gsi">
                        <PageContent data={data} classes={classes} />
                        <GridItem
                            xs={12}
                            className={classes.mlAuto + ' ' + classes.mrAuto}
                        >
                            <h2>Type d'équipements</h2>
                            <NavPills
                                color="danger"
                                horizontal={{
                                    tabsGrid: { xs: 12, sm: 4, md: 5 },
                                    contentGrid: { xs: 12, sm: 8, md: 7 },
                                }}
                                tabs={formatInArrayOfObjects.formatTabs(
                                    data.wpgraphql.pageBy.type_equipements
                                        .tabsTypeEquipements
                                )}
                            />
                        </GridItem>
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

export default Installation;
