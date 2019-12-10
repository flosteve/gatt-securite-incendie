/*
Core
 */
import React from 'react';
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide,
} from '@material-ui/core';
/*
Component
 */
import GridItem from '../Grid/GridItem';

/*
Assets
 */
import Button from '../CustomButtons/Button';
import GavelIcon from '@material-ui/icons/Gavel';

const PageContent = ({ data, classes }) => {
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} timeout={1000} />;
    });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <GridItem xs={12} className={classes.mlAuto + ' ' + classes.mrAuto}>
            <h2>{data.wpgraphql.pageBy.contenu_page.titreDuParagraphe}</h2>
            <div
                dangerouslySetInnerHTML={{
                    __html:
                        data.wpgraphql.pageBy.contenu_page.contenuDuParagraphe,
                }}
            />
            <Box className="page-modal-reglementation">
                <Button
                    color="danger"
                    children={
                        data.wpgraphql.pageBy.contenu_page_prestation
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
                    <Button onClick={handleClose} color="danger">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </GridItem>
    );
};

export default PageContent;
