import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilityService } from './utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WordWideWings';
  dbMessage!: string;
  constructor(private _snackBar: MatSnackBar, private service: UtilityService) { }

  setupDb() {
    this.dbMessage = ""
    this._snackBar.open("Hang On!! WorldWideWings is refreshing the database..", 'Close', {
      duration: 3000, verticalPosition: 'top', panelClass: ['blue-snackbar']
    });
    this.service.loadDatabse().subscribe(
      (data) => {
        this.dbMessage = data.message
        this._snackBar.open(this.dbMessage, 'Close', {
          duration: 3000, verticalPosition: 'top',
          panelClass: ['blue-snackbar']
        });
      },
      (err) => {
        this.dbMessage = err.error.message
        this._snackBar.open(this.dbMessage, 'Close', {
          duration: 3000, verticalPosition: 'top',
          panelClass: ['blue-snackbar']
        });
      })


  }

}






