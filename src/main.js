require('./style.css')
window.onload=function() { 
    console.log('Hello world')
    let pronoun = ['El','Nuestro'];
    let adj = ['grande', 'enorme', 'pobre'];
    let noun = ['runner','mosquito'];
    let domaine =['.com', '.us', '.net', '.fr'];
    let a, b, c, d;
    for (a=0; a<pronoun.length; a++){
        for (b=0; b<adj.length; b++){
            for (c=0; c<noun.length; c++){
                for (d=0; d<domaine.length; d++){
                console.log (pronoun[a] + noun[b] + adj[c] + domaine[d]);
                }

            }
        }
    } 
}
