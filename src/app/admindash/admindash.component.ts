import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../adminauth.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  searchText: string = '';
  patients: Patient[] = []; 
  errorMessage: string = ''; // To store error messages

  constructor(private patientService: PatientService,
              private router: Router,private adminauthService:AdminauthService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  private getPatients() {
    this.patientService.getPatientList().subscribe(
      data => {
        this.patients = data;
        this.errorMessage = ''; // Reset error message on success
      },
      error => {
        this.errorMessage = 'Could not load patients. Please check the backend API.';
        console.error('Error fetching patients:', error); // Log the error for debugging
      }
    );
  }

  searchPatients() {
    if (this.searchText.trim() === '') {
      this.getPatients(); // Reset to the original patient list
    } else {
      this.patients = this.patients.filter(patient =>
        patient.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  delete(id: number) {
    this.patientService.delete(id).subscribe(
        (data) => {
            console.log('Delete successful', data);
            this.getPatients(); // Refresh the list after deletion
        },
        (error) => {
            console.error('Error deleting patient:', error); // Log the error
            alert('Failed to delete patient. Please try again.'); // Show user-friendly message
        }
    );
  }

  logout(){
    this.adminauthService.logout();
    this.router.navigate(['home']);
  }
}
