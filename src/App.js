// import {useState} from "react";

// const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

// export default function App() {
//   return (
//     <div>
//       <Steps />
//       {/* <Steps /> */}
//       <StepMessage step={1}>
//         <p>Pass in content</p>
//         <p>L</p>
//       </StepMessage>
//       <StepMessage step={2}>
//         <p>Read children props</p>
//         <p>R</p>
//       </StepMessage>
//     </div>
//   );
// }
// function Steps() {
//   const [step, setStep] = useState(1);
//   // const [ste, setSte] = useState({name: "jonas"});
//   const [isOpen, setIsOpen] = useState(true);

//   function Previous() {
//     if (step > 1) setStep((s) => s - 1);
//   }

//   function Next() {
//     if (step < 3) {
//       setStep((s) => s + 1);

//       // setStep((s) => s + 1);
//       // setStep(step + 1);
//     }
//     // setSte({name: "sajan"});
//   }
//   return (
//     <div>
//       <button className="close" onClick={() => setIsOpen((r) => !r)}>
//         &times;
//       </button>
//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>
//           <StepMessage step={step}>{messages[step - 1]}</StepMessage>
//           <div className="buttons">
//             <Button bgColor="#7950f2" textColor="#fff" onClick={Previous}>
//               <span>r</span> Previous
//             </Button>
//             <Button bgColor="#7950f2" textColor="#fff" onClick={Next}>
//               Next <span>r</span>
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function StepMessage({step, children}) {
//   return (
//     <p className="message">
//       <h3> Step {step} </h3>
//       {children}
//     </p>
//   );
// }

// function Button({bgColor, textColor, onClick, children}) {
//   return (
//     <div>
//       <button
//         className="btn"
//         onClick={onClick}
//         style={{backgroundColor: bgColor, color: textColor}}>
//         {children}
//       </button>
//     </div>
//   );
// }

import {useState} from "react";

export default function App() {
  return (
    <div>
      <Accordion data={fags} />
    </div>
  );
}

const fags = [
  {
    title: "Where are these chairs assembled?",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
  },
  {
    title: "Do you ship to countries outside the EU",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin ",
  },
];

function Accordion({data}) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}>
          {el.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="Test 1"
        num={22}
        key="text 1">
        <p>readable content of a page when looking</p>
        <ul>
          <li>reader will be distracted by the</li>
          <li>readable content of a page when looking</li>
          <li>readable content of a page when looking</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({num, title, text, curOpen, onOpen, children}) {
  // const [isOpen, setIsOpen] = useState(false);

  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div className={`items ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

// import {useState} from "react";

// export default function App() {
//   return (
//     <div>
//       <FlashCards />
//     </div>
//   );
// }

// const questions = [
//   {
//     id: 3457,
//     question: "What language is React based on?",
//     answer: "JavaScript",
//   },
//   {
//     id: 7336,
//     question: "What are the building blocks of React apps?",
//     answer: "Components",
//   },
//   {
//     id: 8832,
//     question:
//       "Whats the name of the syntax we use to describe a UI in React apps<",
//     answer: "JSX",
//   },
//   {
//     id: 1297,
//     question: "How to pass data from parent to child components?",
//     answer: "Props",
//   },
//   {
//     id: 9103,
//     question: "How to give components memory? ",
//     answer: "useState Hook",
//   },
//   {
//     id: 2002,
//     question:
//       "What do we call an input element that is completely synchronised?",
//     answer: "Controlled element",
//   },
// ];

// function FlashCards() {
//   const [selectedId, setSelectedId] = useState(9103);

//   function Handler(id) {
//     setSelectedId(id !== selectedId ? id : null);
//   }
//   return (
//     <div className="question-box">
//       {questions.map((question) => (
//         <div
//           key={question.id}
//           onClick={() => Handler(question.id)}
//           className={question.id === selectedId ? "selected" : ""}>
//           <p>
//             {question.id === selectedId ? question.answer : question.question}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

//Coding Challenge State Part-1

// import {useState} from "react";

// export default function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   function handlerClick() {
//     setCount(0);
//     setStep(1);
//   }

//   const date = new Date("Today 10 December 2024");
//   date.setDate(date.getDate() + count);

//   return (
//     <div className="challenge">
//       <div className="operator">
//         <input
//           type="range"
//           min="0"
//           max="10"
//           value={step}
//           onChange={(e) => setStep(Number(e.target.value))}
//         />

//         <p className="text">Step : {step}</p>
//       </div>

//       <div className="operator">
//         <button className="btn" onClick={() => setCount((c) => c - step)}>
//           -
//         </button>
//         <input
//           type="text"
//           className="input"
//           value={count}
//           onChange={(e) => setCount(Number(e.target.value))}
//         />
//         <button className="btn" onClick={() => setCount((c) => c + step)}>
//           +
//         </button>
//       </div>
//       <p className="date">
//         <span>
//           {count === 0
//             ? " Today is "
//             : count > 0
//             ? `${count} days from today is `
//             : `${Math.abs(count)} days ago was `}
//         </span>
//         <span>{date.toDateString()}</span>
//       </p>

//       {count !== 0 || step !== 1 ? (
//         <div className="button">
//           <button onClick={handlerClick}>Reset</button>
//         </div>
//       ) : null}
//     </div>
//   );
// }
