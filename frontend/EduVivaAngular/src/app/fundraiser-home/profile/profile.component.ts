import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  ngOnInit(): void {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((navItem, i) => {
      navItem.addEventListener("click", () => {
        navItems.forEach((item, j) => {
          item.classList.remove("active");
        });
        navItem.classList.add("active");
      });
    });
  }

}
