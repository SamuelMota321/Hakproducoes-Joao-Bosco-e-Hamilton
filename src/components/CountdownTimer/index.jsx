import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { Button } from '../Button'

const CountdownTimer = () => {
    const [timeRemaining, setTimeRemaining] = useState('');

    // Data pré-determinada para a contagem regressiva (ano, mês, dia, hora, minuto, segundo)
    const targetDate = new Date('2024-06-29T20:59:59'); // Ajuste a data e hora corretamente para a data do evento

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            } else {
                clearInterval(interval);
                setTimeRemaining('Chegou a hora!');
                
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`${styles.countDownTimer} container`}>
            <h1 className='title md center'>Contagem regressiva</h1>
            <h2 className='title lg center bold'>{timeRemaining}</h2>
            <p className='paragraph center'>para o show</p>
            <Button text='GARANTA SEU INGRESSO AGORA!' className={'btn'}/>
        </section>
    );
}

export default CountdownTimer;
