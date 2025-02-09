/* import { Button, Form, Input } from "antd";
import axios from "axios";

function Login() {
  const button = (values) => {
    console.log(values);
    post(values);
  };
  async function post(values) {
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/auth/login",
        {
          username: values.username,
          password: values.password,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="flex flex-col w-56 bg-blue-100 h-70 mx-auto my-10 border rounded-2xl p-3 hover:shadow-2xl border-gray-600 opacity-50 ">
      <Form className=" pt-5 h-65" onFinish={button}>
        <Form.Item name="username">
          <Input className="w-1" placeholder="Name" type="text" />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password placeholder="Password" type="password" />
        </Form.Item>
        {/* <Form.Item name="rememberme">
          <Checkbox>Remeber me</Checkbox>
          <Form.Item> }*/
/*    <Button className="mt-6" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login; 
 */
