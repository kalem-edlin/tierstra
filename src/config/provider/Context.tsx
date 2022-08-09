import React from 'react';
import AppConfig from '../AppConfig';

export var AppConfigContext = React.createContext<AppConfig>(new AppConfig())

export const useAppConfig = () => {
    return React.useContext(AppConfigContext)
}

export default AppConfigContext