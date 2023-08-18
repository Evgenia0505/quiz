import "./App.css";
import React from "react";

const questions = [
  {title: 'Как в JavaScript вычислить процент от числа?',
  variants: [
        'Так в JavaScript нельзя сделать',
        'Оператор : %',
        'Умножить на кол-во процентов и разделить на 100',
        'Вызвать метод findPercent()'
  ],
  correct: 2,
  },
  {
    title: 'Результат выражения: "13" + 7',
    variants: [
          '20',
          '137',
          'undefined',
          'error'    
    ],
    correct: 1,     
  },
  {title: 'Укажите правильную инструкцию для создания объекта:',
  variants: [
        'let user = {}',
        'let user = new {}',
        'let user = []',
        'let user = new [3]'
  ],
  correct: 0,
  },
  {
    title: 'На JavaScript нельзя писать: ',
    variants: [
          'Игры',
          'Скрипты для сайтов',
          'Десктопные приложения',
          'Плохо'
    ],
    correct: 3,
  },
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: ["приложение", "часть приложения или страницы", "то, что я не знаю что такое"],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  }
];

function Result({ correct }) {
  return (
    <div className="result">
      {/* <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="" /> */}
     {correct > 3 ? 
        (<img className="result_flapper" src="flapper.png" alt="" />) : (<img className="result_fail" src="fail.png" alt="" />)
      }
      <h2>
        Вы дали {correct} верных ответа из {questions.length}
      </h2>
    <a href="/">
        <button>Попробовать снова</button>
    </a>
    </div>
  );
}

function Game({currentQuestion, onClickVariant, step}) {
  const percent = Math.round(step / questions.length * 100);
  return (
    <>
      <div className="progress">
        <div style= {percent === 0 ? {width: "1%"} : {width: `${percent}%`}} className="progress__inner"></div>
      </div>
      <h1>{currentQuestion.title}</h1>
      <ul>
       {
        currentQuestion.variants.map((el, index) => {
          return (
            <li onClick={() => onClickVariant(index)} key={index}>
              {el}
            </li>
          )
        })
       }
      </ul>
    </>
  );
}
function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const currentQuestion = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if(index === currentQuestion.correct) {
      setCorrect(correct + 1);
    }
    setStep(step + 1);
}
  return (
    <div className="App">
      {
        step < questions.length ?
        (<Game currentQuestion={currentQuestion} onClickVariant={onClickVariant} step={step} />):
        (<Result correct={correct}/>)
      }
    </div>
  );
}

export default App;
