const data={
    locations:[],
    get location(){
        return this.place
    },
    set location(value){
        this.place=value.trim();
        this.locations.push(this.place);
    }

}

//code that uses the data object define 


data.location='            Asansol      '
data.location='   Durgrapur'
console.log(data.location);
console.log(data)

