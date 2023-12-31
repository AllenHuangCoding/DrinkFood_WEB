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
import type { GroupOrderDetailModel } from './GroupOrderDetailModel';
import {
    GroupOrderDetailModelFromJSON,
    GroupOrderDetailModelFromJSONTyped,
    GroupOrderDetailModelToJSON,
} from './GroupOrderDetailModel';

/**
 * 
 * @export
 * @interface ViewOrderAndDetail
 */
export interface ViewOrderAndDetail {
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    BrandOfficialUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    BrandLogoUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    BrandStoreName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    StorePhone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    StoreAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    OrderID?: string;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    OwnerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    OrderNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    OrderStatusDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    OfficeName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    ArrivalTime?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    CloseTime?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    CreateTime?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ViewOrderAndDetail
     */
    ShowAdd?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ViewOrderAndDetail
     */
    ShowClose?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ViewOrderAndDetail
     */
    ShowDelayArrival?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ViewOrderAndDetail
     */
    ShowDelayClose?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ViewOrderAndDetail
     */
    ShowDelayNotify?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ViewOrderAndDetail
     */
    ShowDelayArrivalNotify?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ViewOrderAndDetail
     */
    ShowFinish?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ViewOrderAndDetail
     */
    OrderPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ViewOrderAndDetail
     */
    OrderQuantity?: number;
    /**
     * 
     * @type {Array<GroupOrderDetailModel>}
     * @memberof ViewOrderAndDetail
     */
    Detail?: Array<GroupOrderDetailModel> | null;
}

/**
 * Check if a given object implements the ViewOrderAndDetail interface.
 */
export function instanceOfViewOrderAndDetail(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ViewOrderAndDetailFromJSON(json: any): ViewOrderAndDetail {
    return ViewOrderAndDetailFromJSONTyped(json, false);
}

export function ViewOrderAndDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): ViewOrderAndDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'BrandOfficialUrl': !exists(json, 'BrandOfficialUrl') ? undefined : json['BrandOfficialUrl'],
        'BrandLogoUrl': !exists(json, 'BrandLogoUrl') ? undefined : json['BrandLogoUrl'],
        'BrandStoreName': !exists(json, 'BrandStoreName') ? undefined : json['BrandStoreName'],
        'StorePhone': !exists(json, 'StorePhone') ? undefined : json['StorePhone'],
        'StoreAddress': !exists(json, 'StoreAddress') ? undefined : json['StoreAddress'],
        'OrderID': !exists(json, 'OrderID') ? undefined : json['OrderID'],
        'OwnerName': !exists(json, 'OwnerName') ? undefined : json['OwnerName'],
        'OrderNo': !exists(json, 'OrderNo') ? undefined : json['OrderNo'],
        'OrderStatusDesc': !exists(json, 'OrderStatusDesc') ? undefined : json['OrderStatusDesc'],
        'OfficeName': !exists(json, 'OfficeName') ? undefined : json['OfficeName'],
        'ArrivalTime': !exists(json, 'ArrivalTime') ? undefined : json['ArrivalTime'],
        'CloseTime': !exists(json, 'CloseTime') ? undefined : json['CloseTime'],
        'CreateTime': !exists(json, 'CreateTime') ? undefined : json['CreateTime'],
        'ShowAdd': !exists(json, 'ShowAdd') ? undefined : json['ShowAdd'],
        'ShowClose': !exists(json, 'ShowClose') ? undefined : json['ShowClose'],
        'ShowDelayArrival': !exists(json, 'ShowDelayArrival') ? undefined : json['ShowDelayArrival'],
        'ShowDelayClose': !exists(json, 'ShowDelayClose') ? undefined : json['ShowDelayClose'],
        'ShowDelayNotify': !exists(json, 'ShowDelayNotify') ? undefined : json['ShowDelayNotify'],
        'ShowDelayArrivalNotify': !exists(json, 'ShowDelayArrivalNotify') ? undefined : json['ShowDelayArrivalNotify'],
        'ShowFinish': !exists(json, 'ShowFinish') ? undefined : json['ShowFinish'],
        'OrderPrice': !exists(json, 'OrderPrice') ? undefined : json['OrderPrice'],
        'OrderQuantity': !exists(json, 'OrderQuantity') ? undefined : json['OrderQuantity'],
        'Detail': !exists(json, 'Detail') ? undefined : (json['Detail'] === null ? null : (json['Detail'] as Array<any>).map(GroupOrderDetailModelFromJSON)),
    };
}

export function ViewOrderAndDetailToJSON(value?: ViewOrderAndDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'BrandOfficialUrl': value.BrandOfficialUrl,
        'BrandLogoUrl': value.BrandLogoUrl,
        'BrandStoreName': value.BrandStoreName,
        'StorePhone': value.StorePhone,
        'StoreAddress': value.StoreAddress,
        'OrderID': value.OrderID,
        'OwnerName': value.OwnerName,
        'OrderNo': value.OrderNo,
        'OrderStatusDesc': value.OrderStatusDesc,
        'OfficeName': value.OfficeName,
        'ArrivalTime': value.ArrivalTime,
        'CloseTime': value.CloseTime,
        'CreateTime': value.CreateTime,
        'ShowAdd': value.ShowAdd,
        'ShowClose': value.ShowClose,
        'ShowDelayArrival': value.ShowDelayArrival,
        'ShowDelayClose': value.ShowDelayClose,
        'ShowDelayNotify': value.ShowDelayNotify,
        'ShowDelayArrivalNotify': value.ShowDelayArrivalNotify,
        'ShowFinish': value.ShowFinish,
        'OrderPrice': value.OrderPrice,
        'OrderQuantity': value.OrderQuantity,
        'Detail': value.Detail === undefined ? undefined : (value.Detail === null ? null : (value.Detail as Array<any>).map(GroupOrderDetailModelToJSON)),
    };
}

