// foo.native.js = component shared btwn iOS + Android (but not web)
import React from 'react';
import { Text } from 'react-native';
import styles from '../../common/nativeStyles';

export default () => 
    <Text style={styles.title}>
        tenta
    </Text>;