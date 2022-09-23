import {GuestType} from "./GuestType";

export interface Customer {
  idCustomer: number;
  name: string;
  dayOfBirth: string;
  gender: boolean;
  personalCode: string;
  phoneNumber: string;
  email: string;
  address: string;
  guestType: GuestType;

}
