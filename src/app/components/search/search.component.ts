import { Component, OnInit } from '@angular/core';
import { SpotyfyService } from 'src/app/services/spotyfy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotyfyService) { }

  ngOnInit() {
  }

  buscar(termino: string){
      console.log(termino);
      this.loading = true;
      this.spotify.getArtistas(termino)
          .subscribe( (res:any) => {
            console.log(res);
            this.artistas = res;
            this.loading = false;
          });
  }
}
