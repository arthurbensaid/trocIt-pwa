import { Component, OnInit } from '@angular/core';
import { GiveList } from 'src/app/models/give-list';
import { ItemService } from 'src/app/services/item.service';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public giveList: GiveList;

  constructor(
    private itemService: ItemService,
    private router: Router
  ) {}

  ngOnInit() {
  }
  
  myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
}
