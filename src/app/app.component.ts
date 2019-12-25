import { Component } from '@angular/core';


export class Post {
  public created_at: Date
  constructor(public title: string, public contenu: string, public loveIts: number) {
    this.created_at = new Date()
  }
}
type PostType = Array<Post>;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'MyBlog';

listofposts: PostType = [
    new Post('First post', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',5),
    new Post('Second post', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',-2),
    new Post('Third post', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',0)
	]




}
