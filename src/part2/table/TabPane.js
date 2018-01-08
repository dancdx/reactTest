import React, { Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import CSSModules from 'react-css-modules'

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })
class TabPane extends Component{
  static propTypes = {
    tab: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]).isRequired,
    order: PropTypes.string.isRequired,
    disable: PropTypes.bool,
    isActive: PropTypes.bool,
  };

  render() {
    const { classPrefix, className, isActive, children } = this.props;

    const classes = classnames({
      panel: true,
      contentActive: isActive,
    });

    return (
      <div
        role="tabpanel"
        className={classes}
        aria-hidden={!isActive}>
        {children}
      </div>
    );
  }
}
export default TabPane