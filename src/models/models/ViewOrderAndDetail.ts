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
    OrderID?: string;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    OwnerID?: string;
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
    Type?: string;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    TypeDesc?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ViewOrderAndDetail
     */
    IsPublic?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    ShareUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    ArrivalTime?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof ViewOrderAndDetail
     */
    OpenTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    CloseTime?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof ViewOrderAndDetail
     */
    CloseRemindTime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    Remark?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    OrderStatus?: string | null;
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
    CreateTime?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    OfficeID?: string;
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
    BrandID?: string;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    BrandName?: string | null;
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
    BrandOfficialUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    StoreID?: string;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    StoreName?: string | null;
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
    BrandStoreName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    OfficeOwner?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    StatusDescPublicDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewOrderAndDetail
     */
    IsPublicDesc?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ViewOrderAndDetail
     */
    CanAdd?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ViewOrderAndDetail
     */
    CanClose?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ViewOrderAndDetail
     */
    DelayArrival?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ViewOrderAndDetail
     */
    DelayClose?: boolean;
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
        
        'OrderID': !exists(json, 'OrderID') ? undefined : json['OrderID'],
        'OwnerID': !exists(json, 'OwnerID') ? undefined : json['OwnerID'],
        'OwnerName': !exists(json, 'OwnerName') ? undefined : json['OwnerName'],
        'OrderNo': !exists(json, 'OrderNo') ? undefined : json['OrderNo'],
        'Type': !exists(json, 'Type') ? undefined : json['Type'],
        'TypeDesc': !exists(json, 'TypeDesc') ? undefined : json['TypeDesc'],
        'IsPublic': !exists(json, 'IsPublic') ? undefined : json['IsPublic'],
        'ShareUrl': !exists(json, 'ShareUrl') ? undefined : json['ShareUrl'],
        'ArrivalTime': !exists(json, 'ArrivalTime') ? undefined : json['ArrivalTime'],
        'OpenTime': !exists(json, 'OpenTime') ? undefined : (new Date(json['OpenTime'])),
        'CloseTime': !exists(json, 'CloseTime') ? undefined : json['CloseTime'],
        'CloseRemindTime': !exists(json, 'CloseRemindTime') ? undefined : (json['CloseRemindTime'] === null ? null : new Date(json['CloseRemindTime'])),
        'Remark': !exists(json, 'Remark') ? undefined : json['Remark'],
        'OrderStatus': !exists(json, 'OrderStatus') ? undefined : json['OrderStatus'],
        'OrderStatusDesc': !exists(json, 'OrderStatusDesc') ? undefined : json['OrderStatusDesc'],
        'CreateTime': !exists(json, 'CreateTime') ? undefined : json['CreateTime'],
        'OfficeID': !exists(json, 'OfficeID') ? undefined : json['OfficeID'],
        'OfficeName': !exists(json, 'OfficeName') ? undefined : json['OfficeName'],
        'BrandID': !exists(json, 'BrandID') ? undefined : json['BrandID'],
        'BrandName': !exists(json, 'BrandName') ? undefined : json['BrandName'],
        'BrandLogoUrl': !exists(json, 'BrandLogoUrl') ? undefined : json['BrandLogoUrl'],
        'BrandOfficialUrl': !exists(json, 'BrandOfficialUrl') ? undefined : json['BrandOfficialUrl'],
        'StoreID': !exists(json, 'StoreID') ? undefined : json['StoreID'],
        'StoreName': !exists(json, 'StoreName') ? undefined : json['StoreName'],
        'StorePhone': !exists(json, 'StorePhone') ? undefined : json['StorePhone'],
        'StoreAddress': !exists(json, 'StoreAddress') ? undefined : json['StoreAddress'],
        'BrandStoreName': !exists(json, 'BrandStoreName') ? undefined : json['BrandStoreName'],
        'OfficeOwner': !exists(json, 'OfficeOwner') ? undefined : json['OfficeOwner'],
        'StatusDescPublicDesc': !exists(json, 'StatusDescPublicDesc') ? undefined : json['StatusDescPublicDesc'],
        'IsPublicDesc': !exists(json, 'IsPublicDesc') ? undefined : json['IsPublicDesc'],
        'CanAdd': !exists(json, 'CanAdd') ? undefined : json['CanAdd'],
        'CanClose': !exists(json, 'CanClose') ? undefined : json['CanClose'],
        'DelayArrival': !exists(json, 'DelayArrival') ? undefined : json['DelayArrival'],
        'DelayClose': !exists(json, 'DelayClose') ? undefined : json['DelayClose'],
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
        
        'OrderID': value.OrderID,
        'OwnerID': value.OwnerID,
        'OwnerName': value.OwnerName,
        'OrderNo': value.OrderNo,
        'Type': value.Type,
        'TypeDesc': value.TypeDesc,
        'IsPublic': value.IsPublic,
        'ShareUrl': value.ShareUrl,
        'ArrivalTime': value.ArrivalTime,
        'OpenTime': value.OpenTime === undefined ? undefined : (value.OpenTime.toISOString()),
        'CloseTime': value.CloseTime,
        'CloseRemindTime': value.CloseRemindTime === undefined ? undefined : (value.CloseRemindTime === null ? null : value.CloseRemindTime.toISOString()),
        'Remark': value.Remark,
        'OrderStatus': value.OrderStatus,
        'OrderStatusDesc': value.OrderStatusDesc,
        'CreateTime': value.CreateTime,
        'OfficeID': value.OfficeID,
        'OfficeName': value.OfficeName,
        'BrandID': value.BrandID,
        'BrandName': value.BrandName,
        'BrandLogoUrl': value.BrandLogoUrl,
        'BrandOfficialUrl': value.BrandOfficialUrl,
        'StoreID': value.StoreID,
        'StoreName': value.StoreName,
        'StorePhone': value.StorePhone,
        'StoreAddress': value.StoreAddress,
        'BrandStoreName': value.BrandStoreName,
        'OfficeOwner': value.OfficeOwner,
        'StatusDescPublicDesc': value.StatusDescPublicDesc,
        'IsPublicDesc': value.IsPublicDesc,
        'CanAdd': value.CanAdd,
        'CanClose': value.CanClose,
        'DelayArrival': value.DelayArrival,
        'DelayClose': value.DelayClose,
        'Detail': value.Detail === undefined ? undefined : (value.Detail === null ? null : (value.Detail as Array<any>).map(GroupOrderDetailModelToJSON)),
    };
}

