/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

/*
 Core
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import {
    Box,
    makeStyles,
    List,
    ListItem,
    useMediaQuery,
} from '@material-ui/core';
/*
 Components & Templates
 */
import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';
import Footer from '../Footer/Footer';
import Button from '../CustomButtons/Button';
/*
Style
 */
import '../../assets/scss/main.scss';
import './layout.css';
import styles from '../../assets/jss/material-kit-pro-react/views/componentsSections/footerStyle';
/*
Assets
 */
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
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <>
            <Header
                brand={data.site.siteMetadata.title}
                links={<HeaderLinks dropdownHoverColor="danger" />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: matches ? 400 : 100,
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
                                {data.site.siteMetadata.title}
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
