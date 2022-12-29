export enum WorkingPossition {
    JUNIOR = 'junior',
    PROGRAMMER = 'programmer',
    ENGINNER = 'enginner',
    EXPERT = 'expert',
    MANAGER = 'manager'
}

export interface Employee {
    name: string;
    age: number;
    admin: boolean;
    possition: WorkingPossition
}
