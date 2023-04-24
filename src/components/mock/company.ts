import { GetListResponse } from "@refinedev/core";

export const companyList = {
  id: 1,
  name: "대쉬보드 읽기",
};

export interface ICompany {
  id: number;
  name: string;
}

class CompanyApi {
  // getCompany(): Promise<GetListResponse<ICompany[]>> {
  //   const companys: GetListResponse<ICompany[]> = {
  //     data: companyList,
  //     total: 10,
  //   };
  //   return Promise.resolve(companys);
  // }
}

export const companyApi = new CompanyApi();
