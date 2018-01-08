import React, { Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';
import styles from './App.css'

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })
class TabContent extends Component{
  static propTypes = {
    panels: PropTypes.node,
    activeIndex: PropTypes.number,
  };

  getTabPanes() {
    const { activeIndex, panels } = this.props;

    return panels.map( (child) => {
      if (!child) { return; }

      const order = parseInt(child.props.order, 10);
      const isActive = activeIndex === order;

      return React.cloneElement(child, {
        isActive,
        children: child.props.children,
        key: `tabpane-${order}`,
      });
    });
  }

  render() {

    const classes = classnames({
      content: true,
    });

    return (
      <div className={classes}>
        {this.getTabPanes()}
      </div>
    );
  }
}
export default TabContent