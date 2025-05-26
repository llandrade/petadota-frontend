import {Component, OnInit} from '@angular/core';
import {AnimalService} from "../../services/animal.service";
import {Animal} from "../../model/animal.model";
import {StatusAdocao} from "../../model/status-adocao.model";

@Component({
  selector: 'app-listar-animais',
  templateUrl: './listar-animais.component.html',
  styleUrls: ['./listar-animais.component.scss']
})
export class ListarAnimaisComponent implements OnInit {

  animais: Animal[] = []

  constructor(private animalService: AnimalService) {
  }

  ngOnInit() {
    this.listarAnimais();
  }

  listarAnimais() {
    this.animalService.listar().subscribe({
      next: (animais) => {
        animais.map(animal =>
          animal.statusAdocao = StatusAdocao.valueOfBySigla(animal.statusAdocao as string))
        console.log('### Animais => ', animais);
        this.animais = animais;
      }
    })
  }

  editarAnimal(animal: Animal) {
    console.log('### Editar Animal => ', animal);
  }

  deletarAnimal(animal: Animal) {
    console.log('### Deletar Animal => ', animal);

    this.animalService.excluir(animal.id).subscribe({
      next: () => this.listarAnimais()
    });
  }

}
