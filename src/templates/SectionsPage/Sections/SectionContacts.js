/*
Core
 */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Input, Link, Hidden, makeStyles } from '@material-ui/core';

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
            wordpressAcfPages(wordpress_id: { eq: 115 }) {
                acf {
                    titre_du_formulaire
                    addresse_contact
                    description_du_formulaire_de_contact
                    code_postal_contact
                    email_contact
                    nom_de_la_societe
                    nom_du_gerant
                    numero_de_fax
                    numero_de_mobile
                    pays_contact
                    titre_section_telephone
                    ville_contact
                }
            }
            file(relativePath: { eq: "contact_gsi.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1600, maxHeight: 1067) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    const classes = useStyles();
    // const handleSubmit = event => {
    //     event.preventDefault();
    //     alert(`Welcome`);
    // };
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
                                {data.wordpressAcfPages.acf.titre_du_formulaire}
                            </h2>
                            <h5 className={classes.description}>
                                {
                                    data.wordpressAcfPages.acf
                                        .description_du_formulaire_de_contact
                                }
                            </h5>
                            <InfoArea
                                className={classes.infoArea}
                                title={
                                    data.wordpressAcfPages.acf.nom_de_la_societe
                                }
                                description={
                                    <span>
                                        {
                                            data.wordpressAcfPages.acf
                                                .addresse_contact
                                        }
                                        <br />{' '}
                                        {
                                            data.wordpressAcfPages.acf
                                                .code_postal_contact
                                        }{' '}
                                        {
                                            data.wordpressAcfPages.acf
                                                .ville_contact
                                        }
                                        ,
                                        <br />{' '}
                                        {
                                            data.wordpressAcfPages.acf
                                                .pays_contact
                                        }
                                    </span>
                                }
                                icon={PinDrop}
                            />
                            <InfoArea
                                className={classes.infoArea}
                                title={
                                    data.wordpressAcfPages.acf
                                        .titre_section_telephone
                                }
                                description={
                                    <span>
                                        {
                                            data.wordpressAcfPages.acf
                                                .nom_du_gerant
                                        }
                                        <br />
                                        <Link
                                            href={`tel: ${data.wordpressAcfPages.acf.numero_de_mobile}`}
                                            style={{ color: 'inherit' }}
                                        >
                                            {
                                                data.wordpressAcfPages.acf
                                                    .numero_de_mobile
                                            }
                                        </Link>
                                        <br />
                                        <Link
                                            href={`tel: ${data.wordpressAcfPages.acf.numero_de_fax}`}
                                            style={{ color: 'inherit' }}
                                        >
                                            {
                                                data.wordpressAcfPages.acf
                                                    .numero_de_fax
                                            }
                                        </Link>
                                        <br />
                                        <Link
                                            href={`mailto: ${data.wordpressAcfPages.email_contact}`}
                                            style={{ color: 'inherit' }}
                                        >
                                            {
                                                data.wordpressAcfPages.acf
                                                    .email_contact
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
                                    netlify-honeypot="bot-field"
                                    data-netlify="true"
                                    name="contact"
                                    action="/succes"
                                    // onSubmit={handleSubmit}
                                >
                                    <Hidden>
                                        <Input type="hidden" name="bot-field" />
                                        <Input
                                            type="hidden"
                                            name="form-name"
                                            value="contact"
                                        />
                                    </Hidden>
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
                                                    labelText="Votre Prénom*"
                                                    id="firstName"
                                                    formControlProps={{
                                                        fullWidth: true,
                                                    }}
                                                    inputProps={{
                                                        name: 'firstName',
                                                        required: true,
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={6} md={6}>
                                                <CustomInput
                                                    labelText="Votre Nom*"
                                                    id="lastName"
                                                    formControlProps={{
                                                        fullWidth: true,
                                                    }}
                                                    inputProps={{
                                                        name: 'lastName',
                                                        required: true,
                                                    }}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <CustomInput
                                            labelText="Votre Email*"
                                            id="email-address"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                name: 'email-address',
                                                required: true,
                                                type: 'email',
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Votre Message*"
                                            id="message"
                                            name="message"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                multiline: true,
                                                rows: 5,
                                                name: 'message',
                                                required: true,
                                            }}
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
