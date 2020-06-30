import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  public Pseudo='';
  public cacherFormulaire = false;
  public Error= false;
  public Message="Veuillez rentrer un pseudo ou choisir une difficulté";
  public Question = "Quelle est la date de la bataille de Marignan ?";
  public ListeReponse: string[] = ["1515", "1616", "1717", "1818"];
  public difficulte='';
  constructor(public toastCtrl: ToastController) { }

  ngOnInit() {}

  async ShowToast(Message: string) {
    const toast = await this.toastCtrl.create({
      color: "danger",
      message: Message,
      duration: 3000
    });
    toast.present();
  }

  StartGame() {
    console.log("Difficulte "+this.difficulte);
    if(this.Pseudo.length <3 || this.difficulte === '')
    {
      this.cacherFormulaire = false;
      this.ShowToast(this.Message);
    }
    else
    {
      this.cacherFormulaire = true;
    }
  }

}
