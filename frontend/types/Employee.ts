export default interface Employee {
  id?: string | number;
  name: string;
  gender: string;
  marital_status: string;
  highest_sducation: string;
  date_of_birth?: string;
  manager: string;
  email: string;
  phone_number: string | number;
  skills: string;
  designation: string;
  status: string;
  date_joined: string;
}
