import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';

const Detail = ({navigation}) => {
  return (
    <View style={style.hero}>
      <View style={style.navcon}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={style.iconnav}>
            <Image
              style={style.iconimg}
              source={require('../icon/Frame.png')}
            />
          </View>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 28,
            color: 'black',
            fontWeight: 'bold',
            letterSpacing: 2,
          }}>
          Kembali
        </Text>
      </View>

      <View style={style.about}>
        <View style={style.holdabt}>
          <Image
            style={style.fotomakan}
            source={require('../assets/images/unsplash_-GFCYhoRe48.png')}
          />
          <View>
            <Text
              style={{
                marginTop: 12,
                color: 'black',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Burger Keju
            </Text>
            <Text style={{color: '#A4A4A4', fontSize: 14, marginTop: 12}}>
              hamburger dengan sepotong keju leleh di atas patty daging, Daging
              potong tipis Dan ditambahkan dengan telur, ditambahkan menjelang
              akhir waktu memasak, Yang di hidangkan di kantin Sekola SMK
              Multistudi High School dengan harga yang worth it.
            </Text>
          </View>
          <View style={style.line}></View>

          <View style={style.pesan}>
            <Text style={{color: 'black', fontSize: 16, marginBottom: 18}}>
              Masukan Jumlah Pemesanan
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                paddingLeft: 10,
                height: 64,
              }}
            />
          </View>

          <TouchableOpacity>
            <View style={style.konfirm}>
              <Text style={{color: 'white', fontSize: 18, letterSpacing: 1}}>
                Konfirmasi Pemesanan
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  navcon: {
    paddingLeft: 32,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 18,
    marginBottom: 34,
  },
  iconnav: {
    backgroundColor: '#E93B3B',
    width: 70,
    height: 70,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconimg: {
    width: 60,
    height: 60,
  },

  about: {
    display: 'flex',
    alignItems: 'center',
    height: 700,
  },

  fotomakan: {
    width: '100%',
    height: 550,
    borderRadius: 16,
    resizeMode: 'cover',
    display: 'flex',
    alignItems: 'center',
  },
  holdabt: {
    width: '90%',
  },

  line: {
    marginTop: 26,
    marginBottom: 24,
    borderColor: 'gray',
    borderWidth: 0.5,
    width: '100%',
  },

  pesan: {
    height: 130,
    marginBottom: 209,
  },

  konfirm: {
    backgroundColor: '#E93B3B',
    height: 66,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Detail;
