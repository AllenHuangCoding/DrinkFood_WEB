/* tslint:disable */
/* eslint-disable */
/**
 * DrinkFood_API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RequestPostOrderDetailModel
 */
export interface RequestPostOrderDetailModel {
    /**
     * 
     * @type {string}
     * @memberof RequestPostOrderDetailModel
     */
    OD_order_id?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestPostOrderDetailModel
     */
    OD_drink_food_id?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestPostOrderDetailModel
     */
    OD_sugar_id?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestPostOrderDetailModel
     */
    OD_ice_id?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestPostOrderDetailModel
     */
    OD_size_id?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestPostOrderDetailModel
     */
    OD_account_id?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestPostOrderDetailModel
     */
    OD_remark?: string | null;
}

/**
 * Check if a given object implements the RequestPostOrderDetailModel interface.
 */
export function instanceOfRequestPostOrderDetailModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RequestPostOrderDetailModelFromJSON(json: any): RequestPostOrderDetailModel {
    return RequestPostOrderDetailModelFromJSONTyped(json, false);
}

export function RequestPostOrderDetailModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestPostOrderDetailModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'OD_order_id': !exists(json, 'OD_order_id') ? undefined : json['OD_order_id'],
        'OD_drink_food_id': !exists(json, 'OD_drink_food_id') ? undefined : json['OD_drink_food_id'],
        'OD_sugar_id': !exists(json, 'OD_sugar_id') ? undefined : json['OD_sugar_id'],
        'OD_ice_id': !exists(json, 'OD_ice_id') ? undefined : json['OD_ice_id'],
        'OD_size_id': !exists(json, 'OD_size_id') ? undefined : json['OD_size_id'],
        'OD_account_id': !exists(json, 'OD_account_id') ? undefined : json['OD_account_id'],
        'OD_remark': !exists(json, 'OD_remark') ? undefined : json['OD_remark'],
    };
}

export function RequestPostOrderDetailModelToJSON(value?: RequestPostOrderDetailModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'OD_order_id': value.OD_order_id,
        'OD_drink_food_id': value.OD_drink_food_id,
        'OD_sugar_id': value.OD_sugar_id,
        'OD_ice_id': value.OD_ice_id,
        'OD_size_id': value.OD_size_id,
        'OD_account_id': value.OD_account_id,
        'OD_remark': value.OD_remark,
    };
}
