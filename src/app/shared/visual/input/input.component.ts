import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {
  // Aqui são informado os valores do campo que será lido
  @ Input() label : string;
  @ Input() errorMessage : string;
  
  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control: FormControlName


  input : any;

  constructor() { }

  ngOnInit(): void { }


  hasSuccess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }


  ngAfterContentInit(){
    this.input = this.model || this.control
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName')
    }
  }


}

