import { Component, OnInit } from '@angular/core';
import {RestServiceService} from "../Service/rest-service.service";
import {Router} from "@angular/router";
import { AuthentifService } from '../Service/authentif.service';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})

export class AdminLoginPageComponent implements OnInit {

  admin_username : string;
  admin_password : string;
  role: any;

  constructor(private adminLoginService : AuthentifService, private router : Router) { }

  ngOnInit(): void {
    this.veriflogin();
  }


doAdminLogin(){


    
  
  

  console.log("user name:" +this.admin_username);
  console.log("password:" +this.admin_password);
  this.adminLoginService.verifUser(this.admin_username,this.admin_password).subscribe(data =>{
    console.log(data['username']);
    if(data['username']!=null){
    

    sessionStorage.setItem("userID",data['adminid']);

    sessionStorage.setItem("userNP",data['fullname']);
    sessionStorage.setItem("role" ,data['description']);
    //sessionStorage.setItem("PHOTO" ,data['photo']);
    this.role = sessionStorage.getItem('role');
   // console.log("PHOTO: " +this.photo);
    console.log("role:" +this.role);
    this.router.navigate(['admin/control']);
                

  }

  else{
   alert(data['RESPONSE']);
  }

  },error=>{
    console.log("Erreur :"+error);
})
}

veriflogin(){

  //Récupération de l'objet
  
  var verif = sessionStorage.getItem('userID');
  if (verif){
   this.router.navigate(["admin/control"]);
    console.log("session userid : "+verif);
  }
  // else{
  //   this.router.navigate([""]);
  //   console.log("session userid : "+verif);
  // }
  console.log(verif);
  
  }
}
