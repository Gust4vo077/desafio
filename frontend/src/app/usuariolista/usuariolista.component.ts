import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-usuariolista',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './usuariolista.component.html',
  styleUrl: './usuariolista.component.scss'
})
export class UsuariolistaComponent {

  public users: any;

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    
    this.http.get<{ data: any[] }>('http://localhost:5000/api/v1/listar',{headers
      :{'Authorization': 'Bearer ' + token}}).subscribe({
      next: response => {
        this.users=response.data;
      },
      error: err => {
        alert('falho ao buscar usuarios');
      }
     });

  }
  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  navigateToEdit(nome:string,email:string){

    this.router.navigate(['/atualizar'], { queryParams: { email: email, nome:nome }});
  }

  navigateToDelete(id: string){
    const token = localStorage.getItem('token');

    this.http.delete(`http://localhost:5000/api/v1/delete/${id}`,{headers
      :{'Authorization': 'Bearer ' + token}}).subscribe({
      next: response => {
        alert('Sucesso ao deletar usuario');
      },
      error: err => {
        alert('falha ao deletar usuario');
      }
     });
  }
}
