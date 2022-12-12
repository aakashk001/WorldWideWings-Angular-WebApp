import { MatTableModule} from '@angular/material/table';
// import {FlexLayoutModule} from "@angular/material";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatDialogModule} from '@angular/material/dialog'




import { NgModule } from '@angular/core';

const MaterialComponets = [ MatFormFieldModule,  MatInputModule, MatSnackBarModule,
    MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, 
    MatListModule, MatToolbarModule, MatCardModule, MatGridListModule, 
    MatDialogModule, MatTableModule
]                                                                                                                                                                                                                         
@NgModule({
    imports: [...MaterialComponets],
    exports: [...MaterialComponets],
})

export class MaterialModule {

}