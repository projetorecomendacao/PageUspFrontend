import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { REST_URL_ORIENTADOR } from 'src/app/shared/constantes/REST_API_URLs';
import { OrientadorForm } from 'src/app/shared/forms/orientador.form';
import { Orientando } from 'src/app/shared/models/orientandos';
import { DAOService } from 'src/app/shared/services/dao.service';

@Component({
  selector: 'app-orientador-edit',
  templateUrl: './orientador-edit.component.html'
})
export class OrientadorEditComponent implements OnInit {

  branco = false;
  errado = false;

  submitted = false;
  id : number;

  public addOrientadorForm: FormGroup; 

  // convenience getter for easy access to form fields
  get f() { return this.addOrientadorForm.controls; }

  constructor(private dao : DAOService, private form: FormBuilder, private orientadorForm : OrientadorForm, 
    private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id == -1){
      this.addOrientadorForm = this.orientadorForm.geraFormGroup();
    } else {
      this.dao.getObject(REST_URL_ORIENTADOR,this.id.toString()).subscribe((data : Orientando) => {
        this.addOrientadorForm = this.orientadorForm.geraFormGroup(data);
      },error => {
        alert('Não foi encontrado o participante para ser alterado..');
        this.router.navigate(['private/orientador']); 
      })
    }
  }

  addParticipant() {
    this.submitted = true;
    if (this.addOrientadorForm.invalid){
      alert ('O formulário possui campos com erro !!!')
      return;
    }
    if (this.id == -1) {
      console.log(this.addOrientadorForm.getRawValue())
      this.dao.postObject(REST_URL_ORIENTADOR, this.addOrientadorForm.getRawValue()).subscribe((data: any) => {
        if (data.id > 0){
          alert('Gravado com sucesso: ' + data.id);          
          this.router.navigate(['private/orientador']);
        } else {
          if (data.id == -1) {
            alert('ERRO - O E-mail do aluno responsável já está cadastrado!!!')
          } else {
            alert('ERRO - O E-mail do aluno dupla já está cadastrado!!!')
          }
        }
      }, error => {
        alert('Não foi possível gravar os dados da dupla'); 
      }); 
    } else {
      this.dao.putObject(REST_URL_ORIENTADOR, this.addOrientadorForm.getRawValue(), this.id.toString()).subscribe((data: any) => {
        if (data.id > 0){
          alert('Gravado com sucesso: ' + data.id);          
          this.router.navigate(['private/orientador']);
        } else {
          if (data.id == -1) {
            alert('ERRO - O E-mail do aluno responsável já está cadastrado!!!')
          } else {
            alert('ERRO - O E-mail do aluno dupla já está cadastrado!!!')
          }
        }      
      }, error => {
        alert('Não foi possível gravar os dados da dupla'); 
      }); 
    }
  }

  cancela(){
    this.router.navigate(['private/orientador']); 
  }

}
