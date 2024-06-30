import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() public title?: string = '';
  @Input() public subtitle?: string = '';
  @Input() public imageUrl?: string = '';
  @Input() public bodyWork?: string = '';
  @Input() public featuring?: string = '';
  @Input() public content?: string = '';
  @Input() public details?: string = '';
  @Input() public published?: string = '';
  @Input() public learn?: string = '';
  @Input() public date?: string = '';
  @Input() public enableReadMore: boolean = false;

  public isExpanded = false;
  public previewLength = 300;

  public get previewContent(): string {
    if (this.content && this.content.length > this.previewLength) {
      return this.content.slice(0, this.previewLength) + '...';
    }
    return this.content || '';
  }

  public toggleContent() {
    this.isExpanded = !this.isExpanded;
  }
}
