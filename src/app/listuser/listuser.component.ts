import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  constructor(private route:Router){}
  users = [
    { firstName: 'chaima', lastName: 'ayari',role: 'babysitter' },
    { firstName: 'maroua', lastName: 'mezguich', role: 'parent'},
    { firstName: 'habiba', lastName: 'mezguich', role: 'babysitter'},
    { firstName: 'hamida', lastName: 'dhaouadi', role: 'parent'}
  ];
  ngOnInit(): void{
  }
  updateUser()
  {
//updateuser
this.route.navigate(['/updateuser'])
  }
  
  deleteUser()
  {
    
  }
}

