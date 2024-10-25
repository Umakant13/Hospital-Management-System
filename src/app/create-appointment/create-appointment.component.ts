import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../appointment'; // Ensure the path is correct
import { AppointmentService } from '../appointment.service'; // Ensure the path is correct

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css'] // Corrected from styleUrl to styleUrls
})
export class CreateAppointmentComponent {
  appointment: Appointment = { id: 0, name: '', age: '', symptoms: '', number: '' }; // Initialize with default values

  constructor(private appointmentService: AppointmentService, private router: Router) {}

  // Function to save appointment
  saveAppointment() {
    // Validate the appointment data
    if (!this.isFormValid()) {
      console.error('Form is invalid:', this.appointment);
      return; // Stop execution if the form is invalid
    }

    this.appointmentService.createAppointment(this.appointment).subscribe(
      (data) => {
        console.log('Appointment created:', data);
        this.resetForm(); // Reset the form after submission
        this.goToAppointment();
      },
      (error) => {
        console.error('Error creating appointment:', error);
      }
    );
  }

  // Function to handle form submission
  onSubmit() {
    this.saveAppointment();
  }

  // Function to navigate to appointment list
  goToAppointment() {
    this.router.navigate(['appointments']); // Adjust the route as necessary
  }

  // Function to validate the form data
  isFormValid(): boolean {
    return this.appointment.name.trim() !== '' && 
           this.appointment.age.trim() !== '' && 
           this.appointment.symptoms.trim() !== '' && 
           this.appointment.number.trim() !== '';
  }

  // Function to reset the form
  resetForm() {
    this.appointment = { id: 0, name: '', age: '', symptoms: '', number: '' };
  }
}
