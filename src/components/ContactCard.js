import React,{useContext,useState} from "react";
import { Avatar, Button, Space ,Modal, Form, Input, InputNumber,notification} from 'antd';
import { UserOutlined, DeleteOutlined } from '@ant-design/icons';
import {ContactContext} from "./Contactform";


import { Col, Row } from 'antd';
const Contactcard=({val})=>{
  const [isModalOpen, setIsModalOpen] = useState(false);
    const {contacts,setContacts} = useContext(ContactContext);
      
    const [form] = Form.useForm();
    const handleUpdate = (values) => {
        console.log(values);
        
    let filtered =        contacts.map(val=>{
            if(values.id==val.id)
            {
            
              return values;
            }
            else{
                return val
            }
        })
        
        setContacts(filtered)
        console.log("filtered",filtered)
        setIsModalOpen(false)
        // setContacts([...contacts, {...values,id:unique_id.slice(0,8)}])
        // form.resetFields();
        notification["success"]({
            message: 'Contact Update Successfully',
            duration:1.5
          });
    };

    

    const delContact = (val)=>{
        console.log("del id val",val)
        let del_item = contacts.filter(data=>
            data.id !== val
        )
        setContacts(del_item)
        // console.log("del_item",del_item);
        notification["success"]({
            message: 'Contact Removed Successfully',
            duration:1.5
          });  
    }
  
    const showModal = () => {
        setIsModalOpen(true);
      };
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    

      React.useEffect(() => {
              form.setFieldsValue({
              name: val.name,
              email:val.email,
              age : val.age,
              id:val.id
            });
      }, [val]);

  return(<>

    <>
   <Row
   style={{marginBottom:"30px"}}
   >
        <Col xs={4} sm={4} md={6} lg={2} xl={1}>
            <Space size={16} wrap>
                <Avatar icon={<UserOutlined />} style={{ lineHeight: "24px" }} />
            </Space>
        </Col>
        <Col xs={16} sm={16} md={12} lg={6} xl={6}>
            <h4>
            {/* name */}
                {val.name}
            </h4>
            <h4>
                 {val.email} 
{/* email */}
                </h4>
            <h4>
                {val.age} 
                 {/* 18 */}
                </h4>
        </Col>
        <Col xs={4} sm={4} md={6} lg={2} xl={2}>
            <div>
               
            <DeleteOutlined style={{borderRadius:"50%",background:"#1677ff",padding:"5px",color:"white",cursor:"pointer",fontSize:"14px"}}
            onClick={()=>{
                delContact(val.id)
            }}
            />   
                </div> 

<div className="mt-3">
    <Button size="small" 
    onClick={()=>
    //     showModal(contact.id)
    showModal()   
}
    >
            Edit
    </Button>
</div>

           
        </Col>
    </Row>
  
    <Modal
    footer={null}
    open={isModalOpen} 
    onOk={handleOk} onCancel={handleCancel}
    >
        <Form
                // {...layout}
                name="nest-messages"
                autoComplete="on"
                onFinish={handleUpdate}
                style={{
                    maxWidth: 600,
                }}
                form={form}
            >

<Form.Item
                    name={'id'}
                    // label="id"
                   
                >
                    <Input 
                 type="hidden"/>
                </Form.Item>


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
      </Modal>


    </>
  
    
   

    </>
)
}

export default Contactcard;