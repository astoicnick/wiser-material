import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatSidenavModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule, MatSelect} from '@angular/material/select';
import {TextFieldModule} from '@angular/cdk/text-field'; 


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatCardModule, MatListModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatSelectModule, TextFieldModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatCardModule, MatListModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatSelectModule,TextFieldModule],
})

export class MaterialModule { }
