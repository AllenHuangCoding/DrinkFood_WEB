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
  ResponseModel,
} from '../models/index';
import {
    ResponseModelFromJSON,
    ResponseModelToJSON,
} from '../models/index';

/**
 * 
 */
export class BrandApi extends runtime.BaseAPI {

    /**
     */
    async apiBrandBrandOptionsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/Brand/BrandOptions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async apiBrandBrandOptionsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseModel> {
        const response = await this.apiBrandBrandOptionsGetRaw(initOverrides);
        return await response.value();
    }

}
