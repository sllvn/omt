import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import moment from 'moment'

import Timer from './timer'

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
