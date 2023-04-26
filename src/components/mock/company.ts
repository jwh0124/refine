import { GetListResponse } from "@refinedev/core";

export const companyList = {
  data: [{ id: 1, name: "대쉬보드 읽기" }],
};

export interface ICompany {
  id: number;
  name: string;
}
export const getList = () => {
  const companys: GetListResponse<> = {
    data: [],
    total: 10,
  };
  return Promise.resolve(companyList);
};

class CompanyApi {}

export const companyApi = new CompanyApi();
