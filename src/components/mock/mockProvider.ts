import {
  BaseKey,
  BaseRecord,
  CreateResponse,
  CrudFilters,
  CrudSorting,
  DataProvider,
  DeleteOneResponse,
  GetListResponse,
  GetOneResponse,
  MetaQuery,
  Pagination,
  UpdateResponse,
} from "@refinedev/core";
import { companyApi } from "./company";

const mockProvider: DataProvider = {
  //   getList: async ({ resource, pagination }) => {
  //     const { data } = await companyApi.getCompany();
  //     return {
  //       data: data[0],
  //       total: 0,
  //     };
  //   },
  getOne: function <TData extends BaseRecord = BaseRecord>(params: {
    resource: string;
    id: BaseKey;
    meta?: MetaQuery | undefined;
    metaData?: MetaQuery | undefined;
  }): Promise<GetOneResponse<TData>> {
    throw new Error("Function not implemented.");
  },
  create: function <
    TData extends BaseRecord = BaseRecord,
    TVariables = {}
  >(params: {
    resource: string;
    variables: TVariables;
    meta?: MetaQuery | undefined;
    metaData?: MetaQuery | undefined;
  }): Promise<CreateResponse<TData>> {
    throw new Error("Function not implemented.");
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
  getList: function <TData extends BaseRecord = BaseRecord>(params: {
    resource: string;
    pagination?: Pagination | undefined;
    hasPagination?: boolean | undefined;
    sort?: CrudSorting | undefined;
    sorters?: CrudSorting | undefined;
    filters?: CrudFilters | undefined;
    meta?: MetaQuery | undefined;
    metaData?: MetaQuery | undefined;
    dataProviderName?: string | undefined;
  }): Promise<GetListResponse<TData>> {
    throw new Error("Function not implemented.");
  },
};
