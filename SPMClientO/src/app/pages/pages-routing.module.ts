import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './pages.component';

const routes: Routes = [
    {
        path: '', 
        component: PageComponent, 
        children: [
            { path: '', loadChildren: './starter/starter.module#StarterModule' },
            { path: '', loadChildren: './component/component.module#ComponentsModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
