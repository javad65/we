
export interface SpecialStatusModel {
    specialStatusId: number;
    name: string;
    statusType?: boolean;
    canMoreSelect: boolean;


}

export interface SpecialStatusValueModel {
    specialStatusValueId: number;
    specialStatusId: number;
    name: string;
    descreption: string;
    haveMoreDetial: boolean;
    moreSpecialStatusLable: boolean;

}

