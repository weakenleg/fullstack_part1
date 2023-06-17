import { useState } from 'react';

const Button = (props) => {
  console.log(props.text)
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)
};
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}:</td>
    <td>{value}</td>
  </tr>
);
const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / total;
  const positivePercentage = (props.good / total) * 100;
  if (total === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={props.good} />
          <StatisticLine text="Neutral" value={props.neutral} />
          <StatisticLine text="Bad" value={props.bad} />
          <StatisticLine text="Total" value={total} />
          <StatisticLine text="Average" value={average.toFixed(2)} />
          <StatisticLine text="Positive Percentage"
            value={`${positivePercentage.toFixed(2)}%`}
          />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setNeutral(neutral);
    setBad(bad);
  };

  const handleNeutralClick = () => {
    setGood(good);
    setNeutral(neutral+1);
    setBad(bad);
  };

  const handleBadClick = () => {
    setGood(good);
    setNeutral(neutral);
    setBad(bad+1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
