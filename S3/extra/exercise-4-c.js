const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
     {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
     {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
     {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
     {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];


     const container$$ = document.querySelector('#container');
     for(const country of countries){
        const div$$ = document.createElement('div');
        div$$.setAttribute('data-element', 'true');

        const title$$= document.createElement('h4');
        title$$.textContent = country.title;
        div$$.appendChild(title$$);

        const img$$ = document.createElement('img');
        img$$.src = country.imgUrl;
        img$$.alt = 'Imagen de' + country.title;
        div$$.appendChild(img$$);

        const  removeBtn$$ = document.createElement('button');
        removeBtn$$.textContent = 'Borrar elemento';
        removeBtn$$.addEventListener('click', removeElement);
        div$$.appendChild(removeBtn$$);

        container$$.appendChild(div$$);
     }

     const removeLastBtn$$ = document.querySelector('#removeLastBtn');
     removeLastBtn$$.addEventListener('click', removeLastElement);

     function removeLastElement() {
        const lastElement$$ = document.querySelector('div[data-element="true"]');
        if(lastElement$$ !== null) {
            lastElement$$.remove();
        }
     }

     function removeElement () {
        const element$$ = this.closest('[data-element="true"]');
        element$$.remove();
     }