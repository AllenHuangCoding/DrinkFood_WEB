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
  ViewMenu,
} from '../models/index';
import {
    ViewMenuFromJSON,
    ViewMenuToJSON,
} from '../models/index';

export interface ApiMenuGetBrandMenuListBrandIDGetRequest {
    brandID: string;
    storeID?: string;
}

export interface ApiMenuGetStoreMenuListStoreIDGetRequest {
    storeID: string;
}

/**
 * 
 */
export class MenuApi extends runtime.BaseAPI {

    /**
     */
    async apiMenuGetBrandMenuListBrandIDGetRaw(requestParameters: ApiMenuGetBrandMenuListBrandIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ViewMenu>>> {
        if (requestParameters.brandID === null || requestParameters.brandID === undefined) {
            throw new runtime.RequiredError('brandID','Required parameter requestParameters.brandID was null or undefined when calling apiMenuGetBrandMenuListBrandIDGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.storeID !== undefined) {
            queryParameters['StoreID'] = requestParameters.storeID;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Menu/GetBrandMenuList/{BrandID}`.replace(`{${"BrandID"}}`, encodeURIComponent(String(requestParameters.brandID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ViewMenuFromJSON));
    }

    /**
     */
    async apiMenuGetBrandMenuListBrandIDGet(requestParameters: ApiMenuGetBrandMenuListBrandIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ViewMenu>> {
        const response = await this.apiMenuGetBrandMenuListBrandIDGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiMenuGetStoreMenuListStoreIDGetRaw(requestParameters: ApiMenuGetStoreMenuListStoreIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ViewMenu>> {
        if (requestParameters.storeID === null || requestParameters.storeID === undefined) {
            throw new runtime.RequiredError('storeID','Required parameter requestParameters.storeID was null or undefined when calling apiMenuGetStoreMenuListStoreIDGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Menu/GetStoreMenuList/{StoreID}`.replace(`{${"StoreID"}}`, encodeURIComponent(String(requestParameters.storeID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ViewMenuFromJSON(jsonValue));
    }

    /**
     */
    async apiMenuGetStoreMenuListStoreIDGet(requestParameters: ApiMenuGetStoreMenuListStoreIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ViewMenu> {
        const response = await this.apiMenuGetStoreMenuListStoreIDGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
