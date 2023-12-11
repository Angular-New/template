import { ChangeDetectionStrategy, Component, Input, TemplateRef } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";

@Component({
  selector: 'tmp-secondo',
  standalone: true,
  imports: [
    NgTemplateOutlet,
  ],
  templateUrl: './secondo.component.html',
  styleUrl: './secondo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondoComponent {
  @Input('secondo-template') public template!: TemplateRef<{ $implicit: string }>;

  public readonly title: string = 'secondo component';
}
