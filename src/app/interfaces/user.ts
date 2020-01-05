export interface User {
  photo: string;
  fullName: string;
  birthDate: string;
  team: string;
}

export const defaultUser: User = {
  photo: '',
  fullName: '',
  birthDate: '',
  team: ''
}
export type Users = Array<User>;
