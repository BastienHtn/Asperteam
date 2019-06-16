import { Component } from "@angular/core";

@Component({
  selector: 'theme-root',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})

export class ThemeComponent {

  listeTheme: any[] = [];
  themeSelected: any;

  listeUserTest = ['PIN Wesley', 'BISENIUS Romain', 'BOUTROIS Benjamin', 'HATON Bastien'];
  nbUserToAdd = [''];
  listeUserToAdd = [''];
  nameNewTheme = '';
  descNewTheme = '';

  nameNewEtape = '';
  dateNewEtape: any;
  userNewEtape = '';


  constructor() {

  }

  addTheme() {
    let newTheme = {
      'name': this.nameNewTheme,
      'desc': this.descNewTheme,
      'users': this.listeUserToAdd,
      'tasks': []
    }
    this.listeTheme.push(newTheme);
    this.cleanFieldTheme();
  }

  addEtape(theme) {
    let newEtape = {
      'name': this.nameNewEtape,
      'user': this.userNewEtape,
      'date': this.dateNewEtape
    }
    theme.tasks.push(newEtape);
    this.cleanFieldEtape();
  }

  cleanFieldTheme() {
    this.listeUserToAdd = [''];
    this.nbUserToAdd = [''];
    this.nameNewTheme = '';
    this.descNewTheme = '';
  }

  cleanFieldEtape() {
    this.nameNewEtape = '';
    this.dateNewEtape = '';
    this.userNewEtape = '';
  }

  changeNameTheme(event) {
    this.nameNewTheme = event.target.value;
  }

  changeDescTheme(event) {
    this.descNewTheme = event.target.value;
  }

  addUserToTheme() {
    this.nbUserToAdd.push('');
    this.listeUserToAdd.push('');
  }

  changeUser(evt, index) {
    this.listeUserToAdd[index] = evt.target.value;
  }

  selectTheme(id) {
    this.themeSelected = this.listeTheme[id];
  }

  changeNameEtape(event) {
    this.nameNewEtape = event.target.value;
  }

  changeUserEtape(event) {
    this.userNewEtape = event.target.value;
  }

  changeDateEtape(event) {
    this.dateNewEtape = event.target.value;
  }

  cancelModal() {
    this.cleanFieldEtape();
    this.cleanFieldTheme();
  }
}
