import React, { useState } from 'react'


function useInatialInputs(initalInput) {
    const [value, Setvalue] = useState(initalInput);
    const handleChnage = (e) => {
        Setvalue(e.target.value);
    }
    return {
        value,
        onChange: handleChnage
    }
}

const CreatePost = () => {
    const username = useInatialInputs('')
    const title = useInatialInputs('')
    const postData = useInatialInputs('')

    const reqData = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.value, title: title.value, postData: postData.value })
    };

    const addNewBlog = async () => {
        const response = await fetch(`https://backend-app-lazy-f94aefb55340.herokuapp.com/api/createPost`, reqData);
        const data = await response.json();
        console.log(data);
        const name = document.getElementById('usernameInp')
        const tit = document.getElementById('titleInp')
        const ptTxt = document.getElementById('postDataInp')
        name.value = " ";
        tit.value = " "
        ptTxt.value = " ";
    }


    return (
        <>
            <div className='container'>
                <form style={{ marginTop: "50px",marginBottom:'125px', border: "2px solid black", borderRadius: "10px   ", padding: "50px", backgroundColor: "#000000A6", visibility:"visible", opacity:".85" }} >
                    <div className="form-group" >
                        <label htmlFor="usernameInp" style={{ fontWeight: "bold" }}>User name</label>
                        <input type="text" onChange={username.onChange} className="form-control" id="usernameInp" placeholder="Username" style={{ border: "2px solid black" }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="titleInp" style={{ fontWeight: "bold" }}>Title Of Post</label>
                        <input type="text" onChange={title.onChange} className="form-control" id="titleInp" placeholder="Title_of_Post" style={{ border: "2px solid black" }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postDataInp" style={{ fontWeight: "bold" }}>Example textarea</label>
                        <textarea onChange={postData.onChange} className="form-control" id="postDataInp" rows="10" style={{ border: "2px solid black" }}></textarea>
                    </div>
                    <button type="button" className="btn btn-secondary" style={{ border: "2px solid black" }} onClick={addNewBlog}>Add Post</button>
                </form>
            </div>
        </>
    )
}

export default CreatePost
