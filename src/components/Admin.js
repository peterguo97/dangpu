import React from 'react';
import { connect } from 'dva';
import { List, Icon, Button, Pagination, Row, Col } from 'antd';

class Admin extends React.Component {
    render() {
        const data = this.props.list;
        console.log(this.props);
        return (
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                            <div>
                                <a href="#"><Button type="primary">修改</Button></a>
                                <a href="#"><Button type="danger">删除</Button></a>
                            </div>
                        </List.Item>
                    )}
                />
                <Row type="flex" justify="center">
                    <Col>
                        <Pagination defaultCurrent={1} total={50} 
                            onChange = {( page ) => {
                                this.props.dispatch({type:'admin/fetch', payload: page })
                            }}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps( {admin}, ownProps) {
    return { list: admin.list }
}

export default connect(mapStateToProps)(Admin);