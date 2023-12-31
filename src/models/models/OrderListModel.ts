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
 * @interface OrderListModel
 */
export interface OrderListModel {
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    OrderID: string;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    OwnerID?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    OwnerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    OwnerBrief?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    OrderNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    Type?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    TypeDesc?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof OrderListModel
     */
    IsPublic?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    ShareUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    ArrivalTime?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof OrderListModel
     */
    OpenTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    CloseTime?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof OrderListModel
     */
    CloseRemindTime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    Remark?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    OrderStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    OrderStatusDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    CreateTime?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    OfficeID?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    OfficeName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    BrandID?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    BrandName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    BrandLogoUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    BrandOfficialUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    StoreID?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    StoreName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    StorePhone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    StoreAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    BrandStoreName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    OfficeOwner?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    StatusDescPublicDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderListModel
     */
    IsPublicDesc?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof OrderListModel
     */
    ShowAdd?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrderListModel
     */
    ShowClose?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrderListModel
     */
    ShowDelayArrival?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrderListModel
     */
    ShowDelayClose?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrderListModel
     */
    ShowDelayNotify?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrderListModel
     */
    ShowDelayArrivalNotify?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrderListModel
     */
    ShowFinish?: boolean;
}

/**
 * Check if a given object implements the OrderListModel interface.
 */
export function instanceOfOrderListModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "OrderID" in value;

    return isInstance;
}

export function OrderListModelFromJSON(json: any): OrderListModel {
    return OrderListModelFromJSONTyped(json, false);
}

export function OrderListModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderListModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'OrderID': json['OrderID'],
        'OwnerID': !exists(json, 'OwnerID') ? undefined : json['OwnerID'],
        'OwnerName': !exists(json, 'OwnerName') ? undefined : json['OwnerName'],
        'OwnerBrief': !exists(json, 'OwnerBrief') ? undefined : json['OwnerBrief'],
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
        'ShowAdd': !exists(json, 'ShowAdd') ? undefined : json['ShowAdd'],
        'ShowClose': !exists(json, 'ShowClose') ? undefined : json['ShowClose'],
        'ShowDelayArrival': !exists(json, 'ShowDelayArrival') ? undefined : json['ShowDelayArrival'],
        'ShowDelayClose': !exists(json, 'ShowDelayClose') ? undefined : json['ShowDelayClose'],
        'ShowDelayNotify': !exists(json, 'ShowDelayNotify') ? undefined : json['ShowDelayNotify'],
        'ShowDelayArrivalNotify': !exists(json, 'ShowDelayArrivalNotify') ? undefined : json['ShowDelayArrivalNotify'],
        'ShowFinish': !exists(json, 'ShowFinish') ? undefined : json['ShowFinish'],
    };
}

export function OrderListModelToJSON(value?: OrderListModel | null): any {
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
        'OwnerBrief': value.OwnerBrief,
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
        'ShowAdd': value.ShowAdd,
        'ShowClose': value.ShowClose,
        'ShowDelayArrival': value.ShowDelayArrival,
        'ShowDelayClose': value.ShowDelayClose,
        'ShowDelayNotify': value.ShowDelayNotify,
        'ShowDelayArrivalNotify': value.ShowDelayArrivalNotify,
        'ShowFinish': value.ShowFinish,
    };
}

