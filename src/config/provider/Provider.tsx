import React, { ReactNode, useEffect, useState } from 'react'
import AppConfig from '../AppConfig'
import DebugDrawer from '../components/Drawer'
import Context, { useAppConfig } from './Context'

type ProviderProps = { children: ReactNode }

const Provider = ({ children }: ProviderProps) => {
    const [appConfig, setAppConfig] = useState<AppConfig>(useAppConfig())

    // The onload lifecycle method here will load an updated version of the app config into the application.
    useEffect(() => {
        appConfig.updated().then( (config: AppConfig) => { setAppConfig(config) })
    }, [])

    return (
        <Context.Provider value={appConfig} >
            {children}
            <DebugDrawer setAppConfig={setAppConfig}/>
        </Context.Provider>
    )
}

export default Provider
