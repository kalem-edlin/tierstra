import { Box, Divider, List, ListItem, ListItemButton, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import AppConfig from '../AppConfig';
import { useAppConfig } from '../provider/Context';
import useConfigHotKey from './HotKey';
import AbstractItem from './Item';

const Wrapper = styled(Box)`
    min-width: 300px;
`

const DebugDrawer = (props: {setAppConfig: (config: AppConfig) => void}) => {
    const [open, setOpen] = useState<boolean>(false)
    const appConfig = useAppConfig()

    const updateAppConfig = (key: string, value: any) => {
        props.setAppConfig(appConfig.apply({[key]: value}))
    }

    const resetAppConfig = () => {
        var newConfig = new AppConfig
        console.log(newConfig)
        props.setAppConfig(newConfig)
    }

    useConfigHotKey(open, setOpen);

    return (
        // ISSUE016
        <Drawer
            anchor={'right'}
            open={open}
            onClose={() => setOpen(false)}
            elevation={16}
        >
            <Wrapper>
                <List>
                    <ListItem disablePadding>
                        <Typography sx={{p: 2}} variant="h5">Debug Drawer</Typography>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton 
                            sx={{color: '#138FE0'}} 
                            onClick={resetAppConfig} >
                            Reset to Defaults
                        </ListItemButton>
                    </ListItem>
                    <Divider sx={{mt: 1, mb: 1}}/>
                    {appConfig.entries.map(([configKey, configItem]) => (
                        <AbstractItem 
                            key={configKey} 
                            configKey={configKey} 
                            item={configItem} 
                            updateAppConfig={updateAppConfig} />
                    ))}
                </List>
            </Wrapper>
        </Drawer>
    )
}

export default DebugDrawer
