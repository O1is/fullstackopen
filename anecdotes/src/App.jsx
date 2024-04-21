import React, { useState } from "react";

const Title = (props) => <h1>{props.text}</h1>;

const Button = (props) => (
  <button onClick={props.random}>next anecdotes</button>
);

const VoteButton = (props) => <button onClick={props.update}>vote</button>;

const ShowVotes = (props) => <div>{props.votes}</div>;

const App = () => {
  const anecdotes = [
    "If it hurts, do it a lot more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const initialPoints = Array(anecdotes.length).fill(0);
  console.log("initialPoints: ", initialPoints);
  const [points, setPoints] = useState(initialPoints);
  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState(0);

  const updateVote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };

  const randomNumber = (max, min) => {
    const num = Math.floor(Math.random() * (max - min) + min);
    setSelected(num);
  };

  const findMostVotes = () => {
    const maxNumber = Math.max(...points);
    const maxIndex = points.indexOf(maxNumber);
    return maxIndex;
  };

  return (
    <>
      <Title text="Anecdote of the day"></Title>
      <div>{anecdotes[selected]}</div>
      <ShowVotes votes={points[selected]}></ShowVotes>
      <VoteButton update={updateVote}></VoteButton>
      <Button random={() => randomNumber(anecdotes.length, 0)}></Button>
      <Title text="Anecdote with most votes"></Title>
      <div>{anecdotes[findMostVotes()]}</div>
      <ShowVotes votes={points[findMostVotes()]}></ShowVotes>
    </>
  );
};

export default App;
