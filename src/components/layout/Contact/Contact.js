import React from "react";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="primaryText h-[100vh] flex justify-center items-center text-2xl  bg-gradient-to-b from-blue-500 to-white">
      <a  href="mailto:dassourabh126@gmail.com">
        <Button >Contact: dassourabh126@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
