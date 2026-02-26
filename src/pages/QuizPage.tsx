import { useState, useCallback, useMemo } from 'react';
import { quizQuestions, type QuizQuestion } from '../data/quizData';

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

type QuizState = 'start' | 'playing' | 'result';

export default function QuizPage() {
    const [state, setState] = useState<QuizState>('start');
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);

    const startQuiz = useCallback(() => {
        setQuestions(shuffleArray(quizQuestions));
        setCurrentIndex(0);
        setSelectedIndex(null);
        setScore(0);
        setAnswered(false);
        setState('playing');
    }, []);

    const currentQuestion = questions[currentIndex];
    const totalQuestions = quizQuestions.length;
    const progress = state === 'playing' ? ((currentIndex) / totalQuestions) * 100 : 0;

    const handleOptionClick = useCallback((optIndex: number) => {
        if (answered) return;
        setSelectedIndex(optIndex);
        setAnswered(true);
        if (optIndex === currentQuestion.correctIndex) {
            setScore(prev => prev + 1);
        }
    }, [answered, currentQuestion]);

    const handleNext = useCallback(() => {
        if (currentIndex + 1 >= totalQuestions) {
            setState('result');
        } else {
            setCurrentIndex(prev => prev + 1);
            setSelectedIndex(null);
            setAnswered(false);
        }
    }, [currentIndex, totalQuestions]);

    const percentage = useMemo(() => {
        if (totalQuestions === 0) return 0;
        return Math.round((score / totalQuestions) * 100);
    }, [score, totalQuestions]);

    const getResultEmoji = () => {
        if (percentage >= 90) return '🏆';
        if (percentage >= 70) return '🎉';
        if (percentage >= 50) return '💪';
        return '📚';
    };

    const getResultMessage = () => {
        if (percentage >= 90) return 'Hervorragend! Du bist bestens vorbereitet!';
        if (percentage >= 70) return 'Gut gemacht! Noch ein bisschen üben!';
        if (percentage >= 50) return 'Nicht schlecht, aber da geht noch mehr!';
        return 'Weiter üben – du schaffst das!';
    };

    // ── Start Screen ──
    if (state === 'start') {
        return (
            <div className="quiz-page">
                <header className="stundenplan-header">
                    <div className="header-eyebrow">
                        <span className="badge-dot" />
                        Prüfungsvorbereitung
                    </div>
                    <h1>Quiz</h1>
                    <p>Teste dein Wissen mit echten Prüfungsfragen</p>
                </header>

                <div className="quiz-start-card">
                    <div className="quiz-start-card__glow" />
                    <div className="quiz-start-icon">📝</div>
                    <h2 className="quiz-start-title">Prozessortechnik Quiz</h2>
                    <div className="quiz-start-stats">
                        <div className="quiz-stat">
                            <span className="quiz-stat__number">{totalQuestions}</span>
                            <span className="quiz-stat__label">Fragen</span>
                        </div>
                        <div className="quiz-stat-divider" />
                        <div className="quiz-stat">
                            <span className="quiz-stat__number">4</span>
                            <span className="quiz-stat__label">Optionen</span>
                        </div>
                        <div className="quiz-stat-divider" />
                        <div className="quiz-stat">
                            <span className="quiz-stat__number">~10</span>
                            <span className="quiz-stat__label">Minuten</span>
                        </div>
                    </div>
                    <p className="quiz-start-desc">
                        Alle Fragen wurden exakt so in der Prüfung gestellt.
                        Die Reihenfolge wird bei jedem Start zufällig gemischt.
                    </p>
                    <button className="quiz-start-btn" onClick={startQuiz} id="quiz-start-btn">
                        Quiz starten
                        <span className="quiz-start-btn__arrow">→</span>
                    </button>
                </div>
            </div>
        );
    }

    // ── Result Screen ──
    if (state === 'result') {
        return (
            <div className="quiz-page">
                <header className="stundenplan-header">
                    <div className="header-eyebrow">
                        <span className="badge-dot" />
                        Ergebnis
                    </div>
                    <h1>Quiz beendet</h1>
                    <p>Hier ist deine Auswertung</p>
                </header>

                <div className="quiz-result-card">
                    <div className="quiz-result-card__glow" />
                    <div className="quiz-result-emoji">{getResultEmoji()}</div>
                    <div className="quiz-result-score">
                        <span className="quiz-result-score__value">{score}</span>
                        <span className="quiz-result-score__sep">/</span>
                        <span className="quiz-result-score__total">{totalQuestions}</span>
                    </div>
                    <div className="quiz-result-percentage">{percentage}% richtig</div>
                    <div className="quiz-result-bar-track">
                        <div
                            className="quiz-result-bar-fill"
                            style={{ width: `${percentage}%` }}
                        />
                    </div>
                    <p className="quiz-result-message">{getResultMessage()}</p>
                    <button className="quiz-start-btn" onClick={startQuiz} id="quiz-restart-btn">
                        Nochmal spielen
                        <span className="quiz-start-btn__arrow">↻</span>
                    </button>
                </div>
            </div>
        );
    }

    // ── Playing Screen ──
    return (
        <div className="quiz-page">
            {/* Progress bar */}
            <div className="quiz-progress">
                <div className="quiz-progress__bar">
                    <div
                        className="quiz-progress__fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <span className="quiz-progress__text">
                    Frage {currentIndex + 1} von {totalQuestions}
                </span>
            </div>

            {/* Question card */}
            <div className="quiz-question-card" key={currentQuestion.id}>
                <div className="quiz-question-card__glow" />
                <span className="quiz-question-number">{currentIndex + 1}</span>
                <h2 className="quiz-question-text">{currentQuestion.question}</h2>

                <div className="quiz-options">
                    {currentQuestion.options.map((option, idx) => {
                        let optionClass = 'quiz-option';
                        if (answered) {
                            if (idx === currentQuestion.correctIndex) {
                                optionClass += ' quiz-option--correct';
                            } else if (idx === selectedIndex) {
                                optionClass += ' quiz-option--incorrect';
                            } else {
                                optionClass += ' quiz-option--dimmed';
                            }
                        }
                        return (
                            <button
                                key={idx}
                                className={optionClass}
                                onClick={() => handleOptionClick(idx)}
                                disabled={answered}
                                id={`quiz-option-${idx}`}
                            >
                                <span className="quiz-option__letter">
                                    {String.fromCharCode(65 + idx)}
                                </span>
                                <span className="quiz-option__text">{option}</span>
                                {answered && idx === currentQuestion.correctIndex && (
                                    <span className="quiz-option__icon">✓</span>
                                )}
                                {answered && idx === selectedIndex && idx !== currentQuestion.correctIndex && (
                                    <span className="quiz-option__icon">✗</span>
                                )}
                            </button>
                        );
                    })}
                </div>

                {answered && (
                    <button className="quiz-next-btn" onClick={handleNext} id="quiz-next-btn">
                        {currentIndex + 1 >= totalQuestions ? 'Ergebnis anzeigen' : 'Nächste Frage'}
                        <span className="quiz-next-btn__arrow">→</span>
                    </button>
                )}
            </div>
        </div>
    );
}
