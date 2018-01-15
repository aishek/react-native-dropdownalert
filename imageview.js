import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SvgUri from 'react-native-svg-uri';
import {View, Image} from 'react-native';
import {DEFAULT_IMAGE_DIMENSIONS} from './constants';

export default class ImageView extends Component {
  static propTypes = {
    style: PropTypes.object,
    source: PropTypes.string,
    imageProps: PropTypes.object,
  };
  static defaultProps = {
    style: {
      padding: 8,
      width: DEFAULT_IMAGE_DIMENSIONS,
      height: DEFAULT_IMAGE_DIMENSIONS,
      alignSelf: 'center',
    },
    source: null,
    imageProps: {},
  };

  render() {
    const {source, style, imageProps, svgStyle} = this.props;
    if (source != null) {
      if (!style['width']) {
        style['width'] = DEFAULT_IMAGE_DIMENSIONS;
      }
      if (!style['height']) {
        style['height'] = DEFAULT_IMAGE_DIMENSIONS;
      }
      const isSvg = typeof source === 'string';
      if (isSvg) {
        return (
          <View style={style}>
            <SvgUri style={svgStyle} svgXmlData={source} {...imageProps}></SvgUri>
          </View>
        );
      } else {
        return <Image style={style} source={source} {...imageProps} />;
      }
    }
    return null;
  }
}
