import Button from "react-bootstrap/Button";
import playIcon from "../../assets/play-btn.svg";
import editIcon from "../../assets/pencil.svg";
import deleteIcon from "../../assets/trash.svg";
import { PostContext } from "../../contexts/PostContext";
import { useContext } from "react";

const ActionButtons = ({ url, _id }) => {
  const { deletePost, findPost, setShowUpdatePostModal } =
    useContext(PostContext);

  const choosePost = (postId) => {
    findPost(postId);
    setShowUpdatePostModal(true);
  };

  return (
    <div
      style={{
        border: "1px solid #7bc3b0",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Button
        className="post-button"
        href={url}
        target="_blank"
        style={{ background: "transparent", border: "none" }}
      >
        <img src={playIcon} alt="play" width="32" height="32" />
      </Button>
      <Button
        className="post-button"
        onClick={choosePost.bind(this, _id)}
        style={{ background: "transparent", border: "none" }}
      >
        <img src={editIcon} alt="edit" width="24" height="24" />
      </Button>
      <Button
        className="post-button"
        onClick={deletePost.bind(this, _id)}
        style={{ background: "transparent", border: "none" }}
      >
        <img src={deleteIcon} alt="delete" width="24" height="24" />
      </Button>
    </div>
  );
};

export default ActionButtons;
