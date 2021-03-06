import React from 'react'
import { Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import pic from '../assets/wit.jpg'

const Post = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pic} />
    <Card.Body>
      <Card.Title>{props.post.post_title}</Card.Title>
      
      <Card.Text>This is Blog {props.post.post_id}.
      </Card.Text>
      <Button as={Link} to={'/post/'+ props.post.post_id} variant="primary">Here</Button>
    </Card.Body>
  </Card>
  )
}

export default Post