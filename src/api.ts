export interface EntityConfig{
    primary : ((e? : any) => any)| string;
    database? : string
}