import React from 'react';
import { Button } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { HelpModal } from "./HelpModal";

export function HelpMenuButton(props) {

    const [firstOpen, setFirstOpen] = React.useState(false)
    const [secondOpen, setSecondOpen] = React.useState(false)
    const [thirdOpen, setThirdOpen] = React.useState(false)
    const openSecond = () => {
        setSecondOpen(true)
        setFirstOpen(false)
    }
    const openThird = () => {
        setThirdOpen(true)
        setSecondOpen(false)
    }

    return (
        <React.Fragment>
            <Button sx={props.sx} color="inherit" variant="outlined" onClick={() => setFirstOpen(true)}>
                <HelpIcon/>
            </Button>
            <HelpModal
                number={1}
                open={firstOpen}
                close={() => setFirstOpen(false)}
                next={openSecond}
                nextButtonText={"next"}
                title={"tierstra help"}
                description={"Tierstra is (currently) a tierlist with reset, import and export capabilities."}
            />
            <HelpModal
                number={2}
                open={secondOpen}
                close={() => setSecondOpen(false)}
                next={openThird}
                nextButtonText={"next"}
                title={"scrolling rows"}
                description={"When rows become full, they will become horizontally scrollable. A future goal for tierstra will be for each tier to have multiple draggable lines to keep everything in view. Change row order by dragging tier name."}
            />

            <HelpModal
                number={3}
                open={thirdOpen}
                close={() => setThirdOpen(false)}
                next={() => setThirdOpen(false)}
                nextButtonText={"close"}
                title={"reset, import, and export"}
                description={"Regardless of the row's capacity, an image export will bring everything into view in a JPEG image. JSON exports are importable for preliminary file sharing. Resetting (or first time loading) will provide a basic default dataset to try the tierlist out. Adding and removing content will come in a future version."}
            />
        </React.Fragment>
    )
}
