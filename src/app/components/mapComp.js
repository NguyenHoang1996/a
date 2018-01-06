import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
var { height, width } = Dimensions.get('window');
import { NavigationActions } from "react-navigation";
import MapView from 'react-native-maps';


export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 10.870211699999999,
        longitude: 106.80373639999999,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      },
      markers: [
        {
          latlng: {
            latitude: 13.764884,
            longitude: 100.538265
          },
          image: require('../images/attention.png'),
          title: "Victory Monument",
          description: "A large military monument in Bangkok, Thailand.",
          photo: require('../images/Victory_Monument.jpg')
        }, {
          latlng: {
            latitude: 10.8782309,
            longitude: 106.8062104
          },
          image: require('../images/music.png'),
          title: "KTX Khu A, ĐHQG TPHCM",
          description: "A music pub for saxophone lover",
          photo: require('../images/Saxophone.jpg')
        }, {
          latlng: {
            latitude: 13.764595,
            longitude: 100.537438
          },
          image: require('../images/shopping.png'),
          title: "Coco Depertment Store",
          description: "Fashion Department Store",
          photo: require('../images/coco.jpg')
        }
      ],
      selectedAdress: {
        //toggle: false
      }
    };
    this.onRegionChange = this.onRegionChange.bind(this);
    this.moveMaptoLocation = this.moveMaptoLocation.bind(this);
    this.jumpMaptoLocation = this.jumpMaptoLocation.bind(this);
    this.callOut = this.callOut.bind(this);
  }

  componentDidMount() {
    // this.props.getCurrentLocation();
    console.log("Mapcomp: ", this.refs);
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  moveMaptoLocation(latlng, key) {
    this.refs.map.animateToRegion({
      latitudeDelta: 0.002,
      longitudeDelta: 0.002,
      ...latlng
    }, 1000);
    setTimeout(() => {
      console.log(this.refs, key);
      this.refs[key].showCallout();
    }, 1500);
  }

  jumpMaptoLocation(adress) {
    var latlng = {
      latitude: adress.latitude,
      longitude: adress.longitude
    };
    console.log("jump map to: ", latlng);
    this.setState({
      region: {
        ...latlng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }
    });
    console.log("adress: ", adress);
    var isFind = false;
    for (var i = 0; i < this.state.markers.length; i++) {
      //console.log("compare: ", this.state.markers[i].latlng, " ", latlng);
      if (this.state.markers[i].latlng.latitude == latlng.latitude
        && latlng.longitude == this.state.markers[i].latlng.longitude) {

        isFind = true;
        this.refs[i].showCallout();
        break;
      }
    }
    if (!isFind) {
      var t = this.state.selectedAdress.toggle;
      this.setState({
        selectedAdress: {
          latlng: latlng,
          title: adress.name,
          description: adress.address,
          toggle: t
        }
      })
      setTimeout(() => { this.refs.selected.showCallout(); }, 500)

    }
  }

  _toTrangThemDiaDiem = (data) => {
    const _toTrangThemDiaDiem = NavigationActions.navigate({
      routeName: "TrangThemDiaDiem",
      params: { title: data.title,
        latitude: data.latlng.latitude,
        longitude: data.latlng.longitude}
    })
    this.props.navigation.dispatch(_toTrangThemDiaDiem);
  }

  callOut() {
    var t = this;
    console.log("jkdhfkjasd dsff");
    this._toTrangThemDiaDiem(this.state.selectedAdress);
  }

  render() {

    return (
      <MapView
        ref="map" style={styles.map}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
        provider={MapView.PROVIDER_GOOGLE}
        onLongPress={(e) => { window.alert(JSON.stringify(e.nativeEvent.coordinate)) }}
      >
        {/* {this.props.selectedAdress &&
          <MapView.Marker pinColor="blue" coordinate = {{
            latitude: this.props.selectedAdress.latitude,
            longitude: this.props.selectedAdress.longitude
            }}/>}   */}
        {this.state.selectedAdress.latlng &&
          <MapView.Marker pinColor="blue" ref="selected"
            coordinate={this.state.selectedAdress.latlng}
            title={this.state.selectedAdress.title}
            description={this.state.selectedAdress.description}
            onCalloutPress={this.callOut}
          >
            <MapView.Callout tooltip={false}>
              <View style={styles.callOut}>
                <Text style={styles.callOutButton}>Chia sẽ địa điểm này</Text>
                <Text style={styles.titleText}>{this.state.selectedAdress.title}</Text>
                <Text style={styles.descriptionText}>{this.state.selectedAdress.description}</Text>
              </View>
            </MapView.Callout>
          </MapView.Marker>
        }

        {this.state.markers.map((marker, i) => (
          <MapView.Marker key={i} ref={i}
            coordinate={marker.latlng}
            image={marker.image}
            title={marker.title}
            description={marker.description}>
            {/* <View style={styles.pin}>
              <Image style={styles.pinImage} source={marker.image}/>
              <Text style={styles.pinText}>
                {marker.title}
              </Text>
            </View> */}
            <MapView.Callout>
              <View style={styles.callout}>
                <Image style={styles.calloutPhoto} source={marker.photo} />
                <Text style={styles.calloutTitle}>{marker.title}</Text>
                <Text>{marker.description}</Text>
              </View>
            </MapView.Callout>
          </MapView.Marker>))}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  callOut: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  callOutButton: {
    backgroundColor: 'green',
    fontSize: 14,
    padding: 5,
    flex: 1
  },
  titleText: {
    fontSize: 13,
    backgroundColor: '#F5FCFF'
  },
  descriptionText: {
    color: '#333333',
    fontSize: 10
  },
  pin: {
    backgroundColor: '#fffa',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    //padding: 5,
    borderRadius: 10
  },
  pinImage: {
    width: 25,
    height: 25
  },
  pinText: {
    color: 'red'
  },
  callout: {
    flex: 1,
    paddingRight: 10,
    paddingBottom: 10,
    marginRight: 10,
    marginBottom: 10
  },
  calloutPhoto: {
    flex: 1,
    width: 166,
    height: 83
  },
  calloutTitle: {
    fontSize: 16,
  }
});