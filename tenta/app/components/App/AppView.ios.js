// foo.ios.js = dedicated component to iOS
import React from 'react';
import { Button, View } from 'react-native'; 

import Title from '../Title';
import styles from '../../common/nativeStyles'; 
import * as COMMON from '../../common/example.js'; 

export default () =>
    <View style={styles.container}>
        <Title/>
        <View style={styles.buttonContainer}>
		<Button 
		  style={styles.buttonIos}
		  onPress={COMMON.function1}
		  title="Click a Button !"
		/>
        </View>
    </View>;