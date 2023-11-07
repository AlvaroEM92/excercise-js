const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
     {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
     {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
     {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
     {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];
    
    
    
    
     for ( let i = 0 ; i < countries.length ; i++){
        const div$$ = document.createElement('div');
        document.body.appendChild(div$$);
        const h4$$ = document.createElement('h4');
        h4$$.textContent=countries[i].title;
       div$$.appendChild(h4$$);
        const img$$ = document.createElement('img');
         img$$.src = countries[i].imgUrl;
        div$$.appendChild(img$$);
        
     }
    
    
    
    
    
    
    
    
    
    
     const button$$ =document.querySelector('button');
     button$$.addEventListener('click', function (){
        let divs = document.querySelectorAll('div');     
        console.log(divs);              
        if(divs.length > 0){
            let lastDiv = divs[divs.length - 1];
            
            lastDiv.remove();
        }else{
            alert('Ya no quedan fotos');
        }
     });





    





    








