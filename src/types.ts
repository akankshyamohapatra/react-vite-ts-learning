export interface UserFormData {

    fname: string;
    lname: string;
    gender: string;
    nationality: string;
    edlevel: string;
    gpa: string;
    school: string;
    city: string;
    dob: string;
    major: string;
    email: string;
    phone: string;
    street: string;
    state: string;

}




export type Theme = "light" | "dark" | "green" | "pink";


export interface UserStore {

    users: UserFormData[];
    editIndex: number | null;

    theme: Theme;

    setTheme: (newTheme: Theme) => void;
    saveUser: (formData: UserFormData) => void;
    deleteUser: (index: number) => void;
    editUser: (index: number) => void;

}



export interface SortConfig {
    key: string | null;
    direction: "asc" | "desc" | null;
}