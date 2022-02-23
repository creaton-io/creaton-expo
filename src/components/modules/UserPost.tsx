import React from 'react';
import { View, Text } from 'react-native';
import Icons from '../../icons';
import Separator from './Separator';
import { Divider } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const UserPost = () => {
  return (
    <View
      style={{
        height: 380,
        width: 351,
        borderRadius: 13,
        backgroundColor: '#FFFFFF12',
      }}
    >
      <View>
        <View style={{ flexDirection: 'row', margin: 20 }}>
          <View
            style={{
              backgroundColor: 'green',
              height: 40,
              width: 40,
              borderRadius: 100,
            }}
          ></View>
          <Separator width={10} />
          <View>
            <Text
              style={{
                fontWeight: '800',
                fontSize: 16,
                lineHeight: 17,
                color: '#FFFFFF',
              }}
            >
              Darrell Steward
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 14,
                lineHeight: 16,
                color: '#D4D1E1',
                opacity: 0.6,
              }}
            >
              Dec 12, 2020, at 2:00PM
            </Text>
          </View>
          <View style={{ marginLeft: '25%' }}>
            <Ionicons name='bookmark-outline' size={24} color='#D4D1E1' />
          </View>
        </View>
        <View
          style={{ backgroundColor: 'orange', height: 181, width: 351 }}
        ></View>
        <View style={{ margin: 20 }}>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 22,
              fontWeight: '800',
              color: '#FFFFFF',
            }}
          >
            VIP Subscribers Only!!
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 22,
              color: '#D4D1E1',
              opacity: 0.6,
            }}
          >
            Check out our own cool Creaton gifs
          </Text>
          <Divider
            style={{
              backgroundColor: 'white',
              height: 1,
              marginTop: '5%',
              opacity: 0.1,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Icons.HeartIcon />
              <Text
                style={{
                  fontSize: 14,
                  marginTop: 2,
                  marginLeft: 8,
                  color: '#D4D1E1',
                  opacity: 0.6,
                }}
              >
                22
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: '#D4D1E1',
                  opacity: 0.6,
                  fontSize: 14,
                  lineHeight: 22,
                }}
              >
                95 comments
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserPost;
