import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './../../servicios/heroes.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html'
})
export class HeroeSearchComponent implements OnInit {

  heroes: any[] = [];
  termino: string;
  constructor(private _heroesService: HeroesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });

  }

}
