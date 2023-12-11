import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { PrimoComponent } from "./components/primo/primo.component";
import { SecondoComponent } from "./components/secondo/secondo.component";

@Component({
  selector: 'tmp-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PrimoComponent, SecondoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //
}
