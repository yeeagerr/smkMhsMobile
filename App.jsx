import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={style.hero}>
      <View style={style.navcon}>
        <View style={style.navbar}>
          <Image
            style={style.imagestyle}
            source={{
              uri: 'https://multistudi.sch.id/wp-content/uploads/2021/07/tentang-1024x252.png',
            }}
          />
          <TouchableOpacity>
            <Image
              style={{width: 40, height: 30}}
              source={require('./src/assets/images/menu-line.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.title}>
        <Text style={{color: '#A4A4A4', fontSize: 15}}>Selamat Datang Di</Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 16,
          }}>
          Kantin Multistudi
        </Text>
      </View>

      <View style={style.menucon}>
        <View style={{width: 590, marginBottom: 12}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 26}}>
            Menu Makanan
          </Text>
        </View>
        <View style={style.menu}>
          <TouchableOpacity>
            <View style={style.descmenu}>
              <Image
                style={style.fotomakan}
                source={require('./src/assets/images/unsplash_-GFCYhoRe48.png')}
              />

              <Text
                style={{
                  marginBottom: 4,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 24,
                }}>
                Burger Keju
              </Text>
              <Text
                style={{
                  marginBottom: 4,
                  color: '#FF0202',
                  fontWeight: 'bold',
                  fontSize: 24,
                }}>
                Rp. 20.000
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={style.descmenu}>
              <Image
                style={style.fotomakan}
                source={require('./src/assets/images/unsplash_i5XurHSjE1M.png')}
              />

              <Text
                style={{
                  marginBottom: 4,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 24,
                }}>
                Mie Goreng
              </Text>
              <Text
                style={{
                  marginBottom: 4,
                  color: '#FF0202',
                  fontWeight: 'bold',
                  fontSize: 24,
                }}>
                Rp. 11.000
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{width: 590, marginBottom: 12, marginTop: 36}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 26}}>
            Menu Minuman
          </Text>
        </View>
        <View style={style.menu}>
          <TouchableOpacity>
            <View style={style.descmenu}>
              <Image
                style={style.fotomakan}
                source={require('./src/assets/images/unsplash_8h6L01Httpw.png')}
              />

              <Text
                style={{
                  marginBottom: 4,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 24,
                }}>
                Xing Fu Tang Boba
              </Text>
              <Text
                style={{
                  marginBottom: 4,
                  color: '#FF0202',
                  fontWeight: 'bold',
                  fontSize: 24,
                }}>
                Rp. 15.000
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={style.descmenu}>
              <Image
                style={style.fotomakan}
                source={require('./src/assets/images/unsplash_kbch-i63YTg.png')}
              />

              <Text
                style={{
                  marginBottom: 4,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 24,
                }}>
                Lemon Tea
              </Text>
              <Text
                style={{
                  marginBottom: 4,
                  color: '#FF0202',
                  fontWeight: 'bold',
                  fontSize: 24,
                }}>
                Rp. 5.000
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Text
        style={{
          textAlign: 'center',
          marginTop: 15,
          color: '#A4A4A4',
          fontSize: 14,
        }}>
        Created By : M H A
      </Text>
      <Text style={{textAlign: 'center', color: '#A4A4A4', fontSize: 14}}>
        Muhammad Habib Abdillah
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  hero: {
    width: '100%',
    height: '100%',
  },
  navbar: {
    backgroundColor: '#E93B3B',
    width: 590,
    borderRadius: 80,
    height: 82,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 29,
    paddingLeft: 29,
    marginTop: 10,
  },
  navcon: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    marginTop: 32,
    marginLeft: 42,
  },
  imagestyle: {
    width: 290,
    height: 62,
  },

  menucon: {
    marginTop: 32,
    display: 'flex',
    alignItems: 'center',
  },

  menu: {
    width: 590,
    height: 415,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  descmenu: {
    width: 278,
    display: 'flex',
    alignContent: 'center',
    height: '100%',
  },

  fotomakan: {
    width: '100%',
    borderRadius: 6,
    height: 240,
    resizeMode: 'cover',
    marginBottom: 4,
  },
});

export default App;
