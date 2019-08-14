import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
//Layouts
import { HomeLayout } from './home/home.component';

//Guards
import { AuthGuard } from './utils/guards/auth/auth.guard';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: '/conversations',
        canActivate: [AuthGuard],
        pathMatch: 'full'
    },
    {
        path: '',
        component: HomeLayout,
        canActivate: [AuthGuard],
        loadChildren: './home/home.modules#HomeModule'
    },
     {
        path: 'login',
        component: LoginComponent
    },
    { redirectTo: '/conversations', path: "**" }/*,
    {
        path: 'logout',
        component: LogoutComponent
    } */
];
