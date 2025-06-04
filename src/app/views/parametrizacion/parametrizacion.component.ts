import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importaciones de todos los componentes de subsecciones
import { AsesorMicrocreditoComponent } from './secciones/asesor/microcredito/microcredito.component';
import { AsesorIntegralComponent } from './secciones/asesor/integral/integral.component';
import { GestorOperativoComponent } from './secciones/gestor-operativo/gestor-operativo.component';
import { GerenteZonaComponent } from './secciones/gerente/zona/zona.component';
import { GerenteOficinaComponent } from './secciones/gerente/oficina/oficina.component';
import { LiderMicrofinanzasComponent } from './secciones/lider-microfinanzas/lider-microfinanzas.component';
import { DirectorComercialComponent } from './secciones/director-comercial/director-comercial.component';
import { CoordinadorCreditoComponent } from './secciones/coordinador-credito/coordinador-credito.component';
import { AnalistaCarteraComponent } from './secciones/area-cartera/analista-cartera/analista-cartera.component';
import { CoordinadorCarteraComponent } from './secciones/area-cartera/coordinador-cartera/coordinador-cartera.component';

@Component({
  selector: 'app-parametrizacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parametrizacion.component.html',
  styleUrls: ['./parametrizacion.component.scss']
})
export class ParametrizacionComponent {
  secciones = [
    {
      nombre: 'Asesor',
      subsecciones: ['Microcredito', 'Integral']
    },
    {
      nombre: 'Gestor operativo',
      subsecciones: []
    },
    {
      nombre: 'Gerente',
      subsecciones: ['Oficina', 'Zona']
    },
    {
      nombre: 'Lider de Microfinanzas',
      subsecciones: []
    },
    {
      nombre: 'Cartera',
      subsecciones: ['Analista', 'Coordinador']
    },
    {
      nombre: 'Coordinador de credito',
      subsecciones: []
    },
    {
      nombre: 'Director comercial',
      subsecciones: []
    }
  ];

  seccionActiva = this.secciones[0];
  subseccionActiva: string | null = null;

  componentes: Record<string, any> = {
    'asesor-microcredito': AsesorMicrocreditoComponent,
    'asesor-integral': AsesorIntegralComponent,
    'gestor-operativo': GestorOperativoComponent,
    'gerente-zona': GerenteZonaComponent,
    'gerente-oficina': GerenteOficinaComponent,
    'lider-de-microfinanzas': LiderMicrofinanzasComponent,
    'director-comercial': DirectorComercialComponent,
    'cartera-analista': AnalistaCarteraComponent,
    'cartera-coordinador': CoordinadorCarteraComponent,
    'coordinador-de-credito': CoordinadorCreditoComponent
  };

  seleccionarSeccion(seccion: any) {
    this.seccionActiva = seccion;
    this.subseccionActiva = null;
  }

  seleccionarSubseccion(sub: string) {
    this.subseccionActiva = sub;
  }

  get nombreComponente(): string {
    const base = this.seccionActiva.nombre.toLowerCase().replace(/\s+/g, '-');
    const sub = this.subseccionActiva?.toLowerCase().replace(/\s+/g, '-');
    return sub ? `${base}-${sub}` : `${base}`;
  }

  get componenteActual() {
    return this.componentes[this.nombreComponente];
  }
}