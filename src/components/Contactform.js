import React, { useState,createContext } from "react";
import { Button, Form, Input, InputNumber,notification  } from 'antd';
import Contactlist from "./ContactList";
import { v4 as uuid } from 'uuid';
export const ContactContext = createContext();

const Contactform = () => {
    const unique_id = uuid();
    const [form] = Form.useForm();
    const [contacts, setContacts] = useState([]);

    const onFinish = (values) => {
        console.log(values);
        setContacts([...contacts, {...values,id:unique_id.slice(0,8)}])
        form.resetFields();
        notification["success"]({
            message: 'Contact Added Successfully',
            duration:1.5
          });
    };

    // console.log("contacts", contacts)
  
    return (<>
      <ContactContext.Provider value={{contacts , setContacts}}>

        <div className="mt-3 ">

            <Form
                // {...layout}
                name="nest-messages"
                autoComplete="on"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                }}
                form={form}
            >
                <Form.Item
                    name={'name'}
                    label="Name"
                    rules={[
                        {
                            // type: "text",
                            required: true,
                },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={'email'}
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={'age'}
                    label="Age"
                    rules={[
                        {
                            type: 'number',
                            required: true,
                            min: 0,
                            max: 99,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>

        <Contactlist /> 

</ContactContext.Provider>

    </>)
}

export default Contactform;