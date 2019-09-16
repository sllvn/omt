import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts'
import moment from 'moment'

function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


const Timer = ({ startTime, endTime, duration, onComplete }) => {
  const [elapsedTime, setElapsedTime] = React.useState(0)
  const [isCompleted, setIsCompleted] = React.useState(false)

  useInterval(() => {
    const currentTime = moment()

    if (currentTime.isBefore(endTime)) {
      const elapsed = duration - endTime.diff(currentTime) // milliseconds
      setElapsedTime(elapsed)
    } else {
      // finish the session
      setIsCompleted(true)
      onComplete()
    }
  }, 16)

  const progress = elapsedTime / duration

  return (
    <View style={{ position: 'relative', width: 200, height: 200 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#d2dff1' }}>{moment.duration(elapsedTime).asSeconds()}</Text>
      </View>
      <ProgressCircle
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        strokeWidth={12}
        progress={progress}
        backgroundColor='#d2dff1'
        progressColor='#6c95cf'
      />
    </View>
  )
}

const App = () => {
  const [isComplete, setComplete] = React.useState(false)
  const startTime = moment()
  const duration = moment.duration(5, 'seconds')
  const endTime = startTime.add(duration)

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#789ed3' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {isComplete ? (
            <Text style={{ color: '#d2dff1' }}>finished</Text>
          ) : (
            <Timer
              startTime={startTime}
              endTime={endTime}
              duration={duration}
              onComplete={() => setComplete(true)}
            />
          )}
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default App;
