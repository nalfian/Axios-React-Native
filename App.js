//To Make HTTP API call in React Native using Axios https://aboutreact.com
import React from 'react';
//import React in our code.
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
//import all the components we are going to use.
import axios from 'axios';

const App = () => {
  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(function(response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function(error) {
        // handle error
        alert(error.message);
      })
      .finally(function() {
        // always executed
        alert('Finally called');
      });
  };

  const getDataUsingAsyncAwaitGetCall = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );
      alert(JSON.stringify(response.data));
    } catch (error) {
      // handle error
      alert(error.message);
    }
  };

  const postDataUsingSimplePostCall = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .then(function(response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function(error) {
        // handle error
        alert(error.message);
      });
  };

  const multipleRequestsInSingleCall = () => {
    axios
      .all([
        axios
          .get('https://jsonplaceholder.typicode.com/posts/1')
          .then(function(response) {
            // handle success
            alert('Post 1 : ' + JSON.stringify(response.data));
          }),
        axios
          .get('https://jsonplaceholder.typicode.com/posts/2')
          .then(function(response) {
            // handle success
            alert('Post 2 : ' + JSON.stringify(response.data));
          }),
      ])
      .then(
        axios.spread(function(acct, perms) {
          // Both requests are now complete
          alert('Both requests are now complete');
        })
      );
  };

  return (
    <View style={styles.MainContainer}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>
        Example of Axios Networking in React Native
      </Text>
      {/*Running GET Request*/}
      <TouchableOpacity
        style={styles.button}
        onPress={getDataUsingSimpleGetCall}>
        <Text>Simple Get Call</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={getDataUsingAsyncAwaitGetCall}>
        <Text>Get Data Using Async Await GET</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={postDataUsingSimplePostCall}>
        <Text>Post Data Using POST</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={multipleRequestsInSingleCall}>
        <Text>Multiple Concurrent Requests In Single Call</Text>
      </TouchableOpacity>

      <Text style={{ textAlign: 'center', marginTop: 18 }}>
        www.aboutreact.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});

export default App;


// import React, { Fragment, Component } from 'react';
// import ImagePicker from 'react-native-image-picker';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Image,
//   Button,
//   Dimensions,
//   TouchableOpacity
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const options = {
//   title: 'Select Avatar',
//   customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };
// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       filepath: {
//         data: '',
//         uri: ''
//       },
//       fileData: '',
//       fileUri: ''
//     }
//   }

//   chooseImage = () => {
//     let options = {
//       title: 'Select Image',
//       customButtons: [
//         { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
//       ],
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//     ImagePicker.showImagePicker(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//         alert(response.customButton);
//       } else {
//         const source = { uri: response.uri };

//         // You can also display the image using data:
//         // const source = { uri: 'data:image/jpeg;base64,' + response.data };
//         // alert(JSON.stringify(response));s
//         console.log('response', JSON.stringify(response));
//         this.setState({
//           filePath: response,
//           fileData: response.data,
//           fileUri: response.uri
//         });
//       }
//     });
//   }

//   launchCamera = () => {
//     let options = {
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//     ImagePicker.launchCamera(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//         alert(response.customButton);
//       } else {
//         const source = { uri: response.uri };
//         console.log('response', JSON.stringify(response));
//         this.setState({
//           filePath: response,
//           fileData: response.data,
//           fileUri: response.uri
//         });
//       }
//     });

//   }

//   launchImageLibrary = () => {
//     let options = {
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//     ImagePicker.launchImageLibrary(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//         alert(response.customButton);
//       } else {
//         const source = { uri: response.uri };
//         console.log('response', JSON.stringify(response));
//         this.setState({
//           filePath: response,
//           fileData: response.data,
//           fileUri: response.uri
//         });
//       }
//     });

//   }

//   renderFileData() {
//     if (this.state.fileData) {
//       return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
//         style={styles.images}
//       />
//     } else {
//       return <Image source={require('./assets/dummy.png')}
//         style={styles.images}
//       />
//     }
//   }

//   renderFileUri() {
//     if (this.state.fileUri) {
//       return <Image
//         source={{ uri: this.state.fileUri }}
//         style={styles.images}
//       />
//     } else {
//       return <Image
//         source={require('./assets/galeryImages.jpg')}
//         style={styles.images}
//       />
//     }
//   }
//   render() {
//     return (
//       <Fragment>
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView>
//           <View style={styles.body}>
//             <Text style={{textAlign:'center',fontSize:20,paddingBottom:10}} >Pick Images from Camera & Gallery</Text>
//             <View style={styles.ImageSections}>
//               <View>
//                 {this.renderFileData()}
//                 <Text  style={{textAlign:'center'}}>Base 64 String</Text>
//               </View>
//               <View>
//                 {this.renderFileUri()}
//                 <Text style={{textAlign:'center'}}>File Uri</Text>
//               </View>
//             </View>

//             <View style={styles.btnParentSection}>
//               <TouchableOpacity onPress={this.chooseImage} style={styles.btnSection}  >
//                 <Text style={styles.btnText}>Choose File</Text>
//               </TouchableOpacity>

//               <TouchableOpacity onPress={this.launchCamera} style={styles.btnSection}  >
//                 <Text style={styles.btnText}>Directly Launch Camera</Text>
//               </TouchableOpacity>

//               <TouchableOpacity onPress={this.launchImageLibrary} style={styles.btnSection}  >
//                 <Text style={styles.btnText}>Directly Launch Image Library</Text>
//               </TouchableOpacity>
//             </View>

//           </View>
//         </SafeAreaView>
//       </Fragment>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },

//   body: {
//     backgroundColor: Colors.white,
//     justifyContent: 'center',
//     borderColor: 'black',
//     borderWidth: 1,
//     height: Dimensions.get('screen').height - 20,
//     width: Dimensions.get('screen').width
//   },
//   ImageSections: {
//     display: 'flex',
//     flexDirection: 'row',
//     paddingHorizontal: 8,
//     paddingVertical: 8,
//     justifyContent: 'center'
//   },
//   images: {
//     width: 150,
//     height: 150,
//     borderColor: 'black',
//     borderWidth: 1,
//     marginHorizontal: 3
//   },
//   btnParentSection: {
//     alignItems: 'center',
//     marginTop:10
//   },
//   btnSection: {
//     width: 225,
//     height: 50,
//     backgroundColor: '#DCDCDC',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 3,
//     marginBottom:10
//   },
//   btnText: {
//     textAlign: 'center',
//     color: 'gray',
//     fontSize: 14,
//     fontWeight:'bold'
//   }
// });