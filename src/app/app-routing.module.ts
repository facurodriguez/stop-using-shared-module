import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'feature-a',
    loadChildren: () =>
      import('./feature-a/feature-a.module').then((m) => m.FeatureAModule),
  },
  {
    path: 'feature-b',
    loadChildren: () =>
      import('./feature-b/feature-b.module').then((m) => m.FeatureBModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
