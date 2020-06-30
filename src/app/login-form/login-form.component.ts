import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  public Pseudo='';
  public cacherFormulaire = false;
  public Error= false;
  public MessageErreur='';
  public Question = "Quelle est la date de la bataille de Marignan ?";
  public ListeReponse: string[] = ["1515", "1616", "1717", "1818"];
  public difficulte='';
  constructor() { }

  ngOnInit() {}

  StartGame() {
    this.MessageErreur='';
    console.log("Difficulte "+this.difficulte);
    if(this.Pseudo.length <3 /*|| this.difficulte == ''*/)
    {
      this.MessageErreur="Vous devez rentrer un pseudo et choisir une difficulté";
      this.cacherFormulaire = false;
    }
    else
    {
      this.cacherFormulaire = true;
    }
  }

}
