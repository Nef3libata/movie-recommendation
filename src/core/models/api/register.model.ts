export interface UserValuesPayload {
  phoneNumber: string;
  email: string;
  password: string;
}

export interface UserValuesFormikModel {
  phoneNumber: string;
  email: string;
  password: string;
  repeatPassword: string;
}
