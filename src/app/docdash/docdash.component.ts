import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css']  // Corrected to styleUrls
})
export class DocdashComponent implements OnInit { // Implementing OnInit interface

  searchText: string = '';
  patients: Patient[] = [];

  constructor(private patientService: PatientService, private router: Router, private docauth:DocauthService) {}

  ngOnInit(): void { // Correctly using ngOnInit
    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getPatientList().subscribe(data => {
      this.patients = data;
    }, error => {
      console.error('Error fetching patients:', error); // Log errors
    });
  }

  searchPatients(): void {
    if (this.searchText.trim() === '') {
      this.getPatients(); // Reset to the original patient list
    } else {
      this.patients = this.patients.filter(patient =>
        patient.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  update(id:number){
    this.router.navigate(['update-patient',id]);
  }

  delete(id:number){
    this.patientService.delete(id).subscribe(data=>{
      console.log(data);
      this.getPatients();
    })
  }

  view(id:number){
    this.router.navigate(['view-patient', id]);
  }

  logout(){
    this.docauth.logout();
    this.router.navigate(['home']);
  }
}
