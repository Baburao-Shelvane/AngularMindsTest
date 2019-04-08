import { Injectable } from '@angular/core';
import { DummyApi } from './dummy-api'

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  constructor(private _api: DummyApi) { }

  getProtalData(){
    return this._api.getInterviewList();
  }
}
