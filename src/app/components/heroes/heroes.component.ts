import {Component, OnInit} from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes(): void {
    // @ts-ignore
    this.heroesService.getAllHeroes()
      .subscribe(res => {
        console.log(res);
      });
  }

}
