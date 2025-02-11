import { Button, Form, Input } from "antd";
import axios from "axios";
import { Link } from "react-router";

function Practice() {
  const post = async () => {
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        {
          title: "values.fname",
          category: "values.lname",
          description: "values.password",
          image: " values.email",
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // const button = (values) => {
  //   console.log(values);
  //   post(values);
  // };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="flex bg-white rounded-xl shadow-lg overflow-hidden w-[750px]">
        {/* Image Section */}
        <div>
          <img
            src="wall.jpg"
            alt="Login"
            className="w-[350px] h-full object-cover"
          />
        </div>

        {/* Login Form Section */}
        <div className="p-8 w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Create an Account
          </h2>
          <p className="text-gray-600 mb-6">
            Already have an account?
            <Link className="text-blue-500 hover:underline">Login</Link>
          </p>

          <Form>
            <div className="flex gap-4">
              <Form.Item name="fname" label="First Name" className="w-1/2">
                <Input placeholder="First name" />
              </Form.Item>
              <Form.Item name="lname" label="Last Name" className="w-1/2">
                <Input placeholder="Last name" />
              </Form.Item>
            </div>

            <Form.Item name="email" label="Email">
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item name="password" label="Password">
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 mt-4"
              type="primary"
              onClick={post}
            >
              Create Account
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Practice;
