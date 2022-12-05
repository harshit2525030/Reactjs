import React, { useState, useEffect } from "react";
import { User, UserContainer, UserProfileImage } from "./UserElements";
import "./index.css";
import axios from "../../api/axios";

const USER_LIST = "users?page=1";

const UserList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const result = await axios.get(USER_LIST, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.Token}`,
        },
        withCredentials: false,
      });
      setData(await result.data.data);
      setLoading(false);
      console.log(result.data.data);
    };
    getProducts();
  }, []);

  return (
    <>
      <User>
        <UserContainer>
          <div className="container">
            <div className="row">
              <h1 className="text-center mb-3">
                <strong>Users</strong>
              </h1>
              <hr />
              <div className="row justify-content-center">
                {data.map((data) => {
                  return (
                    <>
                      <div key={data.id} className="col-md-3 mb-4">
                        <div className="text-center p-4">
                          <div className="our-team">
                            <div className="picture">
                              <UserProfileImage src={data.profilepicture} />
                            </div>
                            <div className="team-content">
                              <h3 className="name">{data.name}</h3>
                              <h4 className="title">{data.email}</h4>
                              <h4 className="location">
                                Location: {data.location}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </UserContainer>
      </User>
    </>
  );
};

export default UserList;
