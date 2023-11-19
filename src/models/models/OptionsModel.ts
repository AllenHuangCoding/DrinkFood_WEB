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
 * @interface OptionsModel
 */
export interface OptionsModel {
    /**
     * 
     * @type {string}
     * @memberof OptionsModel
     */
    ID?: string;
    /**
     * 
     * @type {string}
     * @memberof OptionsModel
     */
    Text?: string | null;
}

/**
 * Check if a given object implements the OptionsModel interface.
 */
export function instanceOfOptionsModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OptionsModelFromJSON(json: any): OptionsModel {
    return OptionsModelFromJSONTyped(json, false);
}

export function OptionsModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): OptionsModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ID': !exists(json, 'ID') ? undefined : json['ID'],
        'Text': !exists(json, 'Text') ? undefined : json['Text'],
    };
}

export function OptionsModelToJSON(value?: OptionsModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ID': value.ID,
        'Text': value.Text,
    };
}
