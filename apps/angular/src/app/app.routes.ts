import { Route } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: PageOneComponent,
  },
  {
    path: 'page-two',
    component: PageTwoComponent,
  },
];
