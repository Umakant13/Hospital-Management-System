import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointments: Appointment[] = [];
  originalAppointments: Appointment[] = []; // Store original list
  searchText: string = '';
  newAppointment: Appointment = { id: 0, name: '', age: '', symptoms: '', number: '' }; // Initialize new appointment

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments() {
    this.appointmentService.getAllAppointments().subscribe(data => {
      this.appointments = data;
      this.originalAppointments = data; // Store original list for reset
    });
  }

  delete(id: number) {
    this.appointmentService.deleteAppointment(id).subscribe(data => {
      console.log(data);
      this.getAppointments(); // Refresh the appointments list after deletion
    });
  }

  searchPatients(): void {
    console.log("Searching for patients with query:", this.searchText);
    if (this.searchText) {
      this.appointments = this.originalAppointments.filter(appointment => 
        appointment.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.appointments = [...this.originalAppointments]; // Reset to original list if searchText is empty
    }
  }

  onSubmit(): void {
    // Ensure age is treated as a string
    this.newAppointment.age = this.newAppointment.age.toString();
    
    this.appointmentService.createAppointment(this.newAppointment).subscribe(response => {
      console.log('Appointment created:', response);
      this.getAppointments(); // Refresh the appointments list
      this.resetForm(); // Reset the form after submission
    }, error => {
      console.error('Error creating appointment:', error);
    });
  }

  // Optional method to reset the form fields
  resetForm(): void {
    this.newAppointment = { id: 0, name: '', age: '', symptoms: '', number: '' };
  }
}
