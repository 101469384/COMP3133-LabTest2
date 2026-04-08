import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div style="padding:30px; font-family:Arial; background:white; min-height:100vh;">
      
      <h1>Harry Potter Characters</h1>

      <label>Filter by House:</label>
      <select>
        <option>All</option>
        <option>Gryffindor</option>
        <option>Slytherin</option>
      </select>

      <div style="margin-top:20px;">
        <div style="border:1px solid #ccc; padding:10px; margin-bottom:10px;">
          <h3>Harry Potter</h3>
          <p>House: Gryffindor</p>
        </div>

        <div style="border:1px solid #ccc; padding:10px;">
          <h3>Draco Malfoy</h3>
          <p>House: Slytherin</p>
        </div>
      </div>

    </div>
  `
})
class AppComponent {}

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));