const baseUrl = 'https://api.nationalize.io?name=';

const butn$$ = document.querySelector('button');
const input$$ = document.querySelector('input');
const div$$ = document.querySelector('div');

butn$$.addEventListener('click', doRequest);

async function doRequest(){
    const input$$ = document.querySelector('input');
    const value = input$$.value;
    const response = await fetch(baseUrl + value);
    const json = await response.json();
    console.log(json);
    return json;

}




/*butn$$.addEventListener('click', () =>{
     const name = input$$.value;
     if(name){
        const baseUrl = 'https://api.nationalize.io?name=';
        fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            // Mostrar los datos en la página
            div$$.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
        });
} else {
    alert('Por favor, ingrese un nombre antes de hacer clic en el botón.');
}
});*/

    /*fetch('https://api.nationalize.io?name=')
    .then((response) =>{
        console.log(response);
        return response.json();
    } )
    .then((myJson) =>{ 
    console.log(myJson);
    });*/