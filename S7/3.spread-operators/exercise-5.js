const colors = [
    'rojo',
    'azul',
    'amarillo',
    'verde',
    'naranja']; 


    const copyColors = [...colors];

    copyColors.splice(2,1);

/*const colors2 =  [...colors.slice(0,2),...colors.slice(0,3)];*/
    
    
    
    console.log(copyColors);