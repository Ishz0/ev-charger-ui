import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChargerService } from '../_services/charger.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message;
  constructor(private userService: UserService, private chargerService: ChargerService) { 
    this.getChargersDetails();
  }

  ngOnInit(): void {
    this.forUser();
  }

  forUser() {
    this.userService.forUser().subscribe(
      (response) => {
        console.log(response);
        this.message = response;
      }, 
      (error)=>{
        console.log(error);
      }
    );
  }

  chargerDetails = null as any;
  chargerToUpdate = {
    id:"",
    name:"",
    level:"",
    rateKw:""
  }

  register(registerForm: NgForm) {
    this.chargerService.registerCharger(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getChargersDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getChargersDetails() {
    this.chargerService.getChargers().subscribe(
      (resp) => {
        console.log(resp);
        this.chargerDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteCharger(charger: any) {
    this.chargerService.deleteCharger(charger.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getChargersDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(charger: any){
    this.chargerToUpdate = charger;
  }

  updateCharger(){
    this.chargerService.updateChargers(this.chargerToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
