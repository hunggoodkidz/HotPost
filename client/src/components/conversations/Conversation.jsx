
import "./conversation.css";

export default function Conversation() {

  return (
    <div className="conversation">
    <div className="chatOnlineImgContrainer">
        <img
            className="conversationImg"
            src="https://picsum.photos/200"
            alt=""
        />
      <div className="badge"/>
    </div>
      <span className="conversationName">Chấn Hưng</span>
    </div>
  );
}
