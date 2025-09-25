import React,{useState}from 'react';
function counter(){
const[count,setCount]=useState(0);
const handleIncrement=()=>{
setCount(count+1);
};
return(
<div style={{textAlign:'center',marginTop:'50px'}}>
<h2>React Counter using useState</h2>
<p style={{fontSize:'24px'}}>Count:{count}</p>
<button onclick={handleIncrement}style={{fontsize:'16px',padding:'10px 20px'}}>
Increment
</button>
</div>
);
}
export default Counter;