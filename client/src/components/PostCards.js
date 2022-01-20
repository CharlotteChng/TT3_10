import { Image, Typography } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
function PostCards({ ...props }) {
  var { postID, postTitle, postDescription, postImage } = props;
  const { Title, Text } = Typography;
  return (
    <div className="postcard-main">
      <div className="pc-margin">
        <div className="pc-lm"></div>
        <div className="pc-rm"></div>
        <div className="pc-r1">
          <div className="pc-r1-lc">
            <Image
              className="pc-img"
              width={100}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              borderRadius="50%"
            />
          </div>
          <div className="pc-r1-rc">
            <div className="pc-heading">
              <div className="pc-head-title">
                <Title level={3} style={{ marginLeft: "10px" }}>
                  {postTitle}
                </Title>
              </div>
              <div className="pc-icons">
                <CaretDownOutlined style={{ iconSize: "24px" }} />
                <CaretUpOutlined />
              </div>
            </div>

            <Text level={5} style={{ marginLeft: "10px" }}>
              User: jackHamilton
            </Text>
            {/* <div className="pc-title">{postTitle}</div> */}
          </div>
        </div>
        <div className="pc-r2">
          <div className="pc-img">
            {/* <div>{postImage}</div> */}
            <Image
              src={postImage}
              alt="loading..."
              style={{ width: "200px", height: "200px" }}
            />
            {/* <Video src={"https://i.redd.it/600fjw70hqb81.jpg"} alt="new" /> */}
          </div>
        </div>
        <div className="pc-r3">
          <div className="pc-desc">{postDescription}</div>
        </div>
      </div>
    </div>
  );
}
export default PostCards;
