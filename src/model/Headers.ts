import * as http from 'http';

export const textHeader: http.OutgoingHttpHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain'
};

export const jsonHeader: http.OutgoingHttpHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
};

export enum statusCodes {
    OK = 200,
    NOT_FOUND = 404
}
