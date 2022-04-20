export default function pangram(letter) {
 let cadena=letter;
 const abecedarioMinusculas="abcdefghijklmnñopqrstuvwxyz"
 cadena=cadena.toLowerCase();
 return Array.from(abecedarioMinusculas).every(letra => cadena.includes(letra));
  
}
