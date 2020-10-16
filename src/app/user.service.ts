import { Injectable } from '@angular/core';
import { UrlDefine } from './helps/url';
import { CallApiService } from './call-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private callApi: CallApiService) { }

  public login(data: object) {
    return this.callApi.post(UrlDefine.login.toString(), data);
  }
  public fetchAllUser() {
    return this.callApi.get(UrlDefine.getAll.toString());
  }
}
