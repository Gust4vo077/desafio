import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(email: string, senha: string) {
    this.http.post<any>('http://localhost:5000/api/v1/login', { email: email, senha: senha })
      .subscribe(response => {
        localStorage.setItem('token', JSON.stringify(response.token));
        localStorage.setItem('id', response.id);
        this.router.navigate(['/usuariolista']);
        alert("logado com sucesso");
      }, error => {
        alert(error.response.data.message);
      });
  }

  navigateToCadastro(){
    this.router.navigate(['/cadastro']);

  }
}
