import { Routes } from '@angular/router';
import { NotasPage } from './pages/notas-page/notas-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
    {path: '', redirectTo: 'notas', pathMatch: 'full'},
    {path: 'notas', component: NotasPage},
    {path: 'not-found', component: NotFoundPage},
    {path: '**', redirectTo: 'not-found', pathMatch: 'full'},
];
