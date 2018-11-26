import { DonneesService } from './../services/donnees.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.scss']
})
export class LivresComponent implements OnInit {
  livre = '';
  listeLivres = [];
  constructor(private livresService: DonneesService) { }

  ngOnInit() {
    this.listeLivres = this.livresService.getListLivres();
  }

  ajouterLivre(livre) {
    if (livre === '') {
      console.log('Livre doit pas vide');
    } else {
      this.listeLivres.push(livre);
      console.log('Liste de livres : ' + this.listeLivres);
    }
  }

}
