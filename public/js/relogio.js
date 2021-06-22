
function Time() {

    const data = new Date('09-09-2021 11:30:54');
    const time = document.querySelector('.time');

    function otherDates(data, valor) {

        switch (valor) {
            case 1:
                const dia = data.getDate();
                return dia;
            case 2:
                const ano = data.getFullYear();
                return ano;
            case 3:
                const hora = data.getHours();
                return hora;
            case 4:
                const minutos = data.getMinutes();
                return minutos;
        }
        

    }

    function diaDaSemana(data) {

        const diaSemana = data.getDay();
        let diaSemanaTexto;

        switch (diaSemana) {
            case 0:
                diaSemanaTexto = 'Domingo';
                break;
            case 1:
                diaSemanaTexto = 'Segunda-feira';
                break;
            case 2:
                diaSemanaTexto = 'Terça-feira';
                break;
            case 3:
                diaSemanaTexto = 'Quarta-feira';
                break;
            case 4:
                diaSemanaTexto = 'Quinta-feira';
                break;
            case 5:
                diaSemanaTexto = 'Sexta-feira';
                break;
            case 6:
                diaSemanaTexto = 'Sábado';
                break;
        }

        return diaSemanaTexto
        
    }

    function mesDoAno(data) {

        const mes = data.getMonth();
        let mesSemanaTexto;

        switch (mes) {
            case 0:
                mesSemanaTexto = 'Janeiro';
                break;
            case 1:
                mesSemanaTexto = 'Fevereiro';
                break;
            case 2:
                mesSemanaTexto = 'Março';
                break;
            case 3:
                mesSemanaTexto = 'Abril';
                break;
            case 4:
                mesSemanaTexto = 'Maio';
                break;
            case 5:
                mesSemanaTexto = 'Junho';
                break;
            case 6:
                mesSemanaTexto = 'Julho';
                break;
            case 7:
                mesSemanaTexto = 'Agosto';
                break;
            case 8:
                mesSemanaTexto = 'Setembro';
                break;
            case 9:
                mesSemanaTexto = 'Outubro';
                break;
            case 10:
                mesSemanaTexto = 'Novembro';
                break;
            case 11:
                mesSemanaTexto = 'Dezembro';
                break;
        }

        return mesSemanaTexto;

    }

    time.innerHTML = (`${diaDaSemana(data)}, ${otherDates(data, 1)} de ${mesDoAno(data)} de ${otherDates(data, 2)}<br />${otherDates(data, 3)}:${otherDates(data, 4)}`)

}

Time()

