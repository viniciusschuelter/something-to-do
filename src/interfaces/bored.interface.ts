

export enum BoredTypeEnum {
    education = 'education',
    recreational = 'recreational',
    social = 'social',
    diy = 'diy',
    charity = 'charity',
    cooking = 'cooking',
    relaxation = 'relaxation',
    music = 'music',
    busywork = 'busywork'
}

export interface BoredInterface {
    activity: string;
    accessibility: number;
    type: BoredTypeEnum;
    participants: number;
    price: number;
    key: number;
    link?: string;
    error?: string;
}

export interface BoredRangeValues {
    minaccessibility: number;
    maxaccessibility: number;
    minprice: number;
    maxprice: number;
}

export type BoredFilter = Pick<BoredInterface, 'type' | 'participants'> & BoredRangeValues;

export const initialBoredFilters: BoredFilter = {
    participants: 1,
    type: BoredTypeEnum.education,
    minaccessibility: 0,
    maxaccessibility: 1,
    minprice: 0,
    maxprice: 1,
}
