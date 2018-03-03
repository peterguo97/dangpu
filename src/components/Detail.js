import React from 'react';
import { Card, Button } from 'antd';
import img1 from '../../public/1.jpg';

class Detail extends React.Component {
    render(){
        return(
            <div>
                <Card title="下载版本"
                    extra={<a href="/search">返回搜索结果</a>}
                    style={{ 'width': '80%'}}
                    cover={<img src={img1} />}
                >
                    <Card.Meta title={<div><div>下载内容</div>
                        <div style={{'float':' right'}}>
                            <a href="#"><Button type="primary" shape="circle" icon="download" size={'default'} /></a>
                        </div>
                    </div>}
                        description="这是详细描述,这是一个app,这是一个app,这是一个app,这是一个app,这是一个app,这是一个app,这是一个app这是一个app,这是一个app,这是一个app,这是一个app" />                   
                </Card>
            </div>
        )
    }
}

export default Detail;