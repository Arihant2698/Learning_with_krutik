import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Main,Child, CardWrapper } from './UsersCss';
import { useNavigate } from 'react-router-dom';

export default function UsersHtml() {
    
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const handleChange = async(id)=>{
        console.log(`https://express-t4.onrender.com/api/users/:${id}`);
        const res = await axios.get(`https://express-t4.onrender.com/api/users/${id}`);
        console.log(res.data);
        navigate("/profile", {
            state: { res: res.data },
        });
    }

  useEffect(() => {
    (async function () {
        const res = await axios.get("https://express-t4.onrender.com/api/users");
        console.log(res.data);
        setData(res.data);
      } )();
    }, [])
  
    return (
      <>
        <Main>
                    {data.map((data)=>{
                        return (
                            <>
                                
                                <CardWrapper onClick={()=>handleChange(data._id)} key={data._id}>
                            <img
                              style={{ padding:"20",margin:"20",height: "100%", width: "100%" }}
                              src={data.picture}
                            />
                            <p style={{fontFamily:"bold",fontSize:"30px"}}>{data.name}</p>
          </CardWrapper>
                          </>
                        );
            })}
        </Main>
      </>
    );
}
