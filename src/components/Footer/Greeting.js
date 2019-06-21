import React from 'react';

class Greeting extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12 && hours >= 5) {
      timeOfDay = "morning";
    }
    if (hours >= 12 && hours < 16) {
      timeOfDay = "afternoon";
    }
    if (hours >= 16 && hours < 20) {
      timeOfDay = "evening";
    }
    if (hours < 5 && hours >= 20) {
      timeOfDay = "night";
    }

    return (
      <div>Have a good {timeOfDay}!</div>
    );
  }
}

export default Greeting;