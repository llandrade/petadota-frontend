import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AnimalService} from "../../services/animal.service";
import {Animal} from "../../model/animal.model";
import {STATUS_ADOCAO, StatusAdocao} from "../../model/status-adocao.model";
import {Router} from "@angular/router";
import {FormularioAnimalComponent} from "../formulario-animal/formulario-animal.component";

@Component({
  selector: 'app-cadastrar-animal',
  templateUrl: './cadastrar-animal.component.html',
  styleUrls: ['./cadastrar-animal.component.scss']
})
export class CadastrarAnimalComponent implements OnInit {

  @ViewChild('formularioAnimalComponent', {static: true})
  formularioAnimalComponent: FormularioAnimalComponent;

  formulario: FormGroup;

  constructor(readonly formBuilder: FormBuilder,
              readonly animalService: AnimalService,
              readonly router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formulario = this.formBuilder.group({
      nome: new FormControl(''),
      tipoAnimal: new FormControl(''),
      idade: new FormControl(''),
      raca: new FormControl(''),
      statusAdocao: new FormControl(''),
      descricao: new FormControl(''),
    });
  }

  salvarAnimal() {
    const animal = this.formulario.getRawValue() as Animal;
    animal.statusAdocao = StatusAdocao.getSigla(animal.statusAdocao as StatusAdocao);

    console.log('### Salvando animal => ', animal);

    this.animalService.salvar(animal).subscribe({
      next: (animalSalvo) => {
        console.log('### AnimalModel Salvo => ', animalSalvo);
        this.router.navigate(['']).finally();
      }
    });
  }
}
