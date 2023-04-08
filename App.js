import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const App = () => {

  useEffect(() => {
    console.log(input);
  }, []);

  const [input, setInput] = useState('');

  const lastChecker = () => {
    return input[input.length - 1] === '+' ||
      input[input.length - 1] === '-' ||
      input[input.length - 1] === '/' ||
      input[input.length - 1] === '*'
      ? false
      : true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>{input}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.normal, styles.borderTop]}
          onPress={() =>
            input && lastChecker() ? setInput(input + '/') : setInput(input)
          }>
          <Text style={styles.btnText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.normal, styles.borderTop]}
          onPress={() =>
            input && lastChecker() ? setInput(input + '*') : setInput(input)
          }>
          <Text style={styles.btnText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.Hlarge, styles.borderTop]}
          onPress={() => setInput(input.replace(input[input.length - 1], ''))}
          onLongPress={() => setInput('')}>
          <Text style={styles.btnText}>{'<--'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.normal, styles.borderTop, {backgroundColor: '#fff'}]}
          onPress={() => setInput(input + '7')}>
          <Text style={styles.btnText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.normal, styles.borderTop, {backgroundColor: '#fff'}]}
          onPress={() => setInput(input + '8')}>
          <Text style={styles.btnText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.normal, styles.borderTop, {backgroundColor: '#fff'}]}
          onPress={() => setInput(input + '9')}>
          <Text style={styles.btnText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.normal, styles.borderTop]}
          onPress={() =>
            input && lastChecker() ? setInput(input + '-') : setInput(input)
          }>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.normal, styles.borderTop, {backgroundColor: '#fff'}]}
          onPress={() => setInput(input + '4')}>
          <Text style={styles.btnText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.normal, styles.borderTop, {backgroundColor: '#fff'}]}
          onPress={() => setInput(input + '/5')}>
          <Text style={styles.btnText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.normal, styles.borderTop, {backgroundColor: '#fff'}]}
          onPress={() => setInput(input + '6')}>
          <Text style={styles.btnText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.normal, styles.borderTop]}
          onPress={() =>
            input && lastChecker() ? setInput(input + '+') : setInput(input)
          }>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.subMain}>
        <View style={styles.sub}>
          <View style={styles.sub1}>
            <TouchableOpacity
              style={[
                styles.normal,
                styles.borderTop,
                {backgroundColor: '#fff', width: '33.3%'},
              ]}
              onPress={() => setInput(input + '1')}>
              <Text style={styles.btnText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.normal,
                styles.borderTop,
                {backgroundColor: '#fff', width: '33.3%'},
              ]}
              onPress={() => setInput(input + '2')}>
              <Text style={styles.btnText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.normal,
                styles.borderTop,
                {backgroundColor: '#fff', width: '33.3%'},
              ]}
              onPress={() => setInput(input + '3')}>
              <Text style={styles.btnText}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sub1}>
            <TouchableOpacity
              style={[
                styles.Hlarge,
                styles.borderTop,
                {backgroundColor: '#fff', width: '66.9%'},
              ]}
              onPress={() => setInput(input + '0')}>
              <Text style={styles.btnText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.normal,
                styles.borderTop,
                {backgroundColor: '#fff', width: '33.3%'},
              ]}
              onPress={() => setInput(input + '.')}>
              <Text style={styles.btnText}>.</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.equal}
          onPress={() =>
            lastChecker() ? setInput(eval(input)) : setInput(input)
          }>
          <Text style={[styles.btnText, {color: '#fff'}]}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  header: {
    height: '25%',
    backgroundColor: '#4B4B4B',
    paddingTop: 35,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 40,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    height: '15%',
  },
  normal: {
    width: '25%',
    height: '100%',
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Hlarge: {
    width: '50%',
    height: '100%',
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
  },
  subMain: {
    flexDirection: 'row',
    height: '30%',
  },
  sub: {
    flexDirection: 'column',
    width: '75%',
    height: '100%',
  },
  sub1: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  equal: {
    width: '25%',
    height: '100%',
    backgroundColor: '#FB9C00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderTop: {
    borderTopWidth: 1,
    borderColor: '#D3D3D3',
    borderRightColor: '#D3D3D3',
    borderRightWidth: 1,
  },
});
