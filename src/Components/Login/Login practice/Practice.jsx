import { Button, Form, Input } from "antd";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

function Practice() {
  return (
    <div className="flex flex-row gap-10 max-w-[820px] mx-auto mt-[60px] h-[400px] border border-black">
      <div className=" h-auto w-auto ml-">
        <img
          src="wall.jpg"
          alt="pic"
          className="h-[400px] w-[450px] rounded-2xl"
        />
      </div>

      <div>
        <div className="text-4xl mt-16">Create an Account</div>
        <div>
          Already have an account? <Link>Login</Link>
        </div>
        <div className="flex flex-row gap-2 mt-4 ">
          <Form.Item name="fname" className="w-auto">
            <Input
              className="w-[2px]"
              style={{ width: "144px" }}
              placeholder="First name"
            />
          </Form.Item>
          <Form.Item name="lname">
            <Input style={{ width: "145px" }} placeholder="Last name" />
          </Form.Item>
        </div>
        <Form.Item>
          <Input style={{ width: "300px" }} placeholder="Email" />
        </Form.Item>
        <Form.Item>
          <Input.Password
            style={{ width: "300px" }}
            placeholder="Enter your password"
          />
        </Form.Item>
        <Button className="w-[300px] p-2" type="primary">
          Create Account
        </Button>
      </div>
    </div>
  );
}

export default Practice;
