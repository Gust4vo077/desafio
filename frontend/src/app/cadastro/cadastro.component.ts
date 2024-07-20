import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(nome: string, email: string, senha: string) {

    this.http.post<any>('http://localhost:5000/api/v1/cadastrar',{nome:nome,email:email,senha:senha}).subscribe({
        next: retorno => {
        console.log(retorno)
        this.router.navigate(['/login']);
        },
        error: err => {
         alert('falho ao cadastrar usuarios');
        }
       });
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }
}
