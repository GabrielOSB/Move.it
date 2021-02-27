import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const {resetCountdown} = useContext(CountdownContext);

    function handleChellengeSucceeded(){
        completeChallenge();
        resetCountdown();
    }

    function handleChellengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>

                        <button 
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={handleChellengeFailed}
                        >
                            Falhei
                        </button>

                        <button 
                        type="button"
                        className={styles.challengeSucceededButton}
                        onClick={handleChellengeSucceeded}
                        >
                            Completei
                        </button>

                    </footer>
                </div>
            ) : (
            <div className={styles.challengeNotActive}>
                 <strong>inicie um ciclo para receber desafios a serem completados</strong>
             <p>
                  <img src="icons/level-up.svg" alt="Level Up" />
                   Avance de Level completando desafios
                </p>
            </div>
            )}
        </div>
    )
}