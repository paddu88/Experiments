import React,{useState} from 'react';
import'./App.css';
function App(){
const[formData,setFormData]=useState({
name:",
email:",
message:"
});
const handleChange=(e)=>{
const{name,value}=e.target;
setFormData(prevState=>e.target;
setFormData(prevState=>({
...prevState,
[name]:value
}));
};
const handleSubmit=(e)=>{
e.preventDefault();
alert('From submitted:/nName:${formData.name}/nEmail:${formData.email}/nMessage:${formData({message}');
setFormData({name:",email:",message:"});
};
return(
<div className="form-container">
<h2>Contact Form</h2>
form onsubmit={handlesubmit}>
<label>Name:</label>
<input
type="text"
name="name"
value={formData.name}
onChange={handleChange}
required
/>
<label>Email:</label>
<input
type="email"
name="email"
value={formData.email}
onChange={handleChange}
required
/>
<label>Message:</label>
<textarea
name="message"
value={formData.message}
onChange={handleChange}
required
></textarea>
<button type="submit">submit</button
</form>
</div>
);
}
export default App;
body{
margin:0;
padding:0;
font-family:Arial,sans-serif;
background:linear-gradient(to right,#fbc2eb,#a6clee);
height:100vh;
}
.form-container{
background-color:#ffffffcc;
padding:30px 40px;
border-radius:12px;
width:35px;
margin:60px auto;
box-shadow:0 8px 20px rgba(0,0,0,0.2);
}
h2{
text-align:center;
margin-bottom:20px;
color:#2c3e50;
}
form{
display:flex;
flex-direction:column;
}
label{
margin:10px 0 5px;
font-weight:bold;
}
input,
textarea{
padding:10px;
border:1=x solid #ccc;
border-radius:8px;
font-size:16px;
}
button{
margin-top:20px;
padding:12px;
font-size:16px;
border:none;
background-color: #2c3e50;
color:white;
border-radius:8px;
cursor:pointer;
}
button:hover{
background-color: #34495e;
}

