import { Routes } from '@angular/router';
import { ConversationsComponent } from './conversations/conversations.component';
import { ReportingComponent } from './reporting/reporting.component';

export const HomeRoutes: Routes = [
    {
        path: 'conversations',
        component: ConversationsComponent
    }, {
        path: 'reporting',
        component: ReportingComponent
    }
];