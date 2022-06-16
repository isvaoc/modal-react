export interface Category {
    CategoryID: number;
    CategoryName: string;
}
export interface Project {
    _id?: string;
    AccountName: string;
    ProjectAccountID: number;
    ProjectID: number;
    ProjectName: string;
    ProjectCategories: Category[];
    ProjectColor: string;
    ProjectStartDate: string;
    ProjectEndDate: string;
    ProjectIsActive: boolean;
    createdAt?: string;
    updatedAt?: string;
}
export interface Activity {
    _id?: string;
    AccountName: string;
    ActivityDate: string;
    ActivityID: number;
    CategoryName: string;
    Comments: string;
    EmployeeID: number;
    ProjectColor: string;
    ProjectID: number;
    ProjectName: string;
    StepID: number;
    Task: string;
    TypeID: number;
    value: number;
    activeInProject: boolean;
    timestamps?: boolean;
    versionKey?: boolean;
}
