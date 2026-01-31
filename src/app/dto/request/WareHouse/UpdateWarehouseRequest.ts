import { WareHouseType } from "../../../helper/enums/WareHouseType";

export interface UpdateWarehouseRequest {
  name: string;
  address: string;
  phone: string;
  email: string;
  wareHouseType: WareHouseType;
  managerId?: string;
}
