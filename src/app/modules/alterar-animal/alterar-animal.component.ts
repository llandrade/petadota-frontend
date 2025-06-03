import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormularioAnimalComponent} from "../formulario-animal/formulario-animal.component";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AnimalService} from "../../services/animal.service";
import {ActivatedRoute, Router} from "@angular/router";
import {map, switchMap} from "rxjs";
import {Animal} from "../../model/animal.model";
import {StatusAdocao} from "../../model/status-adocao.model";

@Component({
  selector: 'app-alterar-animal',
  templateUrl: './alterar-animal.component.html',
  styleUrls: ['./alterar-animal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlterarAnimalComponent implements OnInit {

  @ViewChild('formularioAnimalComponent', {static: true})
  formularioAnimalComponent: FormularioAnimalComponent;

  formulario: FormGroup;

  animal: Animal = new Animal();

  constructor(readonly formBuilder: FormBuilder,
              readonly animalService: AnimalService,
              readonly activatedRoute: ActivatedRoute,
              readonly router: Router) {
  }

  ngOnInit() {
    this.initForm(this.animal);
    this.recuperarAnimal();
  }

  recuperarAnimal() {
    if (this.activatedRoute && this.activatedRoute.params) {
      this.activatedRoute.params.pipe(
        map(param => param['id']),
        switchMap(idAnimal => {
          return this.animalService.buscarPorId(idAnimal);
        })
      ).subscribe(animal => {
        animal.statusAdocao = StatusAdocao.valueOfBySigla(animal.statusAdocao as string);
        this.initForm(animal);
      })
    }
  }

  initForm(animal: Animal) {
    this.formulario = this.formBuilder.group({
      id: new FormControl(animal.id),
      nome: new FormControl(animal.nome),
      tipoAnimal: new FormControl(animal.tipoAnimal),
      idade: new FormControl(animal.idade),
      raca: new FormControl(animal.raca),
      statusAdocao: new FormControl(animal.statusAdocao),
      descricao: new FormControl(animal.descricao),
    });
  }

  alterarAnimal() {
    const animal = this.formulario.getRawValue() as Animal;
    animal.statusAdocao = StatusAdocao.getSigla(animal.statusAdocao as StatusAdocao);

    console.log('### Alterando animal => ', animal);

    this.animalService.atualizar(animal.id, animal).subscribe({
      next: (animalAlterado) => {
        console.log('### AnimalModel Alterado => ', animalAlterado);
        this.router.navigate(['']).finally();
      }
    });
  }

}
