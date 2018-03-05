import React from 'react';
import { List, Button, Row, Col } from 'antd';
import { Link } from 'dva/router';

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

class Main extends React.Component {
    render() {
        return (
            <div>
                <Row
                    gutter={32}
                    type="flex"
                    justify="center"
                    align="top"
                >
                    <Col span={16} >
                        <List
                            bordered="true"
                            header="本周精选"
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={<Link to="/detail">{item.title}</Link>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                    <div>
                                        <a href="#"><Button type="primary" shape="circle" icon="download" size={'default'} /></a>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col span={8}>
                        <List
                            bordered="true"
                            header="本周下载榜"
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={<Link to="/detail">{item.title}</Link>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>  
            </div>
        )
    }
}

export default Main;