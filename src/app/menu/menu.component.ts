import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    this.collapseMenu();
  }
  title: string = '';
  collapseMenu() {
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem: Element) {
      responsiveNavItem.addEventListener('click', () => {
        const toggler = document.getElementById('test');
        if(window.getComputedStyle(toggler!).display !== 'none'){
          toggler?.click();
        }
      });
     });
  }

  setTitle(activeLink: string){
    this.title = activeLink;
  }
}
