import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, Response, RequestOptionsArgs, ConnectionBackend, RequestOptions} from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class HTTPIntercepterService extends Http {

    constructor(_backend: ConnectionBackend, _defaultOptoins: RequestOptions) {
        super(_backend, _defaultOptoins);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        this.requestInterceptor();
        const reqOptions: RequestOptionsArgs = this.createGenericRequestOptions(options);

        return super.get(url, reqOptions)
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(this.onFinally);
    }

    /*post(url, data) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    }*/

    post(url:string, body: any, options?: RequestOptionsArgs): Observable<Response> {

        this.requestInterceptor();
        const reqOptions: RequestOptionsArgs = this.createGenericRequestOptions(options);
        reqOptions.headers.append('Content-Type', 'application/json'); //ideally it will come from respective service

        return super.post(url, body, reqOptions)
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(this.onFinally);
    }

    private requestInterceptor() {
        //do some common stuff like show hide loaders using loader service etc.
        // we can have any data transformer intecdptor as well here

    }

    private responseInterceptor(): void {
        alert("hide loader");
    }

    private onSubscribeSuccess(res: Response): Response {
        console.log('in subscribe success');
        return res;
    }

    private onSubscribeError(error): void {
        console.log("in Error")
        console.log(error);
    }

    private onCatch(error): Observable<any> {
        console.log("in catch")
        return Observable.throw(error);
    }

    private onFinally() {
        console.log("in finally")
    }

    private createGenericRequestOptions(options: RequestOptionsArgs): RequestOptionsArgs{

        if(!options) {
            options = new RequestOptions();
        }
        if(!options.headers) {
            options.headers = new Headers();
        }
        options.headers.append('Authorization', 'Basic ' +
            btoa('username:password'));

        /*add specific headers which are generic*/

        return options;

    }
}
