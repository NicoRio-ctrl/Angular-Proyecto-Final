import { Routes } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { ContactComponent } from '../components/contact/contact.component';
import { PokeDetailComponent } from '../components/main/main_components/poke-detail/poke-detail.component';
import { PageNotFoundComponent } from '../components/main/main_components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        pathMatch: 'full',
        title: 'PokeBuilder',
    },
    {
        path: 'contact',
        component: ContactComponent,
        pathMatch: 'full',
        title: 'ContactUs'
    },
    {
        path: 'pokemon/:id',
        component: PokeDetailComponent,
        pathMatch: 'full',
        title: 'Pokemon Detail',
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        title: 'Error 404'
    }
];