import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChargerService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:9090';

  public registerCharger(chargerData: any) {
    return this.http.post(this.API + '/registerCharger', chargerData);
  }

  public getChargers() {
    return this.http.get(this.API + '/getChargers');
  }

  public deleteCharger(id: any) {
    return this.http.delete(this.API + '/deleteCharger?id=' + id);
  }

  public updateChargers(charger: any) {
    return this.http.put(this.API + '/updateChargers', charger);
  }
}
