import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class SpotyfyService {

  constructor(private http: HttpClient){ 

  }

  getQuery(query: string){
      const url = `https://api.spotify.com/v1/${query}`;

      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQAMcaiPLkkdkpulf0M0ogz0Z1AAjijENm-41lLaJfb3C9QadnUx3FSXBPb0wqS_tM3JeweDpCc3I-jZl5s'
      });

      return this.http.get(url, { headers });
  }


  getNewReleases() {

    return this.getQuery('browse/new-releases')
               .pipe( map( res =>  res['albums'].items));
  }

  getArtistas(termino:string){
    
    return this.getQuery(`search?query=${termino}&type=artist&market=CO&offset=0&limit=15`)
                .pipe( map( data => data['artists'].items));
  }
  //https://api.spotify.com/v1/artists/{id}/top-tracks
  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
  }

  
  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
               .pipe( map(data => data['tracks']));
  }
}
