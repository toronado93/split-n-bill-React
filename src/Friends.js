import { useState } from "react";

export function Friends(props) {
  // DATA
  const imgsource = "https://i.pravatar.cc/300";
  const friends_data = [
    {
      name: "Clark",
      src: "https://i.pravatar.cc/300?img=70",
      description: "You re even",
    },
    {
      name: "Sarah",
      src: "https://i.pravatar.cc/300?img=2",
      description: "You re even",
    },
    {
      name: "Anthony",
      src: "https://i.pravatar.cc/300?img=3",
      description: "You re even",
    },
    {
      name: "Jane",
      src: "https://i.pravatar.cc/300?img=1",
      description: "You re even",
    },
  ];
  // STATE
  const [isOpen, setisOpen] = useState(false);
  const [friends, setFriends] = useState(friends_data);
  const [newfriend, setNewFriend] = useState(null);

  // HANDLERS

  function NewFriendHandler() {
    isOpen ? setisOpen(false) : setisOpen(true);
  }

  function newFriendDOMHandler(element) {
    setNewFriend(element);
  }

  function AddNewFriendHandler() {
    const newfriend_array = {
      name: newfriend,
      src: imgsource,
      description: "You re even",
    };

    setFriends((crr) => [...crr, newfriend_array]);

    setisOpen(false);
    setNewFriend(null);
  }

  return (
    <div className="friend_wrapper">
      {friends.map((f, _) => {
        return (
          <div key={_} className="friend_element">
            <div className="friend_element_even_column">
              <img src={f.src} alt="pcr"></img>
              <div>
                <h4>{f.name}</h4>
                {props.person === f.name ? (
                  <p style={{ color: props.color }}>{props.des}</p>
                ) : (
                  <p>{f.description}</p>
                )}
                {/* <p style={{ color: props.color }}>
                  {props.person === f.name ? props.des : f.description}
                </p> */}
              </div>
            </div>
            <button onClick={() => props.selecthandler(f.name)} className="btn">
              Select
            </button>
          </div>
        );
      })}
      <button onClick={NewFriendHandler} className="btn">
        {isOpen ? "Close" : "Add Friend"}
      </button>
      {/* Conditional Rendering */}
      {isOpen && (
        <div className="add_friend_wrapper">
          <div className="add_friend_element">
            <label>Friend Name</label>
            <input
              type="text"
              value={newfriend}
              onChange={(e) => {
                newFriendDOMHandler(e.target.value);
              }}
            ></input>
          </div>
          <div className="add_friend_element">
            <label>Image Url</label>
            <input type="text" value={imgsource}></input>
          </div>

          <button onClick={AddNewFriendHandler} className="btn">
            Add
          </button>
        </div>
      )}
    </div>
  );
}
