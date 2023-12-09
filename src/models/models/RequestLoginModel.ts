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
 * @interface RequestLoginModel
 */
export interface RequestLoginModel {
    /**
     * 
     * @type {string}
     * @memberof RequestLoginModel
     */
    Email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RequestLoginModel
     */
    Password?: string | null;
}

/**
 * Check if a given object implements the RequestLoginModel interface.
 */
export function instanceOfRequestLoginModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RequestLoginModelFromJSON(json: any): RequestLoginModel {
    return RequestLoginModelFromJSONTyped(json, false);
}

export function RequestLoginModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestLoginModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'Email': !exists(json, 'Email') ? undefined : json['Email'],
        'Password': !exists(json, 'Password') ? undefined : json['Password'],
    };
}

export function RequestLoginModelToJSON(value?: RequestLoginModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Email': value.Email,
        'Password': value.Password,
    };
}

