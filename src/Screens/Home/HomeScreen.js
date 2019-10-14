import React from 'react';
import {StyleSheet} from 'react-native';

let _this, _navigation;
export class HomeScreen extends React.PureComponent {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state?.params?.title || 'Bootstrap Home',
      headerLeft: null,
    };
  };
  state = {
    data: null,
    mounted: false,
  };

  componentDidMount() {
    _trace();
    this.mounted = true;
    _this = this;
    _navigation = this.props.navigation;
    this.initStateData(() => {
      this.autoRun();
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.navigation !== this.props.navigation)
      _navigation = this.props.navigation;
  }

  render() {
    let {data} = this.state;
    // if (!data) return null
    log(data, 'data in HomeScreen render() ');
    return (
      <T.Screen>
        <T.Center>
          <T.Label text="Home Screen" />
          <T.Button title="Alert" onPress={() => alert()} />
          <T.Button
            title="Popup"
            onPress={() =>
              popup.open(<T.Label text="Popup Modal" />, {
                title: 'This is Popup Modal',
                fullScreen: true,
              })
            }
          />
          <T.Button
            title="Home2"
            onPress={() =>
              T.NavigationService.navigate('Home2Screen', {title: 'Home2'})
            }
          />
          <T.Button
            title="Home2"
            onPress={() =>
              navigateTo(_navigation, 'Home2Screen', {title: 'Home 2'})
            }
          />
        </T.Center>
      </T.Screen>
    );
  }

  initStateData = onComplete => {
    if (_navigation.state?.params) {
      let {data} = _navigation.state?.params;
      // _navigation.setParams({ title: '改為新標題' })
      this.mounted &&
        this.setState({data}, () => {
          onComplete && onComplete();
        });
    } else {
      onComplete && onComplete();
    }
  };
  componentWillUnmount() {
    this.mounted = false;
  }
  autoRun = () => {};
}
var styles = StyleSheet.create({});
