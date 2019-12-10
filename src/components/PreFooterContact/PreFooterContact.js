/*
Core
 */
import React from 'react';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import { GatsbyLink } from 'gatsby-theme-material-ui';
/*
Components
 */
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import Button from '../CustomButtons/Button';
/*
Style
 */
import styles from '../../assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js';

const useStyles = makeStyles(styles);

const PreFooterContact = ({ url, classes }) => {
    const classesPrefooter = useStyles();
    return (
        <div
            className={classNames(
                classesPrefooter.subscribeLine,
                classesPrefooter.subscribeLineImage
            )}
            style={{
                backgroundImage: `url(${url})`,
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
                            <h2 className={classesPrefooter.title}>Contact</h2>
                            <p>
                                Besoin d'un produit ? D'une formation ? D'un
                                plan ? Ou simplement une question ? Nous serons
                                ravis de vous aider.
                            </p>
                        </div>
                        <div className="contact-pre-footer">
                            <GatsbyLink to="/contact">
                                <Button color="danger">Contactez-nous</Button>
                            </GatsbyLink>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
};

export default PreFooterContact;
