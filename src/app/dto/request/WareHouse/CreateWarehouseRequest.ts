import { WareHouseStatus } from "../../../helper/enums/WareHouseStatus";
import { WareHouseType } from "../../../helper/enums/WareHouseType";

export interface CreateWarehouseRequest {
  code: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  wareHouseType: WareHouseType;
  status: WareHouseStatus;
  managerId?: string;
}
