import React from 'react';
import { connect } from 'dva';
import { List, Icon, Button, Pagination, Row, Col, Popconfirm } from 'antd';

class Admin extends React.Component {
    handleDelete = (url) => {
        const res = this.props.dispatch({
            type: 'admin/delete',
            payload: url
        });
        console.log(res);
    }
    render() {
        const data = this.props.list;
        const text = '你确定要删除这个文件吗';
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
                               <Popconfirm placement="topRight" title={text} okText="确认" cancelText="取消" 
                                    onConfirm={this.handleDelete.bind(this,item.url)}
                               >
                                    <Button type="danger">删除</Button>
                                </Popconfirm>
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