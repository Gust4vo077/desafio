import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {HttpParams} from "@angular/common/http";
@Component({
  selector: 'app-usuariolista',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './atualizarusuario.component.html',
  styleUrl: './atualizarusuario.component.scss'
})
export class AtualizarusuarioComponent {
  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) {}

  id: any;

  onSubmit(nome: string, senha: string){
     const token = localStorage.getItem('token');

      this.route.params.subscribe(params => {
        this.id = params['id'];
      });

      console.log(this.id);
    this.http.put<any>(`http://localhost:5000/api/v1/atualizar/${this.id}`,{nome:nome,senha:senha},{headers
      :{'Authorization': 'Bearer ' + token}}).subscribe({
        next: retorno => {
        console.log(retorno)
        this.router.navigate(['/usuariolista']);
        },
        error: err => {
         alert('falha ao atualizar o usuario');
        }
       });
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

}
