const users = [
    {id: 1, name: 'Abel'},
    {id:2, name: 'Julia'},
    {id:3, name: 'Pedro'},
    {id:4, name: 'Amanda'}
];


function comienzaConA(word){
    return word[0]  === 'A';
}


const usersNames = users.map(user =>{ 
      if(comienzaConA(user.name)){
        return 'Anacleto';
      }

      return user.name;
    });
 







console.log(usersNames);






