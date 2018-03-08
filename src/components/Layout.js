import React from 'react'
import { Layout, Menu, Breadcrumb, Input, Icon, Row, Col } from 'antd';
import { Link } from 'dva/router';
const { Header, Content, Sider, Footer } = Layout;
const Search = Input.Search;
const { SubMenu } = Menu;

class MainLayout extends React.Component {
    render(){
        return(
            <Layout>
                <Header>
                    <Row>
                        <Col span={16}>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                style={{ lineHeight: '64px' }}
                            >
                                <Menu.Item key="search">
                                    <Search
                                    placeholder="搜索站内"
                                    onSearch={value => console.log(value)}
                                    enterButton />
                                </Menu.Item>
                                <Menu.Item key="1"><Link to="/"><Icon type="home"/>首页</Link></Menu.Item>
                                <Menu.Item key="2">站内导航</Menu.Item>
                            </Menu>
                        </Col>
                        <Col offset={4} span={4}><div style={{color: 'white', float: 'right', fontWeight: 'bold', fontSize: '30px'}}>DownPu</div></Col>
                    </Row>                   
                   
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option2</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ padding: '0 50px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                                <div>
                                    {this.props.children}
                                </div>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>
                    Copy Right &copy; 2018 版权归网络管理协会所有
                </Footer>
            </Layout>
        )
    }
}

export default MainLayout;
