export interface ActionsListType {
    data: Data;
}

export interface Data {
    pageSize:      number;
    pageNumber:    number;
    totalElements: number;
    totalPages:    number;
    data:          Datum[];
}

export interface Datum {
    id:          string;
    name:        string;
    description: string;
    icon:        string;
    color:       string;
    status:      number;
    createdAt:   Date;
}
