import ProfilePhoto from "./ProfilePhoto"
import FullName from "./FullName"
import Address from "./Address"

export default function Profile(props) {
    return (
        <main>
        <ProfilePhoto image={props.children}/>
        <FullName fullName={props.fullName} />
        <p>{props.profession}</p>
        <p>{props.bio}</p>
        <Address address={props.address} />
        </main>
    )
}