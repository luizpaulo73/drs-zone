export interface Driver {
    givenName: string;
    familyName: string;
}

export interface Constructors {
    name: string;
}

export interface Pilot {
    position: number;
    positionText: number;
    points: number;
    Driver: Driver;
    Constructors: Constructors[];
}