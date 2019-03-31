import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PanelMenuModule } from "primeng/panelmenu";
import { MenuModule } from "primeng/menu";
import { MegaMenuModule } from "primeng/megamenu";
import { AccordionModule } from "primeng/components/accordion/accordion";
import { PanelModule } from "primeng/components/panel/panel";
import { ButtonModule } from "primeng/components/button/button";
import { RadioButtonModule } from "primeng/components/radioButton/radioButton";
import { TableModule } from "primeng/table";
import { DataTableModule } from "primeng/components/datatable/datatable";
import { SliderModule } from "primeng/slider";
import { DropdownModule } from "primeng/dropdown";
import { MultiSelectModule } from "primeng/multiselect";
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatBadgeModule,
  MatSidenavModule,  MatListModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule,
  MatDatepickerModule, MatNativeDateModule, MatTabsModule, MatCardModule} from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    SliderModule,
    DataTableModule,
    PanelMenuModule,
    MenuModule,
    MegaMenuModule,    
    RadioButtonModule,
    PanelModule,
    AccordionModule,
    ButtonModule,
    BrowserAnimationsModule,
    [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatBadgeModule,
      MatSidenavModule, MatListModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule,
      MatDatepickerModule, MatNativeDateModule, MatTabsModule, MatCardModule]

  ],
  exports: [
    CommonModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    SliderModule,
    DataTableModule,
    PanelMenuModule,
    MenuModule,
    MegaMenuModule,
    MatMenuModule,
    RadioButtonModule,
    PanelModule,
    AccordionModule,
    ButtonModule,
    CheckboxModule,
    PasswordModule,
    MessagesModule,
    MessageModule,
    BrowserAnimationsModule,
    [MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatMenuModule,
      MatIconModule,
      MatBadgeModule,
      MatSidenavModule,
      MatListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatTabsModule,
      MatCardModule]
  ]

})
export class ModuleadmincomponentModule {}
