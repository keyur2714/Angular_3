import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  friendsList: string[] = ["keyur","denish","vinit"];
  selectedFriendName : string = '';

  constructor() { }

  ngOnInit() {
  }

  addFriend(name):void{
    console.log("New Friend Name: "+name);
    this.friendsList.push(name);
  }

  delete(idx:number):void{
    console.log("Index: "+idx);
    let confirmMsg = confirm("Are you sure to delete? ");
    if(confirmMsg){
      this.friendsList.splice(idx,1);
    }    
  }

  setSelectedFriend(selectedFriend):void{
    this.selectedFriendName=selectedFriend;
  }
}
