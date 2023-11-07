const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul$$ = document.createElement('ul');
for (app of apps){
    const item$$ = document.createElement('li');
    item$$.textContent = app;
    ul$$.appendChild(item$$);
}

document.body.appendChild(ul$$);
