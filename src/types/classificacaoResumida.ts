export interface Driver {
    givenName: string;
    familyName: string;
    code: string;
    driverId: string
}

export interface Constructor {
    constructorId: string;
    name: string;
}

export interface Constructors {
    name: string;
    Constructor: Constructor;
    constructorId: string
    points: number;
    positionText: string;
}

export interface Pilot {
    position: number;
    positionText: number;
    points: number;
    Driver: Driver;
    Constructors: Constructors[];
}