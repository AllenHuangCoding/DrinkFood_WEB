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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ViewDetailHistory
 */
export interface ViewDetailHistory {
    /**
     * 
     * @type {string}
     * @memberof ViewDetailHistory
     */
    OrderDetailID?: string;
    /**
     * 
     * @type {string}
     * @memberof ViewDetailHistory
     */
    ArrivalTime?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewDetailHistory
     */
    BrandName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewDetailHistory
     */
    BrandStoreName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewDetailHistory
     */
    DrinkFoodName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ViewDetailHistory
     */
    DrinkFoodPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof ViewDetailHistory
     */
    DetailRemark?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewDetailHistory
     */
    PaymentDesc?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ViewDetailHistory
     */
    Quantity?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ViewDetailHistory
     */
    OfficeName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewDetailHistory
     */
    DetailAccountID?: string;
}

/**
 * Check if a given object implements the ViewDetailHistory interface.
 */
export function instanceOfViewDetailHistory(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ViewDetailHistoryFromJSON(json: any): ViewDetailHistory {
    return ViewDetailHistoryFromJSONTyped(json, false);
}

export function ViewDetailHistoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ViewDetailHistory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'OrderDetailID': !exists(json, 'OrderDetailID') ? undefined : json['OrderDetailID'],
        'ArrivalTime': !exists(json, 'ArrivalTime') ? undefined : json['ArrivalTime'],
        'BrandName': !exists(json, 'BrandName') ? undefined : json['BrandName'],
        'BrandStoreName': !exists(json, 'BrandStoreName') ? undefined : json['BrandStoreName'],
        'DrinkFoodName': !exists(json, 'DrinkFoodName') ? undefined : json['DrinkFoodName'],
        'DrinkFoodPrice': !exists(json, 'DrinkFoodPrice') ? undefined : json['DrinkFoodPrice'],
        'DetailRemark': !exists(json, 'DetailRemark') ? undefined : json['DetailRemark'],
        'PaymentDesc': !exists(json, 'PaymentDesc') ? undefined : json['PaymentDesc'],
        'Quantity': !exists(json, 'Quantity') ? undefined : json['Quantity'],
        'OfficeName': !exists(json, 'OfficeName') ? undefined : json['OfficeName'],
        'DetailAccountID': !exists(json, 'DetailAccountID') ? undefined : json['DetailAccountID'],
    };
}

export function ViewDetailHistoryToJSON(value?: ViewDetailHistory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'OrderDetailID': value.OrderDetailID,
        'ArrivalTime': value.ArrivalTime,
        'BrandName': value.BrandName,
        'BrandStoreName': value.BrandStoreName,
        'DrinkFoodName': value.DrinkFoodName,
        'DrinkFoodPrice': value.DrinkFoodPrice,
        'DetailRemark': value.DetailRemark,
        'PaymentDesc': value.PaymentDesc,
        'Quantity': value.Quantity,
        'OfficeName': value.OfficeName,
        'DetailAccountID': value.DetailAccountID,
    };
}

