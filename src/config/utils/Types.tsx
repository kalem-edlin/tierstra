
declare module "config-types" {
    export interface ConfigItem<T> {
        value?: T;
        default: T;
        options?: T[]; 
    }
    
    export type PossibleConfigValues = string | number | boolean
    
    export type ConfigItems = Record<string, ConfigItem<PossibleConfigValues>>
}

