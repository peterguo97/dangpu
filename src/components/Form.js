import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import { connect } from 'dva';
import PicturesWall from './Upload';
class ChangeFrom extends React.Component {   
    handleDate = (date,dateString) => {
        console.log(date,dateString);
    }
    handleForm = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err,values) => {
            if(!err){
                console.log(values);
            }
        })
    }
    render(){
        const data = this.props.data;
        const FormItem = Form.Item;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return(
            <Form 
                onSubmit={this.handleForm.bind(this)}
            >
                <FormItem
                    {...formItemLayout}
                    label="上传文件名称"
                >                    
                    <Input defaultValue={data.title}/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="描述"
                >
                    <Input defaultValue={data.description}/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="上传/修改日期"
                >
                    {getFieldDecorator('date-select', {
                        rules: [
                            { required: true, message: 'Please select date!' },
                        ],
                    })(
                        <DatePicker onChange={this.handleDate.bind(this)} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="上传图片"
                >
                    <PicturesWall />
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">提交修改</Button>
                </FormItem>
            </Form>
        )
    }
}

ChangeFrom = Form.create()(ChangeFrom);

function mapStateToProps({admin}, ownProps) {
    return {
        data: admin.data,
    }
}

export default connect(mapStateToProps)(ChangeFrom);