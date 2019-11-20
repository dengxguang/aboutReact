import React, { Component } from "react";
import PropTypes from "prop-types";
import {Layout, Icon} from 'antd'
import CustomMenu from '@/components/CustomMenu'

const {Sider} = Layout
class AppAside extends Component {
  render() {
    let {menuToggle, menu} = this.props
    return (
      <Sider>
        
      </Sider>
    )
  }
}
