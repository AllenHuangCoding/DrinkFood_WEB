/* tslint:disable */
/* eslint-disable */
/**
 * 訂餐系統
 * 系統API規格說明
 *
 * The version of the OpenAPI document: v1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ResponseStoreListModel,
} from '../models/index';
import {
    ResponseStoreListModelFromJSON,
    ResponseStoreListModelToJSON,
} from '../models/index';

export interface ApiStoreGetStoreListGetRequest {
    searchKey?: string;
}

export interface ApiStoreGetStoreStoreIDGetRequest {
    storeID: string;
}

/**
 * 
 */
export class StoreApi extends runtime.BaseAPI {

    /**
     */
    async apiStoreGetStoreListGetRaw(requestParameters: ApiStoreGetStoreListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ResponseStoreListModel>>> {
        const queryParameters: any = {};

        if (requestParameters.searchKey !== undefined) {
            queryParameters['SearchKey'] = requestParameters.searchKey;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Store/GetStoreList`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ResponseStoreListModelFromJSON));
    }

    /**
     */
    async apiStoreGetStoreListGet(requestParameters: ApiStoreGetStoreListGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ResponseStoreListModel>> {
        const response = await this.apiStoreGetStoreListGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiStoreGetStoreStoreIDGetRaw(requestParameters: ApiStoreGetStoreStoreIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseStoreListModel>> {
        if (requestParameters.storeID === null || requestParameters.storeID === undefined) {
            throw new runtime.RequiredError('storeID','Required parameter requestParameters.storeID was null or undefined when calling apiStoreGetStoreStoreIDGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Store/GetStore/{StoreID}`.replace(`{${"StoreID"}}`, encodeURIComponent(String(requestParameters.storeID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseStoreListModelFromJSON(jsonValue));
    }

    /**
     */
    async apiStoreGetStoreStoreIDGet(requestParameters: ApiStoreGetStoreStoreIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseStoreListModel> {
        const response = await this.apiStoreGetStoreStoreIDGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
