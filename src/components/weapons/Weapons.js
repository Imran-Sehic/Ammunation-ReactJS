import SingleWeapon from "../singleWeapon/SingleWeapon";
import "./Weapon.css";

export default function Weapons(props) {
  const weapons =
    props.data.length > 0 ? (
      props.data.map((data, index) => <SingleWeapon data={data} key={index} />)
    ) : (
      <p>No weapons!</p>
    );

  return <div className="container">{weapons}</div>;
}
