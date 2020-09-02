import React, { Component, Fragment } from 'react';
import { Form, Input, Button, Checkbox, Divider, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import './style.less';

class Frame extends Component {

  constructor(props) {
    super(props);
    this.state = {
      layout: {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      },
      tailLayout: {
        wrapperCol: { offset: 8, span: 16 },
      }
    };
  };

  onFinish = values => {
    console.log('Success:', values);
    this.props.history.push('/Index')
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  render() {
    const { layout, tailLayout } = this.state;
    return (
      <Fragment>
        <div className="frame-wrapper">
          <div className="frame-content">
            <img className="frame-logo" src="https://pic4.zhimg.com/80/v2-a47051e92cf74930bedd7469978e6c08_hd.png"></img>
            <div className="frame-login">
              <div className="login-info">用户登录</div>
              <div className="login-under"><Divider /></div>
              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
              >
                <Form.Item
                  label="用户名"
                  name="username"
                  rules={[{ required: true, message: '请输入用户名' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="密码"
                  name="password"
                  rules={[{ required: true, message: '请输入密码' }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                  <Checkbox>记住我</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    登录
                  </Button>
                </Form.Item>
              </Form>
              <Divider />
              <div className="phone">
                <span>联系作者:</span>
                <span className="phone-info">
                  <Tooltip placement="topLeft" title="微信: 15080826794">
                    <div className="info-wrapper">  
                      <svg class="socialIcon" fill="#60c84d" viewBox="0 0 24 24" width="20" height="20">
                        <path d="M2.224 21.667s4.24-1.825 4.788-2.056C15.029 23.141 22 17.714 22 11.898 22 6.984 17.523 3 12 3S2 6.984 2 11.898c0 1.86.64 3.585 1.737 5.013-.274.833-1.513 4.756-1.513 4.756zm5.943-9.707c.69 0 1.25-.569 1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 0 .703.56 1.272 1.25 1.272zm7.583 0c.69 0 1.25-.569 1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 0 .703.56 1.272 1.25 1.272z" fill-rule="evenodd"></path>
                      </svg>
                      微信
                    </div>
                  </Tooltip>
                  <Tooltip placement="topLeft" title="QQ: 497011267">
                    <div className="info-wrapper">
                      <svg class="socialIcon" fill="#50c8fd" viewBox="0 0 24 24" width="20" height="20">
                        <path d="M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 0 .902-.484 1.748-2.072 0 0-.18 2.197 1.904 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.239.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.111 0 .283-.36.283-1.025 0-2.514-2.166-6.954-2.166-6.954V9.325C18.29 3.364 14.268 2 12.003 2z" fill-rule="evenodd"></path>
                      </svg>
                      QQ
                    </div>
                  </Tooltip>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

}

export default Frame;
