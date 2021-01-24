export default function convertHourToMinutes(time: string) {
    //8:00

    const [hour, minutes] = time.split(':').map(Number); /*precisamos converter para
    Number, pq tá vindo como string.
    Explicação da linha em 01:44 (Olhando para as oportunidades)
    */
    const timeInMinutes = (hour * 60) + minutes; /*
    convertendo para minutos, pois o bd não entende em horas
    */
    console.log(minutes);

    return timeInMinutes;
}