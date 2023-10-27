import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';

const Info = ({navigation}) => {
  return (
    <View style={style.hero}>
      <View style={style.incon}>
        <Image
          style={style.imicon}
          source={require('../icon/centang.png')}></Image>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 34,
            marginTop: 24,
          }}>
          Pemesanan Sukses
        </Text>
        <Text style={{fontSize: 24, marginTop: 12}}>
          Pesanan Anda Telah Kami Terima
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={style.konbtn}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              fontWeight: 'bold',
              letterSpacing: 1,
            }}>
            Kembali Ke Tampilan Utama
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  hero: {
    borderWidth: 1,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },

  incon: {
    marginTop: 300,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 480,
  },

  imicon: {
    width: 300,
    height: 300,
  },

  konbtn: {
    width: 600,
    height: 67,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E93B3B',
  },
});

export default Info;
