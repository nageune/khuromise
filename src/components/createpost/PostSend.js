import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import useFetch from '../../hooks/useFetch';

const PostBox = styled.div`
  width : 90%;
  height : 100%;
  display : flex;
  justify-content : center;
  line-height : 29px;
`;

function PostSend({ titlevalue , contentvalue, noonvalue, hourvalue, minutevalue, peoplenumvalue, datevalue, purposevalue, gendervalue }) {

  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3002/posts", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json; charset=UTF-8"
      },
      body : JSON.stringify({
        "id" : 4,
        "name" : "익명",
        "userGender" : "w",
        "date" : datevalue,
        "noon" : noonvalue,
        "hour" : hourvalue,
        "minute" : minutevalue,
        "category" : purposevalue,
        "gender" : gendervalue,
        "currentPeople" : "1",
        "maxPeople" : peoplenumvalue,
        "title" : titlevalue,
        "content" : contentvalue
      }),
    }).then(res =>{
      if (res.ok){
        alert("등록이 완료되었습니다");
        navigate(`/post`);
      }
    });
  }
  
  return(
    <PostBox>
      <form style = {{
          width : '100%',
          display : 'flex',
          justifyContent : 'center'}} 
        onSubmit = {onSubmit}
      >
        <button style={{
          width : '80%',
          lineHeight : '20px'
        }}
        >
          등록
        </button>
      </form>
    </PostBox>
  );
}
export default PostSend;