import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  atrybut = '';
  firstName = '';
  items = ['item1', 'item2', 'item3']
  czyWyswietlicListe = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler(){
    this.czyWyswietlicListe = !this.czyWyswietlicListe;
    this.atrybut = this.firstName;
    console.log(this.firstName);
  }

}
