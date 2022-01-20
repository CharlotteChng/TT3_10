import { Avatar, Badge, Button, Col, Image, Row, Typography } from "antd";
import { CaretUpOutlined, CaretDownOutlined, LikeOutlined, ShareAltOutlined } from "@ant-design/icons";
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
              width={64}
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
                <Text level={5} style={{ marginLeft: "10px" }}>
                  User: jackHamilton
                </Text>
              </div>
              {/* <div className="pc-icons">
                <CaretUpOutlined style={{ color: 'green', fontSize: "32px" }} />
                <Title level={5}>0</Title>
                <CaretDownOutlined style={{ color: 'red', fontSize: "32px" }} />
              </div> */}
            </div>
            {/* <div className="pc-title">{postTitle}</div> */}
          </div>
        </div>
        <div className="pc-r3">
          <div className="pc-desc">{postDescription}</div>
        </div>
        <div className="pc-r2">
          <div className="pc-img">
            {/* <div>{postImage}</div> */}
            <Image
              src={postImage}
              alt="loading..."
              style={{ width: "100%" }}
            />
            {/* <Video src={"https://i.redd.it/600fjw70hqb81.jpg"} alt="new" /> */}
          </div>
        </div>
      </div>

      <Badge count={3} style={{ marginTop: 10, marginBottom: 20 }}>
        <Avatar size={32} icon={<LikeOutlined />} />
      </Badge>

      <Row style={{ textAlign: 'center' }}>
        <Col span={12}>
          <Button style={{ width: '100%' }}><LikeOutlined />Like</Button>
        </Col>
        <Col span={12}>
          <Button style={{ width: '100%' }}><ShareAltOutlined />Share</Button>
        </Col>
      </Row>
    </div>
  );
}
export default PostCards;
