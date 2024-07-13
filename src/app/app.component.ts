import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CbrService } from './cbr.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TestFrontendApp';

  rates: any;

  constructor(private cbrService: CbrService) {}

  ngOnInit(): void {
    this.cbrService.getRates().subscribe(
      data => {
        this.rates = data.rates;
        console.log('Rates:', this.rates);
      },
      error => {
        console.error('Error fetching rates', error);
      }
    );
  }

}
