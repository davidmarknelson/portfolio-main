import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HeroComponent, NavbarComponent } from './partials';
import { ProjectComponent } from './partials/project/project.component';
import { WorkComponent } from './partials/work/work.component';
import { ContainerComponent, DividerComponent } from './shared/components';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
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
  ],
  imports: [BrowserModule, FontAwesomeModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
