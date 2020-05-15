import { AntDesign } from '@expo/vector-icons';
import * as React from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';

export default function AddMovieButton(props) {
  return (
      <TouchableOpacity onPress={() => alert('Add movie')}>
            <View>
                <AntDesign
                    name="pluscircleo"
                    size={30}
                    style={{
                        marginRight: 15
                    }}
                    color="black"
                />
            </View>
      </TouchableOpacity>
  );
}
