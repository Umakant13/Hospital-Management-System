import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl = "http://localhost:8080/api/v2/appointments";

  constructor(private httpClient: HttpClient) {}

  // Get all appointments
  getAllAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
  }

  // Create a new appointment
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(`${this.baseUrl}`, appointment);
  }

  // Delete an appointment by ID
  deleteAppointment(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
