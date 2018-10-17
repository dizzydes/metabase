import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default class LogoIcon extends Component {
  static defaultProps = {
    size: 32,
  };

  static propTypes = {
    size: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    dark: PropTypes.bool,
  };

  render() {
    let { dark, height, width, size } = this.props;
    return (
      <img
        className={cx("Icon", { "text-brand": !dark }, { "text-white": dark })}
        width={width || size}
        height={height || size}
        src="https://boulanger.scene7.com/is/image/Boulanger/8055002395939_h_f_l_0?hei=800&wid=800"        
      >
    );
  }
}
