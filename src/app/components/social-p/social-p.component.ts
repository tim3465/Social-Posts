import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-social-p',
  templateUrl: './social-p.component.html',
  styleUrls: ['./social-p.component.css']
})
export class SocialPComponent {
  listOfPosts:Post[]=[
    {
    title: "First post title.",
    thought: "This is the first thought."
    },

  ];
  AddPost(post:Post):void{
    this.listOfPosts.push(post)
  }

}
