const countries = [
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];



 /*for ( let i = 0 ; i < countries.length ; i++){
    const div$$ = document.createElement('div');
    document.body.appendChild(div$$);
    const h4$$ = document.createElement('h4');
    h4$$.textContent=countries[i].title;
   div$$.appendChild(h4$$);
    const img$$ = document.createElement('img');
     img$$.src = countries[i].imgUrl;
    div$$.appendChild(img$$);
    
 }*/

 
 
 
 
 for ( countrie  of countries){
    const div$$ = document.createElement('div');
    document.body.appendChild(div$$);
    const h4$$ = document.createElement('h4');
    h4$$.textContent=countrie.title;
   div$$.appendChild(h4$$);
    const img$$ = document.createElement('img');
     img$$.src = countrie.imgUrl;
     img$$.alt = 'Imagen de  ' + countrie.title;
    div$$.appendChild(img$$);

 }

