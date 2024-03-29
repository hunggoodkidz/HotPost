import "./message.css";

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText">Văn mẫu của mấy chị nào đó đang nhắn tin</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}
