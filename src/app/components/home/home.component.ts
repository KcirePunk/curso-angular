import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotyfyService } from 'src/app/services/spotyfy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor(private spoti: SpotyfyService) 
  { 
    this.loading = true;
    this.spoti.getNewReleases()
        .subscribe( (res: any) => {
          console.log(res);
          this.nuevasCanciones = res;
          this.loading = false;
        });
  }

  ngOnInit() {

  }

}
