let nombres=['photo', 'postcard', 'photo', 'photo', 'video']
let nombresOrdenados=['photo', 'postcard', 'photo', 'photo', 'video'].sort();

let contador=0;

for (var i = 0; i < nombresOrdenados.length; i++) {
  if (nombresOrdenados[i]===nombresOrdenados[i+1]) {
    contador++
    nombresOrdenados[i]= nombresOrdenados[i]+"("+contador+")"
  }
  
}
      document.write(nombresOrdenados)

