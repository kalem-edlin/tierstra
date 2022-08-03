import React, { ReactNode, useEffect, useState } from 'react'
import AppConfig from '../AppConfig'
import Context, { useAppConfig } from './Context'

type ProviderProps = { children: ReactNode }

const Provider = ({ children }: ProviderProps) => {
    const [appConfig, setAppConfig] = useState<AppConfig>(useAppConfig().appConfig)

    // The onload lifecycle method here will load an updated version of the app config into the application.
    useEffect(() => {
        appConfig.updated().then( (config: AppConfig) => { setAppConfig(config) })
    }, [])

    useEffect(()=> {
        console.log(appConfig)
    },[appConfig])


    return (
        <Context.Provider value={{appConfig, setAppConfig}} >
            {children}
        </Context.Provider>
    )
}

export default Provider
