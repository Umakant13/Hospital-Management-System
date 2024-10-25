import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server'; // Correct import for ServerModule
import { AppModule } from './app.module';
import { AppComponent } from './app.component'; // Import AppComponent

@NgModule({
  imports: [
    AppModule,
    ServerModule, // Use ServerModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
