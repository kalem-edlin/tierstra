import React from 'react';
import AppConfig from '../AppConfig';

export interface AppConfigContextType {
    appConfig: AppConfig;
    setAppConfig?: (x: AppConfig) => void;
}

export const AppConfigContext = React.createContext<AppConfigContextType>({appConfig: new AppConfig()})

export const useAppConfig = () => {
    return React.useContext(AppConfigContext)
}

export default AppConfigContext