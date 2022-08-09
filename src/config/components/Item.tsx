import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import DoneIcon from '@mui/icons-material/Done';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import { ConfigItem, PossibleConfigValues } from "config-types";
import React, { useState } from "react";

const Expandable = styled(Box)`
    width: 100%;
    padding-left: 8%;
    padding-top: 2%;
`

interface AbstractItemType {
    configKey: string;
    item: ConfigItem<PossibleConfigValues>;
    updateAppConfig: (key: string, value: any) => void;
}
 
const AbstractItem = ({configKey, item, updateAppConfig}: AbstractItemType) => {
    const value = item.value ?? item.default // ISSUE013
    const [expanded, setExpanded] = useState<boolean>(false)   

    const getAbstractValueControl = () => {
        if ( item.options ) {
            return <List>
                {item.options.map((option, index) => (
                    <ListItem disablePadding key={index}>
                        <ListItemButton onClick={() => updateAppConfig(configKey, option)}>
                            <ListItemText primary={option} />
                            <ListItemIcon sx={{color: '#138FE0'}} >
                                {option===value && <DoneIcon />}
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        }
        switch(typeof value) {
            case 'number':  
                return <TextField 
                    variant="filled"
                    type="number"
                    value={value}
                    onChange={(e) => updateAppConfig(configKey, parseInt(e.target.value))} />
                
            case 'string':  
                return <TextField 
                    variant="filled"
                    type="text"
                    value={value}
                    onChange={(e) => updateAppConfig(configKey, e.target.value)} />
    
            case 'boolean':  
                return <Switch 
                    sx={{ml:0.5}}
                    checked={value as boolean}
                    onChange={(e) => updateAppConfig(configKey, e.target.checked)} />
        }
    }
    

    return (
        <React.Fragment>
            <ListItem disablePadding>
                <ListItemButton onClick={() => setExpanded(!expanded)}>
                    <ListItemIcon sx={{mr: -2}}>
                        {expanded ?  <ArrowDropDownIcon /> : <ArrowRightIcon />}
                    </ListItemIcon>
                    <ListItemText primary={configKey} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                { expanded && 
                    <Expandable>
                        {getAbstractValueControl()}
                    </Expandable>
                }
            </ListItem>
        </React.Fragment>
    )
 }

 export default AbstractItem
 
 