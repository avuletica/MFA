import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from '../components/profile/profile.component';
import {ForumComponent} from '../components/forum/forum.component';
import {AuthGuardService} from '../../core/guards/auth-guard.service';
import {ProfileResolverService} from '../../core/resolvers/profile-resolver.service';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService], resolve: {userData: ProfileResolverService}},
  {path: 'forum', component: ForumComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PrivateAreaRoutingModule {
}
