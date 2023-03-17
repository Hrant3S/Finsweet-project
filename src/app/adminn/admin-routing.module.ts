import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'authors-n',
        loadChildren: () =>
          import('./authors-n/authors-n.module').then((m) => m.AuthorsNModule),
      },
      {
        path: 'category-n',
        loadChildren: () =>
          import('./category-n/category-n.module').then(
            (m) => m.CategoryNModule
          ),
      },
      {
        path: 'post-all',
        loadChildren: () =>
          import('./post-all/post-all.module').then((m) => m.PostAllModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
