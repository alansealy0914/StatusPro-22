import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { PostRoutingModule } from './post-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

  
@NgModule({
  declarations: [IndexComponent, ViewComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule, // <-- include it in your app module
  ]
})
export class PostModule { }