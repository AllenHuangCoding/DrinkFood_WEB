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
import type { InfoCardDataModel } from './InfoCardDataModel';
import {
    InfoCardDataModelFromJSON,
    InfoCardDataModelFromJSONTyped,
    InfoCardDataModelToJSON,
} from './InfoCardDataModel';

/**
 * 
 * @export
 * @interface ResponseInfoCardModel
 */
export interface ResponseInfoCardModel {
    /**
     * 
     * @type {Array<InfoCardDataModel>}
     * @memberof ResponseInfoCardModel
     */
    Lunch?: Array<InfoCardDataModel> | null;
    /**
     * 
     * @type {Array<InfoCardDataModel>}
     * @memberof ResponseInfoCardModel
     */
    Drink?: Array<InfoCardDataModel> | null;
    /**
     * 
     * @type {Array<InfoCardDataModel>}
     * @memberof ResponseInfoCardModel
     */
    Teatime?: Array<InfoCardDataModel> | null;
    /**
     * 
     * @type {Array<InfoCardDataModel>}
     * @memberof ResponseInfoCardModel
     */
    Other?: Array<InfoCardDataModel> | null;
}

/**
 * Check if a given object implements the ResponseInfoCardModel interface.
 */
export function instanceOfResponseInfoCardModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResponseInfoCardModelFromJSON(json: any): ResponseInfoCardModel {
    return ResponseInfoCardModelFromJSONTyped(json, false);
}

export function ResponseInfoCardModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseInfoCardModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'Lunch': !exists(json, 'Lunch') ? undefined : (json['Lunch'] === null ? null : (json['Lunch'] as Array<any>).map(InfoCardDataModelFromJSON)),
        'Drink': !exists(json, 'Drink') ? undefined : (json['Drink'] === null ? null : (json['Drink'] as Array<any>).map(InfoCardDataModelFromJSON)),
        'Teatime': !exists(json, 'Teatime') ? undefined : (json['Teatime'] === null ? null : (json['Teatime'] as Array<any>).map(InfoCardDataModelFromJSON)),
        'Other': !exists(json, 'Other') ? undefined : (json['Other'] === null ? null : (json['Other'] as Array<any>).map(InfoCardDataModelFromJSON)),
    };
}

export function ResponseInfoCardModelToJSON(value?: ResponseInfoCardModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Lunch': value.Lunch === undefined ? undefined : (value.Lunch === null ? null : (value.Lunch as Array<any>).map(InfoCardDataModelToJSON)),
        'Drink': value.Drink === undefined ? undefined : (value.Drink === null ? null : (value.Drink as Array<any>).map(InfoCardDataModelToJSON)),
        'Teatime': value.Teatime === undefined ? undefined : (value.Teatime === null ? null : (value.Teatime as Array<any>).map(InfoCardDataModelToJSON)),
        'Other': value.Other === undefined ? undefined : (value.Other === null ? null : (value.Other as Array<any>).map(InfoCardDataModelToJSON)),
    };
}

