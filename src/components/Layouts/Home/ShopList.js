import RoomImg2 from "../../../images/room-img2.png";
import RoomImg3 from "../../../images/room-img3.png";
import RoomImg4 from "../../../images/room-img4.png";
import TypeImg1 from "../../../images/type-img1.png";
import TypeImg3 from "../../../images/type-img3.png";
import TypeImg4 from "../../../images/type-img4.png";
import TypeImg6 from "../../../images/type-img6.png";
import ShopItem from "./ShopItem";

const ShopList = () => {
  const shops = {
    types: [
      { text: "Chandelier", img: TypeImg1 },
      { text: "Pendant Lighting", img: TypeImg3 },
      { text: "Lamp", img: TypeImg4 },
      { text: "Sockets & Switches", img: TypeImg6 },
    ],
    rooms: [
      { text: "Dining Room", img: RoomImg2 },
      { text: "Living Room", img: RoomImg3 },
      { text: "Bedroom", img: RoomImg4 },
    ],
  };

  return (
    <>
      <div
        className="shop"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <div
          className="rooms"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            width: "100%",
          }}
        >
          <h1>Shop By Rooms</h1>

          <div
            style={{
              width: "92%",
              height: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "1.5rem",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {shops.rooms.map((shop, index) => (
              <ShopItem 
                key={index} 
                shop={shop} 
                value={'room'}
              />
            ))}
          </div>
        </div>

        <div
          className="types"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            width: "100%",
          }}
        >
          <h1>Shop By Types</h1>

          <div
            style={{
              width: "92%",
              height: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "1.5rem",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {shops.types.map((shop, index) => (
              <ShopItem 
                key={index} 
                shop={shop} 
                value={'type'}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopList;
