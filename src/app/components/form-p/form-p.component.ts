import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-form-p',
  templateUrl: './form-p.component.html',
  styleUrls: ['./form-p.component.css']
})
export class FormPComponent {
  newPost:Post={} as Post;
  @Output() ShipPost = new EventEmitter<Post>();

  CreatePost():void{
    this.ShipPost.emit(this.newPost);
    this.newPost={} as Post;
  }
  showForm:boolean= false;
  NewThought():void{
    this.showForm=!this.showForm;
  }

}
