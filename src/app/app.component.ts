import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  profileForm!: FormGroup;

  // Carrusel de imágenes
  carouselImages: { src: string }[] = [
    { src: 'https://i.gifer.com/8CUm.gif' },
    { src: 'https://i.gifer.com/7DNh.gif' },
    { src: 'https://i.gifer.com/V0TO.gif' },
    { src: 'https://i.gifer.com/ATQ0.gif' },
    { src: 'https://i.gifer.com/1R19.gif' },
    { src: 'https://i.gifer.com/CQRr.gif' }
  ];

  // Lista de productos
  products = [
    { 
      name: 'una buena pluma para un buen escritor', 
      price: 45.25, 
      inventoryStatus: 'OFERTA', 
      image: 'https://m.media-amazon.com/images/I/61lDgDCMe8L._AC_UF350,350_QL80_.jpg'
    },
    { 
      name: 'NO dejes que se te valla el conosimineto', 
      price: 195.22, 
      inventoryStatus: 'OFERTA ', 
      image: 'https://i.gifer.com/7DNh.gif'
    },
    { 
      name: 'estas viviendo un romance?', 
      price: 185.25, 
      inventoryStatus: 'VENDIENDO', 
      image: 'https://i.gifer.com/V0TO.gif'
    },
    { 
      name: 'La mejor enciclopedia sengun bob', 
      price: 175.36, 
      inventoryStatus: 'OFERTA', 
      image: 'https://i.gifer.com/jVo.gif'
    },
    { 
      name: 'libros de segunda en buen estado', 
      price: 8545.36, 
      inventoryStatus: 'VENDIENDO', 
      image: 'https://i.gifer.com/89Nr.gif'
    },
    { 
      name: 'Quieres arreglar tus librors ? ', 
      price: 568.36, 
      inventoryStatus: 'OFERTA', 
      image: 'https://i.gifer.com/4Bi4.gif'
    },
  ];

  // Galería de imágenes
  galleryImages: { image: string; thumbnailImage: string; alt: string }[] = [
    { image: 'https://i.gifer.com/8CUm.gif', thumbnailImage: 'https://i.gifer.com/8CUm.gif', alt: 'Imagen 1' },
    { image: 'https://i.gifer.com/7DNh.gif', thumbnailImage: 'https://i.gifer.com/7DNh.gif', alt: 'Imagen 2' },
    { image: 'https://i.gifer.com/V0TO.gif', thumbnailImage: 'https://i.gifer.com/V0TO.gif', alt: 'Imagen 3' },
    { image: 'https://i.gifer.com/ATQ0.gif', thumbnailImage: 'https://i.gifer.com/ATQ0.gif', alt: 'Imagen 4' },
    { image: 'https://i.gifer.com/C0Nw.gif', thumbnailImage: 'https://i.gifer.com/C0Nw.gif', alt: 'Imagen 5' },
    { image: 'https://i.gifer.com/ZAAd.gif', thumbnailImage: 'https://i.gifer.com/ZAAd.gif', alt: 'Imagen 6' }
  ];

  // Configuración responsiva para carrusel y galería
  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 3, numScroll: 1 },
    { breakpoint: '768px', numVisible: 2, numScroll: 1 },
    { breakpoint: '480px', numVisible: 1, numScroll: 1 }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Inicialización del formulario
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      alias: ['', Validators.required],
      pais: ['', Validators.required],
      gender: ['', Validators.required],
      message: ['', Validators.required],
      agree: [false, Validators.requiredTrue]
    });
  }

  // Enviar formulario
  onSubmit() {
    if (this.profileForm.valid) {
      console.log("Formulario enviado:", this.profileForm.value);
    } else {
      console.log("Formulario inválido");
    }
  }

  // Obtener severidad según disponibilidad del inventario
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'OFERTA':
        return 'success';
      case 'VENDIENDO':
        return 'info';
      default:
        return 'secondary';
    }
  }
}
