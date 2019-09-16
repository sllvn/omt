import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import moment from 'moment'
import Sound from 'react-native-sound'

import Timer from './timer'

const App = () => {
  const [isComplete, setComplete] = React.useState(false)
  const [isRunning, setIsRunning] = React.useState(false)

  const startTime = moment()
  const duration = moment.duration(5, 'seconds')
  const endTime = startTime.add(duration)

  const handleStart = () => {
    setIsRunning(true)
  }

  const handleComplete = () => {
    setComplete(true)
    setIsRunning(false)

    const gong = new Sound('gong-burmese.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log(error)
      }

      gong.play((success) => {
        if (!success) {
          console.log('Sound did not play')
        }
      })
    })
  }

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#789ed3' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {isRunning ? (
            <Timer
              startTime={startTime}
              endTime={endTime}
              duration={duration}
              onComplete={handleComplete}
            />
          ) : (
            isComplete ? (
              <Text style={{ color: '#d2dff1' }}>finished</Text>
            ) : (
              <TouchableOpacity onPress={handleStart}>
                <Text style={{ color: '#d2dff1' }}>start</Text>
              </TouchableOpacity>
            )
          )}
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default App;
