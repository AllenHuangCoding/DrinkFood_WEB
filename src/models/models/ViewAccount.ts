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
 * @interface ViewAccount
 */
export interface ViewAccount {
    /**
     * 
     * @type {string}
     * @memberof ViewAccount
     */
    AccountID?: string;
    /**
     * 
     * @type {string}
     * @memberof ViewAccount
     */
    Name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewAccount
     */
    Brief?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewAccount
     */
    Email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewAccount
     */
    LineID?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ViewAccount
     */
    LunchNotify?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ViewAccount
     */
    DrinkNotify?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ViewAccount
     */
    CloseNotify?: number;
    /**
     * 
     * @type {string}
     * @memberof ViewAccount
     */
    DefaultLunchPayment?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewAccount
     */
    DefaultLunchPaymentDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewAccount
     */
    DefaultDrinkPayment?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ViewAccount
     */
    DefaultDrinkPaymentDesc?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ViewAccount
     */
    IsAdmin?: boolean;
}

/**
 * Check if a given object implements the ViewAccount interface.
 */
export function instanceOfViewAccount(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ViewAccountFromJSON(json: any): ViewAccount {
    return ViewAccountFromJSONTyped(json, false);
}

export function ViewAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): ViewAccount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'AccountID': !exists(json, 'AccountID') ? undefined : json['AccountID'],
        'Name': !exists(json, 'Name') ? undefined : json['Name'],
        'Brief': !exists(json, 'Brief') ? undefined : json['Brief'],
        'Email': !exists(json, 'Email') ? undefined : json['Email'],
        'LineID': !exists(json, 'LineID') ? undefined : json['LineID'],
        'LunchNotify': !exists(json, 'LunchNotify') ? undefined : json['LunchNotify'],
        'DrinkNotify': !exists(json, 'DrinkNotify') ? undefined : json['DrinkNotify'],
        'CloseNotify': !exists(json, 'CloseNotify') ? undefined : json['CloseNotify'],
        'DefaultLunchPayment': !exists(json, 'DefaultLunchPayment') ? undefined : json['DefaultLunchPayment'],
        'DefaultLunchPaymentDesc': !exists(json, 'DefaultLunchPaymentDesc') ? undefined : json['DefaultLunchPaymentDesc'],
        'DefaultDrinkPayment': !exists(json, 'DefaultDrinkPayment') ? undefined : json['DefaultDrinkPayment'],
        'DefaultDrinkPaymentDesc': !exists(json, 'DefaultDrinkPaymentDesc') ? undefined : json['DefaultDrinkPaymentDesc'],
        'IsAdmin': !exists(json, 'IsAdmin') ? undefined : json['IsAdmin'],
    };
}

export function ViewAccountToJSON(value?: ViewAccount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'AccountID': value.AccountID,
        'Name': value.Name,
        'Brief': value.Brief,
        'Email': value.Email,
        'LineID': value.LineID,
        'LunchNotify': value.LunchNotify,
        'DrinkNotify': value.DrinkNotify,
        'CloseNotify': value.CloseNotify,
        'DefaultLunchPayment': value.DefaultLunchPayment,
        'DefaultLunchPaymentDesc': value.DefaultLunchPaymentDesc,
        'DefaultDrinkPayment': value.DefaultDrinkPayment,
        'DefaultDrinkPaymentDesc': value.DefaultDrinkPaymentDesc,
        'IsAdmin': value.IsAdmin,
    };
}
