import React, { Component } from "react";
import { Layout, Input, Icon, Form, Button, Divider, message, notification } from "antd";
import { withRouter } from "react-router-dom";
import "./login.scss";

class Login extends Component {
  state = {
    loading: false
  };
  enterLoading = () => {
    this.setState({
      loading: true
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 这里可以做权限校验，模拟接口返回用户权限标识
        switch (values.username) {
          case "admin":
            values.auth = 0;
            break;
          default:
            values.auth = 1;
            break;
        }

        localStorage.setItem("user", JSON.stringify(values));
        this.enterLoading();
        this.timer = setTimeout(() => {
          message.success("登录成功");
          this.props.history.push("/");
        }, 2000);
      }
    });
  };

  componentDidMount() {
    notification.open({
      message: "欢迎使用后台管理平台",
      duration: null,
      descriptioin: "账号admin（管理员）其他（游客）密码随意"
    });
  }

  componentWillUnmount() {
    notification.destroy();
    this.timer && clearTimeout(this.timer);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout className="login animated fadeIn">
        <div className="model">
          <div className="login-form">
            <h3>后台管理系统</h3>
            <Divider />
            <Form onSubmit={this.handleSubmit}>
              <Form.Item>
                {getFieldDecorator("username", {
                  rules: [{ required: true, message: "请输入用户名" }]
                })(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="用户名" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [{ required: true, message: "请输入密码" }]
                })(<Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="密码" type="password" />)}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading}>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Form.create()(Login));
