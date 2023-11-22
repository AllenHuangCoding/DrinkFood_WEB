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


import * as runtime from '../runtime';
import type {
  OrderListModel,
  RequestPostOrderDetailModel,
  RequestPostOrderModel,
  RequestPutOrderTimeModel,
  RequestPutPaymentDateTimeModel,
  RequestPutPaymentModel,
  ResponseModel,
  ResponseOrderDialogOptions,
  ViewDetailHistory,
  ViewOrderAndDetail,
} from '../models/index';
import {
    OrderListModelFromJSON,
    OrderListModelToJSON,
    RequestPostOrderDetailModelFromJSON,
    RequestPostOrderDetailModelToJSON,
    RequestPostOrderModelFromJSON,
    RequestPostOrderModelToJSON,
    RequestPutOrderTimeModelFromJSON,
    RequestPutOrderTimeModelToJSON,
    RequestPutPaymentDateTimeModelFromJSON,
    RequestPutPaymentDateTimeModelToJSON,
    RequestPutPaymentModelFromJSON,
    RequestPutPaymentModelToJSON,
    ResponseModelFromJSON,
    ResponseModelToJSON,
    ResponseOrderDialogOptionsFromJSON,
    ResponseOrderDialogOptionsToJSON,
    ViewDetailHistoryFromJSON,
    ViewDetailHistoryToJSON,
    ViewOrderAndDetailFromJSON,
    ViewOrderAndDetailToJSON,
} from '../models/index';

export interface ApiOrderCloseOrderOrderIDPutRequest {
    orderID: string;
}

export interface ApiOrderDeleteOrderDetailOrderDetailIDDeleteRequest {
    orderDetailID: string;
}

export interface ApiOrderGetCreateOrderDialogOptionsGetRequest {
    typeID?: string;
}

export interface ApiOrderGetOrderDetailHistoryAccountIDGetRequest {
    accountID: string;
}

export interface ApiOrderGetOrderOrderIDGetRequest {
    orderID: string;
}

export interface ApiOrderJoinOrderOrderIDPostRequest {
    orderID: string;
}

export interface ApiOrderPostOrderDetailPostRequest {
    requestPostOrderDetailModel?: RequestPostOrderDetailModel;
}

export interface ApiOrderPostOrderPostRequest {
    requestPostOrderModel?: RequestPostOrderModel;
}

export interface ApiOrderPutOrderTimeOrderIDPutRequest {
    orderID: string;
    requestPutOrderTimeModel?: RequestPutOrderTimeModel;
}

export interface ApiOrderPutPaymentDateTimeOrderDetailIDPutRequest {
    orderDetailID: string;
    requestPutPaymentDateTimeModel?: RequestPutPaymentDateTimeModel;
}

export interface ApiOrderPutPaymentOrderDetailIDPutRequest {
    orderDetailID: string;
    requestPutPaymentModel?: RequestPutPaymentModel;
}

/**
 * 
 */
export class OrderApi extends runtime.BaseAPI {

