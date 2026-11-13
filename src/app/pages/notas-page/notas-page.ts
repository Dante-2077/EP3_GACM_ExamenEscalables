import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NotaCard } from '../../components/nota-card/nota-card';
import { NotaService } from '../../services/nota-service';

@Component({
  imports: [ReactiveFormsModule, NotaCard],
  selector: 'app-notas-page',
  styleUrl: './notas-page.css',
  templateUrl: './notas-page.html',
})
export class NotasPage implements OnInit {

  private notaService = inject(NotaService);
  public notas = this.notaService.notas;
  public notaCount = this.notaService.notaCount;

  tituloControl = new FormControl("");
  contenidoControl = new FormControl("");

  ngOnInit(): void {
    this.notaService.cargarNotas();
  }

  onGuardar(): void {
    const titulo = (this.tituloControl.value ?? "").trim();
    const contenido = (this.contenidoControl.value ?? "").trim();

    if (!titulo || !contenido) {
      return;
    }

    this.notaService.agregarNota({ titulo, contenido });

    this.tituloControl.reset("");
    this.contenidoControl.reset("");
  }
}
