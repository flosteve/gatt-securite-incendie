import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Input, Link } from "@material-ui/core"

// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop"
import Phone from "@material-ui/icons/Phone"
// core components
import GridContainer from "../../../components/Grid/GridContainer.js"
import GridItem from "../../../components/Grid/GridItem.js"
import InfoArea from "../../../components/InfoArea/InfoArea.js"
import Card from "../../../components/Card/Card.js"
import CardHeader from "../../../components/Card/CardHeader.js"
import CardBody from "../../../components/Card/CardBody.js"
import CardFooter from "../../../components/Card/CardFooter.js"
import CustomInput from "../../../components/CustomInput/CustomInput.js"
import Button from "../../../components/CustomButtons/Button.js"

import contactsStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js"

import { graphql, useStaticQuery } from "gatsby"

const useStyles = makeStyles(contactsStyle)

export default function SectionContacts({ ...rest }) {
  const data = useStaticQuery(graphql`
    query ContactHomeSection {
      file(relativePath: { eq: "contact_gsi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, maxHeight: 1067, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const classes = useStyles()
  return (
    <div className="cd-section" {...rest}>
      {/* Contact us 1 START */}
      <div
        className={classes.contacts + " contactHome " + classes.section}
        style={{
          backgroundImage: `url(${data.file.childImageSharp.fluid.src})`,
        }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={5} md={6}>
              <h2 className={classes.title}>Contactez-nous</h2>
              <h5 className={classes.description}>
                Besoin d'un produit ? D'une formation ? D'un plan ? Ou
                simplement une question ? Nous serons ravis de vous aider.
              </h5>
              <InfoArea
                className={classes.infoArea}
                title="GSI"
                description={
                  <span>
                    120b, Route du Mollard Viret,
                    <br /> 38510 Creys-Mépieu,
                    <br /> France
                  </span>
                }
                icon={PinDrop}
              />
              <InfoArea
                className={classes.infoArea}
                title="Téléphone"
                description={
                  <span>
                    Gatt Pierre
                    <br />
                    <Link
                      href="tel:+33 6 06 73 14 16"
                      style={{ color: "inherit" }}
                    >
                      +33 6 06 73 14 16
                    </Link>
                    <br />
                    <Link
                      href="tel:+33 6 06 73 14 16"
                      style={{ color: "inherit" }}
                    >
                      +33 9 70 32 10 25
                    </Link>
                    <br />
                    <Link
                      href="mailto:gatt.pierre@gsincendie.fr"
                      style={{ color: "inherit" }}
                    >
                      gatt.pierre@gsincendie.fr
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
              className={classes.mlAuto + " formHome"}
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
                  <Input type="hidden" name="form-name" value="contact" />
                  <CardHeader
                    contact
                    color="danger"
                    className={classes.textCenter}
                  >
                    <h4 className={classes.cardTitle}>Votre Demande</h4>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText="Votre Prénom"
                          id="firstName"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText="Votre Nom"
                          id="lastName"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <CustomInput
                      labelText="Votre Email"
                      id="email-address"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    <CustomInput
                      labelText="Votre Message"
                      id="message"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    {/*<FormControlLabel*/}
                    {/*  control={*/}
                    {/*    <Checkbox*/}
                    {/*      tabIndex={-1}*/}
                    {/*      onClick={() => handleToggle(1)}*/}
                    {/*      checkedIcon={*/}
                    {/*        <Check className={classes.checkedIcon} />*/}
                    {/*      }*/}
                    {/*      icon={<Check className={classes.uncheckedIcon} />}*/}
                    {/*      classes={{*/}
                    {/*        checked: classes.checked,*/}
                    {/*        root: classes.checkRoot,*/}
                    {/*      }}*/}
                    {/*    />*/}
                    {/*  }*/}
                    {/*  classes={{ label: classes.label }}*/}
                    {/*  label="I'm not a robot"*/}
                    {/*/>*/}
                    <Button color="danger" fullWidth>
                      Envoyer
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Contact us 1 END */}
      {/* Contact us 2 START */}
      {/*<div className={classes.contacts2}>*/}
      {/*  <div className={classes.map}>*/}
      {/*    <RegularMap*/}
      {/*      googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"*/}
      {/*      loadingElement={<div style={{ height: `100%` }} />}*/}
      {/*      containerElement={*/}
      {/*        <div*/}
      {/*          style={{*/}
      {/*            height: `100%`,*/}
      {/*            borderRadius: "6px",*/}
      {/*            overflow: "hidden",*/}
      {/*          }}*/}
      {/*        />*/}
      {/*      }*/}
      {/*      mapElement={<div style={{ height: `100%` }} />}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <GridItem xs={12} sm={6} md={6}>*/}
      {/*    <Card className={classes.card2}>*/}
      {/*      <form>*/}
      {/*        <CardHeader contact color="rose" className={classes.textCenter}>*/}
      {/*          <h4 className={classes.cardTitle}>Contact Us</h4>*/}
      {/*        </CardHeader>*/}
      {/*        <CardBody>*/}
      {/*          <GridContainer>*/}
      {/*            <GridItem xs={12} sm={6} md={6}>*/}
      {/*              <InfoArea*/}
      {/*                className={classes.infoArea2}*/}
      {/*                title="Give us a ring"*/}
      {/*                description={*/}
      {/*                  <span>*/}
      {/*                    Michael Jordan*/}
      {/*                    <br /> +40 762 321 762*/}
      {/*                    <br /> Mon - Fri, 8:00-22:00*/}
      {/*                  </span>*/}
      {/*                }*/}
      {/*                icon={Phone}*/}
      {/*                iconColor="rose"*/}
      {/*              />*/}
      {/*            </GridItem>*/}
      {/*            <GridItem xs={12} sm={6} md={6}>*/}
      {/*              <InfoArea*/}
      {/*                className={classes.infoArea2}*/}
      {/*                title="Find us at the office"*/}
      {/*                description={*/}
      {/*                  <span>*/}
      {/*                    Bld Mihail Kogalniceanu, nr. 8,*/}
      {/*                    <br /> 7652 Bucharest,*/}
      {/*                    <br /> Romania*/}
      {/*                  </span>*/}
      {/*                }*/}
      {/*                icon={PinDrop}*/}
      {/*                iconColor="rose"*/}
      {/*              />*/}
      {/*            </GridItem>*/}
      {/*          </GridContainer>*/}
      {/*          <GridContainer>*/}
      {/*            <GridItem xs={12} sm={6} md={6}>*/}
      {/*              <CustomInput*/}
      {/*                labelText="Full Name"*/}
      {/*                id="first2"*/}
      {/*                formControlProps={{*/}
      {/*                  fullWidth: true,*/}
      {/*                }}*/}
      {/*              />*/}
      {/*            </GridItem>*/}
      {/*            <GridItem xs={12} sm={6} md={6}>*/}
      {/*              <CustomInput*/}
      {/*                labelText="Email Address"*/}
      {/*                id="email-address2"*/}
      {/*                formControlProps={{*/}
      {/*                  fullWidth: true,*/}
      {/*                }}*/}
      {/*              />*/}
      {/*            </GridItem>*/}
      {/*          </GridContainer>*/}
      {/*          <CustomInput*/}
      {/*            labelText="Your Message"*/}
      {/*            id="message2"*/}
      {/*            formControlProps={{*/}
      {/*              fullWidth: true,*/}
      {/*            }}*/}
      {/*            inputProps={{*/}
      {/*              multiline: true,*/}
      {/*              rows: 5,*/}
      {/*            }}*/}
      {/*          />*/}
      {/*        </CardBody>*/}
      {/*        <CardFooter className={classes.justifyContentBetween}>*/}
      {/*          <FormControlLabel*/}
      {/*            control={*/}
      {/*              <Checkbox*/}
      {/*                tabIndex={-1}*/}
      {/*                onClick={() => handleToggle(2)}*/}
      {/*                checkedIcon={<Check className={classes.checkedIcon} />}*/}
      {/*                icon={<Check className={classes.uncheckedIcon} />}*/}
      {/*                classes={{*/}
      {/*                  checked: classes.checked,*/}
      {/*                  root: classes.checkRoot,*/}
      {/*                }}*/}
      {/*              />*/}
      {/*            }*/}
      {/*            classes={{ label: classes.label }}*/}
      {/*            label="I'm not a robot"*/}
      {/*          />*/}
      {/*          <Button color="rose" className={classes.pullRight}>*/}
      {/*            Send Message*/}
      {/*          </Button>*/}
      {/*        </CardFooter>*/}
      {/*      </form>*/}
      {/*    </Card>*/}
      {/*  </GridItem>*/}
      {/*</div>*/}
      {/* Contact us 2 END */}
    </div>
  )
}
