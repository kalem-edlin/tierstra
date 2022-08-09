import { ConfigItem, ConfigItems, PossibleConfigValues } from 'config-types';

class Config {
    
    private items: ConfigItems

    public getItem = (key: string): ConfigItem<PossibleConfigValues> => {
        const item = this.items[key]
        if ( !item ) throw new Error("Config Key does not exist")
        return item
    }

    public get = (key: string): PossibleConfigValues => {
        const item = this.getItem(key)
        return item.value ?? item.default
    }

    public get entries() {
        return Object.entries(this.items)
    }

    // ISSUE011
    // This function will apply the input object properties if they exist in ITEMS to the app config
    public apply = (input: Record<string, any>): Config => {
        const items = Object.assign(this.items, {})

        Object.keys(input).forEach((key) => {
            if ( key in items ) {
                const item = items[key]
                const newValue = input[key]
                if ( ( item.options && !item.options.includes(newValue) ) || typeof newValue !== typeof item.default ) { //might need to be in elseIF
                    return;
                }
                items[key].value = newValue
            }
        })
        return new Config(items)
    }

    constructor(defaults: ConfigItems) {
        this.items = JSON.parse(JSON.stringify(defaults)) //ISSUE015
    }
}

export default Config



