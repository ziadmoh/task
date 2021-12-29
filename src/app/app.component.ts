import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  innerWidth:any;
  isNavExpanded:boolean = false
  isNavOpened:boolean = false
constructor(){}

ngOnInit(){
 // this.innerWidth = window.innerWidth;
  this.onResize();
  
}

@HostListener('window:resize', ['$event'])
onResize(event?:any) {
  this.innerWidth = window.innerWidth;
  if( this.innerWidth >=768  ){
    this.isNavExpanded = true;
    this.isNavOpened = false;
    document.getElementById('expandIcon')?.classList.add('nav-header');
    
  }else{
    this.isNavExpanded = false;
    //this.isNavOpened = true
  }
}



}
