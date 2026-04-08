import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Character } from '../../models/character';
import { HarrypotterService } from '../../services/harrypotter.service';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './characterdetails.component.html',
  styleUrl: './characterdetails.component.css'
})
export class CharacterdetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private hpService = inject(HarrypotterService);

  character = signal<Character | null>(null);
  loading = signal(true);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.hpService.getCharacterById(id).subscribe({
        next: (data) => {
          this.character.set(data);
          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
        }
      });
    }
  }
}
