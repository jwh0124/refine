import {
  BaseKey,
  BaseRecord,
  DataProvider,
  DeleteOneResponse,
  MetaQuery,
  UpdateResponse,
} from "@refinedev/core";
import { companyList } from "./company";

export const mockProvider: DataProvider = {
  getList: async ({ resource, pagination }) => {
    const data: any = companyList;
    return {
      data: data,
      total: data.length,
    };
  },

  getOne: async ({ resource, id, meta }) => {
    var searchData = companyList.filter((e) => e.id === Number(id));
    const data: any = searchData ? searchData[0] : [];
    return {
      data,
    };
  },
  create: async ({ resource, variables, meta }) => {
    console.log(variables);
    const data: any = variables;
    return {
      data,
    };
  },
  update: function <
    TData extends BaseRecord = BaseRecord,
    TVariables = {}
  >(params: {
    resource: string;
    id: BaseKey;
    variables: TVariables;
    meta?: MetaQuery | undefined;
    metaData?: MetaQuery | undefined;
  }): Promise<UpdateResponse<TData>> {
    throw new Error("Function not implemented.");
  },
  deleteOne: function <
    TData extends BaseRecord = BaseRecord,
    TVariables = {}
  >(params: {
    resource: string;
    id: BaseKey;
    variables?: TVariables | undefined;
    meta?: MetaQuery | undefined;
    metaData?: MetaQuery | undefined;
  }): Promise<DeleteOneResponse<TData>> {
    throw new Error("Function not implemented.");
  },
  getApiUrl: function (): string {
    throw new Error("Function not implemented.");
  },
};
