import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Character } from '../../models/character';
import { HarrypotterService } from '../../services/harrypotter.service';
import { CharacterfilterComponent } from '../characterfilter/characterfilter.component';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    CharacterfilterComponent
  ],
  templateUrl: './characterlist.component.html',
  styleUrl: './characterlist.component.css'
})
export class CharacterlistComponent implements OnInit {
  private hpService = inject(HarrypotterService);

  characters = signal<Character[]>([]);
  loading = signal(true);
  error = signal('');

  ngOnInit(): void {
    this.loadAllCharacters();
  }

  loadAllCharacters() {
    this.loading.set(true);
    this.hpService.getAllCharacters().subscribe({
      next: (data) => {
        this.characters.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load characters.');
        this.loading.set(false);
      }
    });
  }

  onHouseSelected(house: string) {
    if (house === 'All') {
      this.loadAllCharacters();
      return;
    }

    this.loading.set(true);
    this.hpService.getCharactersByHouse(house).subscribe({
      next: (data) => {
        this.characters.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to filter characters.');
        this.loading.set(false);
      }
    });
  }
}