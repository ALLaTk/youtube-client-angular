export interface Login {
  login: string;
  password: string;
}

export enum LoginButton {
  loginIn = 'logIn',
  loginOut = 'logOut',
  loginColorIn = '#2F80ED',
  loginColorOut = '#F64646',
}
