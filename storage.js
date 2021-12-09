class Storage{
    constructor(){
        this.city;
        this.defaultcity = 'jammu';
    }
    getlocationdata(){
      if(localStorage.getItem('city')===null)
      {
          this.city = this.defaultcity;
      }
      else{
          this.city = localStorage.getItem('city');
      }


      return{
          city : this.city 
      }
    }

    setlocationdata(city){
      localStorage.setItem('city',city);
    }

}