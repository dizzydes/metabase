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
        src="https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Cat_Emoji_Icon_d84dab9b-e144-4e75-a859-5442a109e95b_large.png?v=1513251058"
      />
    );
  }
}
