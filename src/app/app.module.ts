import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HeroComponent, NavbarComponent } from './partials';
import { ContactComponent } from './partials/contact/contact.component';
import { FooterComponent } from './partials/footer/footer.component';
import { ProjectComponent } from './partials/project/project.component';
import { ScrollToTopComponent } from './partials/scroll-to-top/scroll-to-top.component';
import { SkillComponent } from './partials/skill/skill.component';
import { WorkComponent } from './partials/work/work.component';
import {
  CarouselComponent,
  ContainerComponent,
  DividerComponent,
} from './shared/components';
import { ImageModalComponent } from './shared/components/image-modal/image-modal.component';
import { DnButtonDirective } from './shared/directives';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    DnButtonDirective,
    DividerComponent,
    ContainerComponent,
    CarouselComponent,
    WorkComponent,
    ProjectComponent,
    SkillComponent,
    ContactComponent,
    FooterComponent,
    ScrollToTopComponent,
    ImageModalComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FlexLayoutModule,
    OverlayModule,
    BrowserAnimationsModule,
    A11yModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
