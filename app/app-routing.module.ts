import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { homeComponent } from './home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { SkillsComponent } from './skills/skills.component';
import { StudiesComponent } from './studies/studies.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
{ path: 'perfil', component: homeComponent },
{ path: 'estudios', component: StudiesComponent },
{ path: 'experiencia', component: ExperienceComponent },
{ path: 'conocimientos', component: SkillsComponent },
{ path: 'proyectos', component: WorksComponent },
//{ path: 'contacto', component: ContactComponent },
{ path: 'footer', component: FooterComponent },
{ path: '',   redirectTo: '/perfil', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
