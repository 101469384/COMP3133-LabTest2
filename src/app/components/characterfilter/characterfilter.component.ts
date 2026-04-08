import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './characterfilter.component.html',
  styleUrl: './characterfilter.component.css'
})
export class CharacterfilterComponent {
  @Output() houseSelected = new EventEmitter<string>();

  houses = signal(['All', 'Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']);
  houseControl = new FormControl('All');

  onHouseChange() {
    this.houseSelected.emit(this.houseControl.value || 'All');
  }
}