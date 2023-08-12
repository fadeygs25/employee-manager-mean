import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UserListComponent } from 'src/app/pages-admin/user-list/user-list.component';
import { ProductListComponent } from 'src/app/pages-admin/product-list/product-list.component';
import { ProductAddComponent } from 'src/app/pages-admin/product-add/product-add.component';
import { UserAddComponent } from 'src/app/pages-admin/user-add/user-add.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'user-list', component: UserListComponent },
    { path: 'user-add', component: UserAddComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: 'product-add', component: ProductAddComponent },
];
