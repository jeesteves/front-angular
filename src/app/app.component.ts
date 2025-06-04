import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExemploService } from './services/exemplo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-angular';

  constructor(
    private exemploService: ExemploService
  ){

  }

  testeFuncao(){
    this.testeBackend()
  }

  testeBackend(){
    this.exemploService.getExemplo().subscribe((res) => {
      console.log('Resposta do backend:', res);
    });
  }
}
