/*
Core
 */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Input, Link, makeStyles } from '@material-ui/core';

/*
Components & Templates
 */
import GridContainer from '../../../components/Grid/GridContainer.js';
import GridItem from '../../../components/Grid/GridItem.js';
import InfoArea from '../../../components/InfoArea/InfoArea.js';
import Card from '../../../components/Card/Card.js';
import CardHeader from '../../../components/Card/CardHeader.js';
import CardBody from '../../../components/Card/CardBody.js';
import CardFooter from '../../../components/Card/CardFooter.js';
import CustomInput from '../../../components/CustomInput/CustomInput.js';
import Button from '../../../components/CustomButtons/Button.js';
/*
Style
 */
import contactsStyle from '../../../assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js';
/*
Assets
 */
import PinDrop from '@material-ui/icons/PinDrop';
import Phone from '@material-ui/icons/Phone';

const useStyles = makeStyles(contactsStyle);

export default function SectionContacts({ ...rest }) {
    const data = useStaticQuery(graphql`
        query ContactHomeSection {
            wpgraphql {
                pageBy(pageId: 115) {
                    coordonnees_contact {
                        titreDuFormulaire
                        descriptionDuFormulaireDeContact
                        addresseContact
                        codePostalContact
                        emailContact
                        nomDeLaSociete
                        nomDuGerant
                        numeroDeFax
                        numeroDeMobile
                        paysContact
                        titreSectionTelephone
                        villeContact
                    }
                }
            }
            file(relativePath: { eq: "contact_gsi.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1600, maxHeight: 1067, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    `);

    const classes = useStyles();
    return (
        <div className="cd-section" {...rest}>
            {/* Contact us 1 START */}
            <div
                className={classes.contacts + ' contactHome ' + classes.section}
                style={{
                    backgroundImage: `url(${data.file.childImageSharp.fluid.src})`,
                }}
            >
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={5} md={6}>
                            <h2 className={classes.title}>
                                {
                                    data.wpgraphql.pageBy.coordonnees_contact
                                        .titreDuFormulaire
                                }
                            </h2>
                            <h5 className={classes.description}>
                                {
                                    data.wpgraphql.pageBy.coordonnees_contact
                                        .descriptionDuFormulaireDeContact
                                }
                            </h5>
                            <InfoArea
                                className={classes.infoArea}
                                title={
                                    data.wpgraphql.pageBy.coordonnees_contact
                                        .nomDeLaSociete
                                }
                                description={
                                    <span>
                                        {
                                            data.wpgraphql.pageBy
                                                .coordonnees_contact
                                                .addresseContact
                                        }
                                        <br />{' '}
                                        {
                                            data.wpgraphql.pageBy
                                                .coordonnees_contact
                                                .codePostalContact
                                        }{' '}
                                        {
                                            data.wpgraphql.pageBy
                                                .coordonnees_contact
                                                .villeContact
                                        }
                                        ,
                                        <br />{' '}
                                        {
                                            data.wpgraphql.pageBy
                                                .coordonnees_contact.paysContact
                                        }
                                    </span>
                                }
                                icon={PinDrop}
                            />
                            <InfoArea
                                className={classes.infoArea}
                                title={
                                    data.wpgraphql.pageBy.coordonnees_contact
                                        .titreSectionTelephone
                                }
                                description={
                                    <span>
                                        {
                                            data.wpgraphql.pageBy
                                                .coordonnees_contact.nomDuGerant
                                        }
                                        <br />
                                        <Link
                                            href={`tel: ${data.wpgraphql.pageBy.coordonnees_contact.numeroDeMobile}`}
                                            style={{ color: 'inherit' }}
                                        >
                                            {
                                                data.wpgraphql.pageBy
                                                    .coordonnees_contact
                                                    .numeroDeMobile
                                            }
                                        </Link>
                                        <br />
                                        <Link
                                            href={`tel: ${data.wpgraphql.pageBy.coordonnees_contact.numeroDeFax}`}
                                            style={{ color: 'inherit' }}
                                        >
                                            {
                                                data.wpgraphql.pageBy
                                                    .coordonnees_contact
                                                    .numeroDeFax
                                            }
                                        </Link>
                                        <br />
                                        <Link
                                            href={`mailto: ${data.wpgraphql.pageBy.coordonnees_contact.emailContact}`}
                                            style={{ color: 'inherit' }}
                                        >
                                            {
                                                data.wpgraphql.pageBy
                                                    .coordonnees_contact
                                                    .emailContact
                                            }
                                        </Link>
                                    </span>
                                }
                                icon={Phone}
                            />
                        </GridItem>
                        <GridItem
                            xs={12}
                            sm={7}
                            md={6}
                            className={classes.mlAuto + ' formHome'}
                        >
                            <Card className={classes.card1}>
                                <form
                                    method="POST"
                                    data-netlify-honeypot="bot-field"
                                    data-netlify="true"
                                    name="contact"
                                    action="/succes"
                                >
                                    <Input type="hidden" name="bot-field" />
                                    <Input
                                        type="hidden"
                                        name="form-name"
                                        value="contact"
                                    />
                                    <CardHeader
                                        contact
                                        color="danger"
                                        className={classes.textCenter}
                                    >
                                        <h4 className={classes.cardTitle}>
                                            Votre Demande
                                        </h4>
                                    </CardHeader>
                                    <CardBody>
                                        <GridContainer>
                                            <GridItem xs={12} sm={6} md={6}>
                                                <CustomInput
                                                    labelText="Votre Prénom"
                                                    id="firstName"
                                                    name="firstName"
                                                    formControlProps={{
                                                        fullWidth: true,
                                                    }}
                                                    required
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={6}>
                                                <CustomInput
                                                    labelText="Votre Nom"
                                                    id="lastName"
                                                    name="lastName"
                                                    formControlProps={{
                                                        fullWidth: true,
                                                    }}
                                                    required
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <CustomInput
                                            labelText="Votre Email"
                                            id="email-address"
                                            name="email-address"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            required
                                        />
                                        <CustomInput
                                            labelText="Votre Message"
                                            id="message"
                                            name="message"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                multiline: true,
                                                rows: 5,
                                            }}
                                            required
                                        />
                                    </CardBody>
                                    <CardFooter
                                        className={
                                            classes.justifyContentBetween
                                        }
                                    >
                                        <Button
                                            color="danger"
                                            fullWidth
                                            type="submit"
                                        >
                                            Envoyer
                                        </Button>
                                    </CardFooter>
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
