import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

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

  @ViewChild('enlaceDescarga', { static: false })
  enlaceDescarga!: ElementRef;

  descargarPDF() {
    // Ruta relativa al archivo PDF en la carpeta assets
    const rutaArchivoPDF = 'assets/resume/Resume_Luis_Missael_Padilla.pdf';

    // Configura el enlace para la descarga
    const link = this.enlaceDescarga.nativeElement;
    link.href = rutaArchivoPDF;
    link.download = 'Resume Luis Missael Padilla.pdf';

    // Simula el clic en el enlace para iniciar la descarga
    link.click();
  }
}
