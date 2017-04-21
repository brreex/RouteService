import { Injectable } from '@angular/core';

@Injectable()
export class DbService {
  sampledata:[{id:string,name:string,email:string}] = 
             [{id:'1',name:'Assad',email:'assad@mum.edu'},
             {id:'2',name:'Berahnu',email:'bababu@mum.edu'},
             {id:'3',name:'Biniam',email:'biniam@mum.edu'},
             {id:'4',name:'Humeria',email:'humeria@mum.edu'}];
  constructor() {
  }
  getData():[{id:string,name:string,email:string}]{
      return this.sampledata;
  }
  getProfile(id:string){
    try{
        return this.sampledata[parseInt(id)-1];
    }
    catch(err){
      return null;
    }
    
  }
}
