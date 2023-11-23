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
 * @interface RequestUpdateProfileModel
 */
export interface RequestUpdateProfileModel {
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateProfileModel
     */
    Brief?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateProfileModel
     */
    LunchDefaultPayment?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateProfileModel
     */
    DrinkDefaultPayment?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RequestUpdateProfileModel
     */
    LunchNotify?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RequestUpdateProfileModel
     */
    DrinkNotify?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateProfileModel
     */
    CloseNotify?: number;
}

/**
 * Check if a given object implements the RequestUpdateProfileModel interface.
 */
export function instanceOfRequestUpdateProfileModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RequestUpdateProfileModelFromJSON(json: any): RequestUpdateProfileModel {
    return RequestUpdateProfileModelFromJSONTyped(json, false);
}

export function RequestUpdateProfileModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestUpdateProfileModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'Brief': !exists(json, 'Brief') ? undefined : json['Brief'],
        'LunchDefaultPayment': !exists(json, 'LunchDefaultPayment') ? undefined : json['LunchDefaultPayment'],
        'DrinkDefaultPayment': !exists(json, 'DrinkDefaultPayment') ? undefined : json['DrinkDefaultPayment'],
        'LunchNotify': !exists(json, 'LunchNotify') ? undefined : json['LunchNotify'],
        'DrinkNotify': !exists(json, 'DrinkNotify') ? undefined : json['DrinkNotify'],
        'CloseNotify': !exists(json, 'CloseNotify') ? undefined : json['CloseNotify'],
    };
}

export function RequestUpdateProfileModelToJSON(value?: RequestUpdateProfileModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Brief': value.Brief,
        'LunchDefaultPayment': value.LunchDefaultPayment,
        'DrinkDefaultPayment': value.DrinkDefaultPayment,
        'LunchNotify': value.LunchNotify,
        'DrinkNotify': value.DrinkNotify,
        'CloseNotify': value.CloseNotify,
    };
}

