import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ITemplate } from './template.interface';

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
  @Input('secondoTemplate') public template!: TemplateRef<ITemplate>;

  public readonly title: string = 'secondo component';
  public readonly items: number[] = [1, 2, 3];
}
