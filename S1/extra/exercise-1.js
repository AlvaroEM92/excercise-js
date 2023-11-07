const users = [
   {name: "Abel", years: 43},
   {name: "Maria", years: 18},
   {name: "Pedro", years: 14},
   {name: "Samantha", years: 32},
   {name: "Raquel", years: 16}];



for ( user in users){
   if(users[user].years<18){
      console.log("Usuario menor de edad: " + users[user].name);
   }else{
      console.log("Usuario mayor de edad: " + users[user].name);
   }
}console.log(users);