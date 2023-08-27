import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-single-p',
  templateUrl: './single-p.component.html',
  styleUrls: ['./single-p.component.css']
})
export class SinglePComponent {
  @Input() IndividualPost:Post={} as Post;
  
}
