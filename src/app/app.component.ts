import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Importar los módulos necesarios
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Propiedad profileForm correctamente declarada como opcional y inicializada
  profileForm!: FormGroup;

  // Carrusel de imágenes
  images: string[] = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxrCdMMPPmMogRmApP-xsQ962qpjSmHnLEw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7F8PAY-uOnmmwP6ylu194hN68704MRc1hJA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZHc0eu4o2KJq_oVSCRyl6AAM8Ylx9yXjYg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7IlEytZwC-T-cCBsdmx7n3gwoatEHKLTWmg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeg8cR4yXdNmvHW4TCpe9M75Pw86xXEuk-g&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYaQySlMFuw2CSuzHAy6ZKULg4BOhNgIeOOg&s'
  ];

  // Opciones de carrusel para adaptarse a diferentes tamaños de pantalla
  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '480px', numVisible: 1, numScroll: 1 }
  ];

  // Inyectar FormBuilder para crear el formulario
  constructor(private fb: FormBuilder) {}

  // Inicializar el formulario con los controles
  ngOnInit() {
    // Aquí inicializamos el formulario
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cedula: ['', Validators.required],
      direccion: ['', Validators.required],
      gender: ['', Validators.required],
      message: ['', Validators.required],
      agree: [false, Validators.requiredTrue] // Checkbox con validación
    });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.profileForm.valid) {
      console.log("Formulario enviado:", this.profileForm.value);
    } else {
      console.log("Formulario inválido");
    }
  }
}
