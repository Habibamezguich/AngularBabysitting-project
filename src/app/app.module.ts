import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './auth/signin/signin.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ReseauComponent } from './reseau/reseau.component';
import { SignupComponent } from './auth/signup/signup.component';
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
import { AuthService } from './services/auth.service';
import { PasswordResetParentComponent } from './password-reset-parent/password-reset-parent.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BabysittersettingComponent } from './babysittersetting/babysittersetting.component';
import { ConversationComponent } from './conversation/conversation.component';




@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SigninComponent,
    ListuserComponent,
    UpdateuserComponent,
    SignupComponent,
    ReseauComponent,
    ProcessComponent,
    ParentSignupComponent,
    FirstpageparentComponent,
    AboutusComponent,
    ApplicationsComponent,
    ParentsettingComponent,
    FAQComponent,
    ProfilebabysitterComponent,
    JoboffersComponent,
    JobofferformComponent,
    FAQBBComponent,
    UpdateformComponent,
    PopupComponent,
    LoginbabysitterComponent,
    PasswordResetParentComponent,
    ChangePasswordComponent,
    BabysittersettingComponent,
    ConversationComponent,

  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
