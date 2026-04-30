import Uniparent from "./Uniparent";
function ProfileCard({user}){
return(
<div>
    <h1>{user.name}</h1>
    <h2>{user.id}</h2>
</div>
);
}
export default ProfileCard;