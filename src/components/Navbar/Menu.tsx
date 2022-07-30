import { Menu, MenuItem } from "@mui/material";
import { MenuProps } from 'prop-types';
import React from 'react';

interface NavbarMenuProps extends MenuProps {
    items: {
        text: string,
        onClick: () => void,
    }[];
}

const NavbarMenu = (props: NavbarMenuProps) => {
    const open = Boolean(props.anchorEl)

    return (
        <Menu
            anchorEl={props.anchorEl}
            open={open}
            onClose={props.onClose}
        >
            {props.items.map(({onClick, text}) => (
                <MenuItem key={text} onClick={onClick}>
                    {text}
                </MenuItem>
            ))}
        </Menu>
    )
}

export default NavbarMenu

