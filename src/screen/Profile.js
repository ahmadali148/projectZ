import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Styles from './Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  return (
    <View style={Styles.maincontainer}>
      <View style={Styles.header}>
        <TouchableOpacity
          style={{
            marginRight: 20,
          }}>
          <Icon
            name="ios-ellipsis-horizontal-outline"
            size={40}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.imgView}>
        <Image
          source={require('../assets/badge.png')}
          style={{
            height: 35,
            width: 35,
            marginTop: 10,
          }}
        />
        <Image
          source={require('../assets/badge3.png')}
          style={{
            height: 50,
            width: 50,
          }}
        />
        <Image
          source={require('../assets/badge3.png')}
          style={{
            height: 50,
            width: 50,
          }}
        />
        <Image
          source={require('../assets/badge3.png')}
          style={{
            height: 50,
            width: 50,
          }}
        />
        <Image
          source={require('../assets/badge3.png')}
          style={{
            height: 50,
            width: 50,
          }}
        />
      </View>
      <View style={Styles.profileView}>
        <View style={Styles.profileImg}>
          <ImageBackground
            source={require('../assets/messi.jpg')}
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity style={Styles.editPhoto}>
              <Text style={{color: 'black'}}>EDIT PHOTO</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={Styles.profileInfo}>
          <Text style={{color: 'black'}}>NAME</Text>
          <Text style={{color: 'black'}}>LOCATION</Text>
          <Text style={{color: 'black'}}>TOP SPEED IN KMPH</Text>
          <TouchableOpacity style={Styles.editProfile}>
            <Text style={{color: '#FFFF'}}>EDIT PROFILE</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.profileView2}>
        <View style={Styles.profileInfo2}>
          <Text style={{color: 'black'}}>Bowling Hand</Text>
          <Text style={{color: 'black'}}>Bowling Style</Text>
          <Text style={{color: 'black'}}>Coach Name</Text>
          <Text style={{color: 'black'}}>Academy Name</Text>
        </View>
        <View style={Styles.profileInfo3}>
          <Text style={{color: 'black', marginRight: 10}}>Right Hand</Text>
          <Text style={{color: 'black', marginRight: 10}}>
            Medium fast/Off Spin
          </Text>
          <Text style={{color: 'black', marginRight: 10}}>
            @Coach name/Blank
          </Text>
          <Text style={{color: 'black', marginRight: 10}}>
            Academu name/Blank
          </Text>
        </View>
      </View>
      <View style={Styles.View}>
        <View style={Styles.following}>
          <Text style={{color: 'black'}}>XXX</Text>
          <Text style={{color: 'black'}}>Following</Text>
        </View>
        <View style={Styles.followers}>
          <Text style={{color: 'black'}}>XXX</Text>
          <Text style={{color: 'black'}}>Followers</Text>
        </View>
        <View style={Styles.posts}>
          <Text style={{color: 'black'}}>XXX</Text>
          <Text style={{color: 'black'}}>Posts</Text>
        </View>
      </View>
      <View style={Styles.View2}>
          <View style={Styles.paidMsg}>
          <Text style={{color: '#ffff'}}>PAID</Text>
          <Text style={{color: '#ffff'}}>PROMOTION</Text>
          <Text style={{color: '#ffff'}}>MESSAGE</Text>
          </View>
          <View style={Styles.directMsg}>
          <Text style={{color: '#ffff'}}>DIRECT</Text>
          <Text style={{color: '#ffff'}}>MESSAGE</Text>
          </View>
          <View style={Styles.cashRew}>
          <Text style={{color: '#ffff'}}>CASHOUT</Text>
          <Text style={{color: '#ffff'}}>REWARD</Text>
          </View>
      </View>
      <View style={Styles.View3}>
          <View style={Styles.posts}>
          <Text style={{color: 'black'}}>Posts</Text>
          </View>
          <View style={Styles.tags}>
          <Text style={{color: 'black'}}>Tags</Text>
          </View>
      </View>
    </View>
  );
};

export default Profile;
