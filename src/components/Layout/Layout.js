/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Header from '../Header/Header';
import '../../assets/scss/main.scss';
import './layout.css';
import HeaderLinks from '../Header/HeaderLinks';
import { Box, makeStyles, List, ListItem } from '@material-ui/core';
import Footer from '../Footer/Footer';
import Button from '../CustomButtons/Button';
import styles from '../../assets/jss/material-kit-pro-react/views/componentsSections/footerStyle';

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(styles);

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    const classes = useStyles();

    return (
        <>
            <Header
                brand={data.site.siteMetadata.title}
                links={<HeaderLinks dropdownHoverColor="danger" />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: 'danger',
                }}
            />
            <Box>{children}</Box>
            <Footer
                theme="white"
                content={
                    <div>
                        <div className={classes.left}>
                            <Link to="/" className={classes.footerBrand}>
                                Gatt Sécurité Incendie
                            </Link>
                        </div>
                        <div className={`footer-menu ${classes.pullCenter}`}>
                            <List className={classes.list}>
                                <ListItem className={classes.inlineBlock}>
                                    <Link
                                        to="/mentions-legales"
                                        className={classes.block}
                                    >
                                        Mentions Légales
                                    </Link>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <Link
                                        to="/contact"
                                        className={classes.block}
                                    >
                                        Contact
                                    </Link>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <Link to="/faq" className={classes.block}>
                                        FAQ
                                    </Link>
                                </ListItem>
                            </List>
                        </div>
                        <div className={classes.rightLinks}>
                            <ul>
                                <li>
                                    <Button
                                        href="https://twitter.com/CreativeTim?ref=creativetim"
                                        target="_blank"
                                        color="twitter"
                                        justIcon
                                        simple
                                    >
                                        <TwitterIcon />
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        href="https://fr.linkedin.com/in/pierre-gatt-0172aa11a"
                                        target="_blank"
                                        color="linkedin"
                                        justIcon
                                        simple
                                    >
                                        <LinkedInIcon />
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
            />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
