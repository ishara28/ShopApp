import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../../redux/actions/countActions';
import {useTranslation} from 'react-i18next';
import {clearData, fetchData} from '../../redux/actions/dataAction';

const Template = () => {
  const {t, i18n} = useTranslation();
  const count = useSelector((state: any) => state.counter.count);
  const data = useSelector((state: any) => state.data.data);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.columnContainer}>
        {/* Usage of redux  */}
        <View style={[styles.box, {backgroundColor: 'white'}]}>
          <Text style={{fontSize: 20}}>Redux</Text>
          <Text>Redux Counter</Text>
          <Text>{count}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => dispatch(increment())}>
              <Text style={styles.btnText}>Incremenet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => dispatch(decrement())}>
              <Text style={styles.btnText}>Decremenet</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* End of Redux  */}

        {/* Fetch Data using Redux-Saga  */}
        <View style={[styles.box, {backgroundColor: 'white'}]}>
          <Text style={{fontSize: 20}}>Redux-Saga</Text>
          <Text>Fetch API data using Redux-Saga</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => dispatch(fetchData())}>
              <Text style={styles.btnText}>Fetch</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => dispatch(clearData())}>
              <Text style={styles.btnText}>Clear</Text>
            </TouchableOpacity>
          </View>
          <Text>{JSON.stringify(data)}</Text>
        </View>
        {/* End of  Redux-Saga  */}

        {/* Translation  */}
        <View style={[styles.box, {backgroundColor: 'white'}]}>
          <Text style={{fontSize: 20}}>Translation</Text>
          <Text>{t('NAME')}</Text>
          <Text>{t('AGE')}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => i18n.changeLanguage('si')}>
              <Text style={styles.btnText}>Sinhala</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => i18n.changeLanguage('en')}>
              <Text style={styles.btnText}>English</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* End of Translation  */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnContainer: {
    marginTop: 20,
  },
  box: {
    alignItems: 'center',
    height: 150,
    marginVertical: 5,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  btnText: {
    color: 'white',
  },
});

export default Template;
