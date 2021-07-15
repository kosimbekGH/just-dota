import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class HeroesService {
  constructor(private http: HttpClient) {
  }

  getAllHeroes(){
    return this.http.get(`https://api.opendota.com/api/heroes/1/matches`);
  }
}
