import ProfileCard from "./Unichild";
function Uniparent(){
const userdata={
    name:"Sozuke Aizen",
    id:404,
};
return (
<div>
    <h1>Parent Component</h1>
    <ProfileCard user={userdata}/>
</div>
);
}
export default Uniparent;