export default function daysToXmas(date) {
  let Fechaactual=new Date(date);
  let navidadAnoActual=2021;

  let FechaNavidad = new Date(navidadAnoActual,11,25);
  let MilisegundosUnDia= 1000*60*60*24;
  let DiasFaltantes= Math.ceil(
    (FechaNavidad.getTime() - Fechaactual.getTime())/
     (MilisegundosUnDia)
  );
  return DiasFaltantes
}
