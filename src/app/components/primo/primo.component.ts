import { ChangeDetectionStrategy, Component } from '@angular/core';

interface IItem {
  title: string;
  description: string;
}

@Component({
  selector: 'tmp-primo',
  standalone: true,
  imports: [],
  templateUrl: './primo.component.html',
  styleUrl: './primo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimoComponent {
  public readonly items: IItem[] = [
    { title: 'title 1', description: 'desc 1' },
    { title: 'title 2', description: 'desc 2' },
    { title: 'title 3', description: 'desc 3' }
  ]
}
