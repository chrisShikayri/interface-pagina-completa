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
  carouselImages: any[] = [
    { src: 'https://i.gifer.com/8CUm.gif' },
    { src: 'https://i.gifer.com/7DNh.gif' },
    { src: 'https://i.gifer.com/V0TO.gif' },
    { src: 'https://i.gifer.com/ATQ0.gif' },
    { src: 'https://i.gifer.com/1R19.gif' },
    { src: 'https://i.gifer.com/CQRr.gif' }
  ];

  // Galería de imágenes
  galleryImages: any[] = [
    {
      image: 'https://i.gifer.com/8CUm.gif',
      thumbnailImage: 'https://i.gifer.com/8CUm.gif',
      alt: 'Imagen 1'
    },
    {
      image: 'https://i.gifer.com/7DNh.gif',
      thumbnailImage: 'https://i.gifer.com/7DNh.gif',
      alt: 'Imagen 2'
    },
    {
      image: 'https://i.gifer.com/V0TO.gif',
      thumbnailImage: 'https://i.gifer.com/V0TO.gif',
      alt: 'Imagen 3'
    },
    {
      image: 'https://i.gifer.com/ATQ0.gif',
      thumbnailImage: 'https://i.gifer.com/ATQ0.gif',
      alt: 'Imagen 4'
    },
    {
      image: 'https://i.gifer.com/C0Nw.gif',
      thumbnailImage: 'https://i.gifer.com/C0Nw.gif',
      alt: 'Imagen 5'
    },
    {
      image: 'https://i.gifer.com/ZAAd.gif',
      thumbnailImage: 'https://i.gifer.com/ZAAd.gif',
      alt: 'Imagen 6'
    }
  ];


  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '480px', numVisible: 1, numScroll: 1 }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
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

  onSubmit() {
    if (this.profileForm.valid) {
      console.log("Formulario enviado:", this.profileForm.value);
    } else {
      console.log("Formulario inválido");
    }
  }
}