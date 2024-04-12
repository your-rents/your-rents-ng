export interface City {
    uuid: string;
    name: string;
    localData: {
        itCodiceIstat: string;
        itCodiceErariale: string;
    }
    province: {
        uuid: string;
        name: string;
    }
}
