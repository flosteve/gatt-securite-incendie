/*
Core
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
/*
Component
 */
import GridItem from '../Grid/GridItem';

/*
Assets
 */
import Button from '../CustomButtons/Button';
import GavelIcon from '@material-ui/icons/Gavel';
import popoverStyles from '../../assets/jss/material-kit-pro-react/popoverStyles';
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles(popoverStyles);

const PageContent = ({ data, classes }) => {
    const classes2 = useStyles();
    const [anchorElTop, setAnchorElTop] = React.useState(null);

    return (
        <GridItem xs={12} className={classes.mlAuto + ' ' + classes.mrAuto}>
            <h2>{data.wordpressPage.acf.titre_du_paragraphe}</h2>
            <div
                dangerouslySetInnerHTML={{
                    __html: data.wordpressPage.acf.contenu_du_paragraphe,
                }}
            />
            <Box className="page-modal-reglementation">
                <Button
                    color="danger"
                    children={
                        data.wordpressPage.acf.texte_du_lien_reglementation
                    }
                    startIcon={<GavelIcon />}
                    onClick={event => setAnchorElTop(event.currentTarget)}
                />
            </Box>
            <Popover
                classes={{
                    paper: classes2.popover,
                }}
                open={Boolean(anchorElTop)}
                anchorEl={anchorElTop}
                onClose={() => setAnchorElTop(null)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <h3 className={classes2.popoverHeader}>Réglementation</h3>
                <div className={classes2.popoverBody}>
                    <span
                        dangerouslySetInnerHTML={{
                            __html:
                                data.wordpressPage.acf
                                    .paragraphe_de_reglementation,
                        }}
                    />{' '}
                </div>
            </Popover>
        </GridItem>
    );
};

export default PageContent;
