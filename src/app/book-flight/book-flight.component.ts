import { createInjectableType } from '@angular/compiler';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
/* Import the required modules here */
import{MatDialog} from '@angular/material/dialog'
import{MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import { BookFlightService } from './book-flight.service';


@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {
  errorMessage!: string;
  successMessage!: String;
  bookingForm!: FormGroup;
  
  /* Inject the required dependencies into the constructor */
  constructor(private fb:FormBuilder, private dialog:MatDialog) { }

  ngOnInit() {
    //console.log(this.data.getHours())
   this.bookingForm = this.fb.group({
    passangerName : ['',[Validators.required,Validators.pattern('^[A-Z][a-z]+$')]],
    noOfTickets :['',[Validators.required,Validators.min(1)]],
    flightId :['',[Validators.required,validateFlight]]
   }) 
  }

  confirmBooking() {
    /* Code as per the instructions given in the QP */
    this.dialog.open(DialogOverviewExampleDialog,{data:{passengerName
      :this.bookingForm.value.passangerName,
    noOfTickets :this.bookingForm.value.noOfTickets,
    flightId:this.bookingForm.value.flightId
    }});


  }
}


function validateFlight(c: FormControl) {
  let pattern = /^[A-Z]{3}-[0-9]{3}$/;
  return pattern.test(c.value)? null:{
    flightError:{
      message:"Enter valid flightID"
    }
  }
  /* Code as per the instructions given in the QP */
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  successMessage!: String;
  errorMessage!: String;
  greeting!: String;
  date = new Date();
  button :boolean= true;
  ngOnInit():any {
    if(this.date.getHours()>=0 && this.date.getHours()<=11 ){
      this.greeting = "Good Morning!!"
    }
    else if(this.date.getHours()>=12 && this.date.getHours()<=16){
      this.greeting = "Good After Noon!!"
    }
    else if(this.date.getHours()>=17 && this.date.getHours() <=20){
      this.greeting = "Good Evening!!"
    }
    else {
      this.greeting = "Good Night!!"
    }
   }


  /* Inject the required dependencies into the constructor */
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private dialogRef:MatDialogRef<DialogOverviewExampleDialog>, private service:BookFlightService) { }

  onNoClick(): void {
    this.dialogRef.close();
    // code to close the dialog box
    
  }

  confirmBooking() {
    return this.service.bookFlight(this.data).subscribe(
      result=>{
        this.successMessage = "";
        this.errorMessage = "";
        this.successMessage = result.message;
        this.button  =false
      },
      error=>{
        this.successMessage = "";
        this.errorMessage = error.error.message;
        console.log(error)
      }
    )
    /* Code as per the instructions given in the QP */
  }


}