    /**
     */
    async apiOrderCloseOrderOrderIDPutRaw(requestParameters: ApiOrderCloseOrderOrderIDPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseModel>> {
        if (requestParameters.orderID === null || requestParameters.orderID === undefined) {
            throw new runtime.RequiredError('orderID','Required parameter requestParameters.orderID was null or undefined when calling apiOrderCloseOrderOrderIDPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/Order/CloseOrder/{OrderID}`.replace(`{${"OrderID"}}`, encodeURIComponent(String(requestParameters.orderID))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async apiOrderCloseOrderOrderIDPut(requestParameters: ApiOrderCloseOrderOrderIDPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseModel> {
        const response = await this.apiOrderCloseOrderOrderIDPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiOrderDeleteOrderDetailOrderDetailIDDeleteRaw(requestParameters: ApiOrderDeleteOrderDetailOrderDetailIDDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseModel>> {
        if (requestParameters.orderDetailID === null || requestParameters.orderDetailID === undefined) {
            throw new runtime.RequiredError('orderDetailID','Required parameter requestParameters.orderDetailID was null or undefined when calling apiOrderDeleteOrderDetailOrderDetailIDDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/Order/DeleteOrderDetail/{OrderDetailID}`.replace(`{${"OrderDetailID"}}`, encodeURIComponent(String(requestParameters.orderDetailID))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async apiOrderDeleteOrderDetailOrderDetailIDDelete(requestParameters: ApiOrderDeleteOrderDetailOrderDetailIDDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseModel> {
        const response = await this.apiOrderDeleteOrderDetailOrderDetailIDDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiOrderGetCreateOrderDialogOptionsGetRaw(requestParameters: ApiOrderGetCreateOrderDialogOptionsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseOrderDialogOptions>> {
        const queryParameters: any = {};

        if (requestParameters.typeID !== undefined) {
            queryParameters['TypeID'] = requestParameters.typeID;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/Order/GetCreateOrderDialogOptions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseOrderDialogOptionsFromJSON(jsonValue));
    }

    /**
     */
    async apiOrderGetCreateOrderDialogOptionsGet(requestParameters: ApiOrderGetCreateOrderDialogOptionsGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseOrderDialogOptions> {
        const response = await this.apiOrderGetCreateOrderDialogOptionsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiOrderGetOrderDetailHistoryAccountIDGetRaw(requestParameters: ApiOrderGetOrderDetailHistoryAccountIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ViewDetailHistory>>> {
        if (requestParameters.accountID === null || requestParameters.accountID === undefined) {
            throw new runtime.RequiredError('accountID','Required parameter requestParameters.accountID was null or undefined when calling apiOrderGetOrderDetailHistoryAccountIDGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/Order/GetOrderDetailHistory/{AccountID}`.replace(`{${"AccountID"}}`, encodeURIComponent(String(requestParameters.accountID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ViewDetailHistoryFromJSON));
    }

    /**
     */
    async apiOrderGetOrderDetailHistoryAccountIDGet(requestParameters: ApiOrderGetOrderDetailHistoryAccountIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ViewDetailHistory>> {
        const response = await this.apiOrderGetOrderDetailHistoryAccountIDGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiOrderGetOrderListGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<OrderListModel>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/Order/GetOrderList`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OrderListModelFromJSON));
    }

    /**
     */
    async apiOrderGetOrderListGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<OrderListModel>> {
        const response = await this.apiOrderGetOrderListGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async apiOrderGetOrderOrderIDGetRaw(requestParameters: ApiOrderGetOrderOrderIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ViewOrderAndDetail>> {
        if (requestParameters.orderID === null || requestParameters.orderID === undefined) {
            throw new runtime.RequiredError('orderID','Required parameter requestParameters.orderID was null or undefined when calling apiOrderGetOrderOrderIDGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/Order/GetOrder/{OrderID}`.replace(`{${"OrderID"}}`, encodeURIComponent(String(requestParameters.orderID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ViewOrderAndDetailFromJSON(jsonValue));
    }

    /**
     */
    async apiOrderGetOrderOrderIDGet(requestParameters: ApiOrderGetOrderOrderIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ViewOrderAndDetail> {
        const response = await this.apiOrderGetOrderOrderIDGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiOrderJoinOrderOrderIDPostRaw(requestParameters: ApiOrderJoinOrderOrderIDPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseModel>> {
        if (requestParameters.orderID === null || requestParameters.orderID === undefined) {
            throw new runtime.RequiredError('orderID','Required parameter requestParameters.orderID was null or undefined when calling apiOrderJoinOrderOrderIDPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/Order/JoinOrder/{OrderID}`.replace(`{${"OrderID"}}`, encodeURIComponent(String(requestParameters.orderID))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async apiOrderJoinOrderOrderIDPost(requestParameters: ApiOrderJoinOrderOrderIDPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseModel> {
        const response = await this.apiOrderJoinOrderOrderIDPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiOrderPostOrderDetailPostRaw(requestParameters: ApiOrderPostOrderDetailPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/Order/PostOrderDetail`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RequestPostOrderDetailModelToJSON(requestParameters.requestPostOrderDetailModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async apiOrderPostOrderDetailPost(requestParameters: ApiOrderPostOrderDetailPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseModel> {
        const response = await this.apiOrderPostOrderDetailPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiOrderPostOrderPostRaw(requestParameters: ApiOrderPostOrderPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/Order/PostOrder`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RequestPostOrderModelToJSON(requestParameters.requestPostOrderModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async apiOrderPostOrderPost(requestParameters: ApiOrderPostOrderPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseModel> {
        const response = await this.apiOrderPostOrderPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiOrderPutOrderTimeOrderIDPutRaw(requestParameters: ApiOrderPutOrderTimeOrderIDPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseModel>> {
        if (requestParameters.orderID === null || requestParameters.orderID === undefined) {
            throw new runtime.RequiredError('orderID','Required parameter requestParameters.orderID was null or undefined when calling apiOrderPutOrderTimeOrderIDPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/Order/PutOrderTime/{OrderID}`.replace(`{${"OrderID"}}`, encodeURIComponent(String(requestParameters.orderID))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RequestPutOrderTimeModelToJSON(requestParameters.requestPutOrderTimeModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async apiOrderPutOrderTimeOrderIDPut(requestParameters: ApiOrderPutOrderTimeOrderIDPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseModel> {
        const response = await this.apiOrderPutOrderTimeOrderIDPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiOrderPutPaymentDateTimeOrderDetailIDPutRaw(requestParameters: ApiOrderPutPaymentDateTimeOrderDetailIDPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseModel>> {
        if (requestParameters.orderDetailID === null || requestParameters.orderDetailID === undefined) {
            throw new runtime.RequiredError('orderDetailID','Required parameter requestParameters.orderDetailID was null or undefined when calling apiOrderPutPaymentDateTimeOrderDetailIDPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/Order/PutPaymentDateTime/{OrderDetailID}`.replace(`{${"OrderDetailID"}}`, encodeURIComponent(String(requestParameters.orderDetailID))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RequestPutPaymentDateTimeModelToJSON(requestParameters.requestPutPaymentDateTimeModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async apiOrderPutPaymentDateTimeOrderDetailIDPut(requestParameters: ApiOrderPutPaymentDateTimeOrderDetailIDPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseModel> {
        const response = await this.apiOrderPutPaymentDateTimeOrderDetailIDPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiOrderPutPaymentOrderDetailIDPutRaw(requestParameters: ApiOrderPutPaymentOrderDetailIDPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseModel>> {
        if (requestParameters.orderDetailID === null || requestParameters.orderDetailID === undefined) {
            throw new runtime.RequiredError('orderDetailID','Required parameter requestParameters.orderDetailID was null or undefined when calling apiOrderPutPaymentOrderDetailIDPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/Order/PutPayment/{OrderDetailID}`.replace(`{${"OrderDetailID"}}`, encodeURIComponent(String(requestParameters.orderDetailID))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RequestPutPaymentModelToJSON(requestParameters.requestPutPaymentModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async apiOrderPutPaymentOrderDetailIDPut(requestParameters: ApiOrderPutPaymentOrderDetailIDPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseModel> {
        const response = await this.apiOrderPutPaymentOrderDetailIDPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
