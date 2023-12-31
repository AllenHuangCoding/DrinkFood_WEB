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
 * @interface OrderDetailListModel
 */
export interface OrderDetailListModel {
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    OrderDetailID: string;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    OrderID?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    DrinkFoodID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    DrinkFoodName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OrderDetailListModel
     */
    DrinkFoodPrice?: number | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    DrinkFoodRemark?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    SugarID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    SugarDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    IceID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    IceDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    SizeID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    SizeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    DetailAccountID?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    Name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    Brief?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    Email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    PaymentID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    PaymentDesc?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof OrderDetailListModel
     */
    PaymentDatetime?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof OrderDetailListModel
     */
    Quantity?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof OrderDetailListModel
     */
    IsPickup?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    DetailRemark?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    OrderStatus?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof OrderDetailListModel
     */
    ArrivalTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof OrderDetailListModel
     */
    CloseTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    OwnerID?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    BrandName?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof OrderDetailListModel
     */
    ShowDelete?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderDetailListModel
     */
    PickUpDesc?: string | null;
}

/**
 * Check if a given object implements the OrderDetailListModel interface.
 */
export function instanceOfOrderDetailListModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "OrderDetailID" in value;

    return isInstance;
}

export function OrderDetailListModelFromJSON(json: any): OrderDetailListModel {
    return OrderDetailListModelFromJSONTyped(json, false);
}

export function OrderDetailListModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderDetailListModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'OrderDetailID': json['OrderDetailID'],
        'OrderID': !exists(json, 'OrderID') ? undefined : json['OrderID'],
        'DrinkFoodID': !exists(json, 'DrinkFoodID') ? undefined : json['DrinkFoodID'],
        'DrinkFoodName': !exists(json, 'DrinkFoodName') ? undefined : json['DrinkFoodName'],
        'DrinkFoodPrice': !exists(json, 'DrinkFoodPrice') ? undefined : json['DrinkFoodPrice'],
        'DrinkFoodRemark': !exists(json, 'DrinkFoodRemark') ? undefined : json['DrinkFoodRemark'],
        'SugarID': !exists(json, 'SugarID') ? undefined : json['SugarID'],
        'SugarDesc': !exists(json, 'SugarDesc') ? undefined : json['SugarDesc'],
        'IceID': !exists(json, 'IceID') ? undefined : json['IceID'],
        'IceDesc': !exists(json, 'IceDesc') ? undefined : json['IceDesc'],
        'SizeID': !exists(json, 'SizeID') ? undefined : json['SizeID'],
        'SizeDesc': !exists(json, 'SizeDesc') ? undefined : json['SizeDesc'],
        'DetailAccountID': !exists(json, 'DetailAccountID') ? undefined : json['DetailAccountID'],
        'Name': !exists(json, 'Name') ? undefined : json['Name'],
        'Brief': !exists(json, 'Brief') ? undefined : json['Brief'],
        'Email': !exists(json, 'Email') ? undefined : json['Email'],
        'PaymentID': !exists(json, 'PaymentID') ? undefined : json['PaymentID'],
        'PaymentDesc': !exists(json, 'PaymentDesc') ? undefined : json['PaymentDesc'],
        'PaymentDatetime': !exists(json, 'PaymentDatetime') ? undefined : (json['PaymentDatetime'] === null ? null : new Date(json['PaymentDatetime'])),
        'Quantity': !exists(json, 'Quantity') ? undefined : json['Quantity'],
        'IsPickup': !exists(json, 'IsPickup') ? undefined : json['IsPickup'],
        'DetailRemark': !exists(json, 'DetailRemark') ? undefined : json['DetailRemark'],
        'OrderStatus': !exists(json, 'OrderStatus') ? undefined : json['OrderStatus'],
        'ArrivalTime': !exists(json, 'ArrivalTime') ? undefined : (new Date(json['ArrivalTime'])),
        'CloseTime': !exists(json, 'CloseTime') ? undefined : (new Date(json['CloseTime'])),
        'OwnerID': !exists(json, 'OwnerID') ? undefined : json['OwnerID'],
        'BrandName': !exists(json, 'BrandName') ? undefined : json['BrandName'],
        'ShowDelete': !exists(json, 'ShowDelete') ? undefined : json['ShowDelete'],
        'PickUpDesc': !exists(json, 'PickUpDesc') ? undefined : json['PickUpDesc'],
    };
}

export function OrderDetailListModelToJSON(value?: OrderDetailListModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'OrderDetailID': value.OrderDetailID,
        'OrderID': value.OrderID,
        'DrinkFoodID': value.DrinkFoodID,
        'DrinkFoodName': value.DrinkFoodName,
        'DrinkFoodPrice': value.DrinkFoodPrice,
        'DrinkFoodRemark': value.DrinkFoodRemark,
        'SugarID': value.SugarID,
        'SugarDesc': value.SugarDesc,
        'IceID': value.IceID,
        'IceDesc': value.IceDesc,
        'SizeID': value.SizeID,
        'SizeDesc': value.SizeDesc,
        'DetailAccountID': value.DetailAccountID,
        'Name': value.Name,
        'Brief': value.Brief,
        'Email': value.Email,
        'PaymentID': value.PaymentID,
        'PaymentDesc': value.PaymentDesc,
        'PaymentDatetime': value.PaymentDatetime === undefined ? undefined : (value.PaymentDatetime === null ? null : value.PaymentDatetime.toISOString()),
        'Quantity': value.Quantity,
        'IsPickup': value.IsPickup,
        'DetailRemark': value.DetailRemark,
        'OrderStatus': value.OrderStatus,
        'ArrivalTime': value.ArrivalTime === undefined ? undefined : (value.ArrivalTime.toISOString()),
        'CloseTime': value.CloseTime === undefined ? undefined : (value.CloseTime.toISOString()),
        'OwnerID': value.OwnerID,
        'BrandName': value.BrandName,
        'ShowDelete': value.ShowDelete,
        'PickUpDesc': value.PickUpDesc,
    };
}

