import {Card, CardHeader, CardPoster, CardBody, Tag, CardTitle, CardText, CardFooter, UserBox, Avatar, UserInfo, UserName, Date} from "./BlogCard.styled"

export const BlogCard = (props) => {
  return (
    <Card>
    <CardHeader>
      <CardPoster
        src={props.poster}
        alt={props.title}
      />
    </CardHeader>
    <CardBody>
      <Tag>{props.tag}</Tag>
      <CardTitle>{props.title}</CardTitle>
      <CardText>{props.description}</CardText>
    </CardBody>
    <CardFooter>
      <UserBox>
        <Avatar src={props.avatar} alt={props.name} />
        <UserInfo>
          <UserName>{props.name}</UserName>
          <Date>{props.postedAt}</Date>
        </UserInfo>
      </UserBox>
    </CardFooter>
  </Card>
)
};
