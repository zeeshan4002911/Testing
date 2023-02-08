import React, { useState, useEffect } from "react";
import styles from "../styles/styles.quiz.module.css"

const Quiz = () => {
    const [bool, setBool] = useState(false);
    const [data, setData] = useState([
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What country has a horizontal bicolor red and white flag?",
            "correct_answer": "Monaco",
            "incorrect_answers": [
                "Bahrain",
                "Malta",
                "Liechenstein"
            ]
        },
        {
            "category": "Science: Mathematics",
            "type": "boolean",
            "difficulty": "medium",
            "question": "A &#039;Millinillion&#039; is a real number.",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which character in the &quot;Animal Crossing&quot; series uses the phrase &quot;zip zoom&quot; when talking to the player?",
            "correct_answer": "Scoot",
            "incorrect_answers": [
                "Drake",
                "Bill",
                "Mallary"
            ]
        },
        {
            "category": "Science & Nature",
            "type": "multiple",
            "difficulty": "hard",
            "question": "How many protons are in an oxygen atom?",
            "correct_answer": "Eight",
            "incorrect_answers": [
                "Four",
                "Two",
                "Six"
            ]
        }
    ]);
    const [index, setIndex] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=4")
            .then(response => response.json())
            .then(data => {
                if (data.response_code !== 0) return;
                console.log("fetched data", data.results);
                setData(data.results);
            })
    }, [])

    const answerShuffler = () => {
        let answer = data[index].incorrect_answers;
        const random = parseInt(Math.random() * answer.length + 1);
        answer.splice(random, 0, data[index].correct_answer);
        return answer;
    }

    const handleCorrect = (e) => {
        const selected = e.target.dataset.nsOption;
        if (selected === data[index].correct_answer) {
            setCorrectCount(correctCount + 1);
        }
        if (index === 3) {
            setBool(true);
            console.log("The end");
            return;
        }
        setIndex(index + 1);
    }



    return (
        <div className="container">
            {bool && <div className={styles.finish} id="finish">You Scored {correctCount} out of 4</div>}
            <div className={styles["question-section"]}>
                <div className={styles["question-no"]}>Question {index + 1}<span style={{ fontSize: 20 }}>/4</span></div>
                <div className="question" id="question">{data[index].question}</div>
            </div>
            <div className={styles.answer}>
                {answerShuffler().map(option => (
                    <div key={option} className={styles.option} data-ns-option={option} onClick={handleCorrect}>{option}</div>
                ))}
            </div>
        </div>
    )
}

export default Quiz;