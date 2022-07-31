import Config, { ConfigResponse } from 'config-types';
import DefaultAppConfig from './Defaults';

export const getUpdatedAppConfig = (override?: Config): Promise<Config> => {
    if ( override ) { return Promise.resolve(override) }

    // ISSUE010
    return fetch('config.json', {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then((configResponse: ConfigResponse) => {
        const config: Config = JSON.parse(JSON.stringify(DefaultAppConfig)) // ISSUE005
        
        Object.keys(configResponse).forEach((key) => {
            console.log(key in config)
        })

        return config
    })
}

const AppConfig: Promise<Config> = getUpdatedAppConfig()
export default AppConfig