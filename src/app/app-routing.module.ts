import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReseauComponent } from './reseau/reseau.component';
import { ProcessComponent } from './process/process.component';
import { ParentSignupComponent } from './auth/parent-signup/parent-signup.component';
import { FirstpageparentComponent } from './firstpageparent/firstpageparent.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ParentsettingComponent } from './parentsetting/parentsetting.component';
import { FAQComponent } from './faq/faq.component';
import { ProfilebabysitterComponent } from './profilebabysitter/profilebabysitter.component';
import { JoboffersComponent } from './joboffers/joboffers.component';
import { JobofferformComponent } from './jobofferform/jobofferform.component';
import { FAQBBComponent } from './faqbb/faqbb.component';
import { UpdateformComponent } from './updateform/updateform.component';
import { PopupComponent } from './popup/popup.component';
import { LoginbabysitterComponent } from './auth/loginbabysitter/loginbabysitter.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { PasswordResetParentComponent } from './password-reset-parent/password-reset-parent.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BabysittersettingComponent } from './babysittersetting/babysittersetting.component';
import { AfterLoginbbService } from './services/after-loginbb.service';
import { BeforeLoginbbService } from './services/before-loginbb.service';
import { ConversationComponent } from './conversation/conversation.component';
import { ParentGuard } from './parent.guard';
import { BabysitterGuard } from './babysitter.guard';





const routes: Routes = [
  {path:"home",component:HomeComponent,canActivate:[BeforeLoginService]},
  {path:"signin",component:SigninComponent,canActivate:[BeforeLoginService]},
  {path:"signup",component:SignupComponent,canActivate:[BeforeLoginService]},
  {path:"reseau",component:ReseauComponent,canActivate:[BeforeLoginService]},
  {path:"aboutus",component:AboutusComponent,canActivate:[BeforeLoginService]},
  {path:"parent-signup",component:ParentSignupComponent,canActivate:[BeforeLoginService]},
  {path:"process",component:ProcessComponent,canActivate:[BeforeLoginService]},
  {path:"loginbabysitter",component:LoginbabysitterComponent,canActivate:[BeforeLoginService]},
  {path:"change-password",component:ChangePasswordComponent,canActivate:[BeforeLoginService],data:{role:parent}},
  {path:"passwor-reset-parent",component:PasswordResetParentComponent,canActivate:[BeforeLoginService],data:{role:parent}},

  {path:"firstpageparent",component:FirstpageparentComponent,canActivate:[ParentGuard,],data:{role:'parent'}},
  {path:"jobofferform",component:JobofferformComponent,canActivate:[ParentGuard,],data:{role:'parent'}},
  {path:"listuser",component:ListuserComponent,canActivate:[ParentGuard,],data:{role:'parent'}},
  {path:"updateuser",component:UpdateuserComponent,canActivate:[ParentGuard,],data:{role:'parent'}},
  {path:"applications",component:ApplicationsComponent,canActivate:[ParentGuard,],data:{role:parent}},
  {path:"parentsetting",component:ParentsettingComponent,canActivate:[ParentGuard,],data:{role:parent}},
  {path: 'updateform/:id', component: UpdateformComponent,canActivate:[ParentGuard,],data:{role:parent}},


  {path:"joboffers",component:JoboffersComponent,canActivate:[BabysitterGuard],data: { role: 'babysitter' }},
  {path:"profilebabysitter",component:ProfilebabysitterComponent,canActivate:[BabysitterGuard],data: { role: 'babysitter' }},
  {path:"babysittersetting",component:BabysittersettingComponent,canActivate:[BabysitterGuard]},
  {path:"FAQBB",component:FAQBBComponent,canActivate:[BabysitterGuard],data: { role: 'babysitter' }},
  {path: 'conversations/:id', component: ConversationComponent,canActivate:[BabysitterGuard] },
  {path:"FAQ",component:FAQComponent,canActivate:[ParentGuard,],data:{role:parent}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
