import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {STATUS_ADOCAO, StatusAdocao} from "../../model/status-adocao.model";

@Component({
  selector: 'app-formulario-animal',
  templateUrl: './formulario-animal.component.html',
  styleUrls: ['./formulario-animal.component.scss']
})
export class FormularioAnimalComponent implements OnInit {

  @Input()
  formulario: FormGroup;

  @Input()
  isAlterar: boolean;

  opcoesStatus: StatusAdocao[] = [];

  ngOnInit() {
    this.opcoesStatus = [...STATUS_ADOCAO]
  }

}
