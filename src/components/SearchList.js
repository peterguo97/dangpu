import React from 'react';
import { Link } from 'dva/router';
import { List, Icon, Button, Pagination, Row, Col } from 'antd';
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

class SearchList extends React.Component {
    render(){
        return(
            <div>
                <List
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
                <Row type="flex" justify="center">
                    <Col><Pagination defaultCurrent={1} total={50} /></Col>    
                </Row>      
            </div>
        )
    }
}

export default SearchList;