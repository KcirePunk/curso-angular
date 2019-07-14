import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotyfyService } from 'src/app/services/spotyfy.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  id: string;
  loading: boolean;
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute,
              private spoity: SpotyfyService) { 
    this.router.params.subscribe( params => {
      //console.log(params['id']);
      this.id = params['id'];
      this.getArtista();
      this.getTopTracks(this.id);
    });
    this.loading = true;
  }

  ngOnInit() {
  }

  getArtista(){
    this.loading = true;
    this.spoity.getArtista(this.id).subscribe( res => {
        this.artista = res;
        this.loading = false;
    });
  }

  getTopTracks(id:string){
    this.spoity.getTopTracks(id)
        .subscribe( res => {
            console.log(res);
            this.topTracks = res;
        });
  }
  
}
