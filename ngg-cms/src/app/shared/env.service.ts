import { Injectable } from '@angular/core';

@Injectable()
export class EnvService {

  private env: any;

  setEnv(env: any): void {
    console.log('setting env')
    this.env = env;
  }

  getEnv(): any {
    return this.env;
  }



}
