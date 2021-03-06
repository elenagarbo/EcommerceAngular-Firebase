import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  reserva: any;
  actual= []
  constructor( private router: Router,private cookieService: CookieService, private db: AngularFireDatabase, private route: ActivatedRoute) {  }

  ngOnInit() {
    this.actual.push(JSON.parse(this.cookieService.get('actual')));
    console.log(this.actual);
  }

  getRutasId(listPath){
    return this.db.list(listPath).valueChanges();
}
reservar(ident,nombre,fot,preci,cant) {
  this.reserva = {  
    id:ident.value, 
    titulo: nombre.value,
    foto: fot.value,
    precio: preci.value,
    cantidad: cant.value
 };
  this.cookieService.delete("actual");
  this.cookieService.set(ident.value, JSON.stringify(this.reserva)); 
  this.router.navigate(['/carrito']);
  }
  
}
