import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() contenu: string;
  @Input() created_at: Date;
  @Input() loveits: number;

  constructor() { }

  ngOnInit() {
  }
 
  onLoveIt()
 {
 	this.loveits++;
 	console.log("number of lovites +1 "+this.loveits);
 }

onDontLoveIt()
 {
 	this.loveits--;
 	console.log("number of lovites -1"+this.loveits);
 }


}
