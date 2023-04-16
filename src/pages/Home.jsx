import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Home = () => {
  const { userName } = useContext(AuthContext);

  return (
    <div>
      <h2 className="text-3xl text-center">Hello Home for {userName}</h2>
      <p className="p-10 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui
        laboriosam id, sint dolor culpa maiores deserunt a quae unde enim,
        facere consectetur dolores praesentium aperiam blanditiis dignissimos
        fuga. Possimus a repudiandae consectetur doloribus incidunt laudantium
        commodi iusto veniam sunt reprehenderit ipsa cumque non rem unde
        praesentium error iure aperiam quisquam rerum magnam obcaecati repellat,
        minus ex? Aut deleniti aliquam autem nihil eligendi odit sequi optio
        ipsa pariatur amet nam nulla, voluptate velit! Iure, voluptate! Deserunt
        voluptatibus ut, autem saepe esse tenetur tempore quibusdam asperiores
        ducimus aperiam eligendi quisquam totam soluta ipsam perspiciatis
        possimus placeat suscipit voluptates. Debitis, molestias in!
      </p>
    </div>
  );
};

export default Home;
