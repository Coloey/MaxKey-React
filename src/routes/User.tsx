/* eslint-disable no-template-curly-in-string */
import React  from "react"
import {Button,Form,Input,Select} from 'antd'
import "../assets/less/user.css"
const {Option} = Select
const validateMessages = {
    required: '${label} is required!',
    types: {
      number: '${label} is not a valid number!',
      
    },
  };
export default function User () {
    const onFinish=(values:any)=>{
        console.log(values)
        localStorage.setItem("user",values)


    }
    //  const layout={
    //     labelCol:{span:4},
    //     wrapperCol:{span:8}
    //  }

    return (
        <div>            
            <Form 
            onFinish={onFinish}
            validateMessages={validateMessages}
            >
                <Form.Item name={['user','firstName']} label="姓:">
                    <Input />
                </Form.Item>
                <Form.Item name={['user','middleName']} label="中间名:">
                    <Input />
                </Form.Item>
                <Form.Item name={['user','lastName']} label="名:">
                    <Input/>
                </Form.Item>
                <Form.Item name={['user','nickName']} label="昵称:">
                    <Input/>
                </Form.Item>
                <Form.Item  label="证件类型">
                    <Select defaultValue="身份证">
                        <Option value="未知">未知</Option>
                        <Option value="身份证">身份证</Option>
                        <Option value="护照">护照</Option>
                        <Option value="学生证">学生证</Option>
                        <Option value="军人证">军人证</Option>
                    </Select>
                </Form.Item>
                
                <Form.Item name={['user','cradNumber']} label="证件号码:" rules={[{type:'number'}]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="婚姻状态">
                    <Select defaultValue="未知">
                        <Option value="未知">未知</Option>
                        <Option value="单身">单身</Option>
                        <Option value="已婚">已婚</Option>
                        <Option value="离异">离异</Option>
                        <Option value="丧偶">丧偶</Option>
                    </Select>
                </Form.Item>
                
                <Form.Item name={['user','birthday']} label="出生日期:" >
                    <Input/>
                </Form.Item>
                <Form.Item name={['user','language']} label="语言偏好:">
                    <Input/>
                </Form.Item>
                <Form.Item name={['user','workStart']} label="工作开始时间:" >
                    <Input/>
                </Form.Item> 
                <Form.Item name={['user','userPage']} label="个人主页:">
                    <Input/>
                </Form.Item> 
                <Form.Item name={['user','userPage']} label="即时通讯:">
                    <Input/>
                </Form.Item> 
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                    提交
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
       
}
