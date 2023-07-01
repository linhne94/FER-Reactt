import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm"; // import { Provider } from "react-redux";
import { Loading } from "./LoadingComponent";

function RenderDish({ dish }) {
  if (dish == null) {
    return <div></div>;
  }
  return (
    <div className="col-12 col-md-12">
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments, addComment, dishId }) {
  if (comments == null) {
    return <div></div>;
  }
  const showcmnts = comments.map((cmnt) => {
    return (
      <li key={cmnt.id}>
        <p>{cmnt.comment}</p>
        <p>
          --{cmnt.author}, &nbsp;
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(cmnt.date))}
        </p>
      </li>
    );
  });

  return (
    <div className="col-12 col-md-12">
      <h4> Comments </h4>
      <ul className="list-unstyled">{showcmnts}</ul>
    </div>
  );
}

const DishDetail = (props) => {
  if (props.isLoading) {
    return(
        <div className="container">
            <div className="row">            
                <Loading />
            </div>
        </div>
    );
}
else if (props.errMess) {
    return(
        <div className="container">
            <div className="row">            
                <h4>{props.errMess}</h4>
            </div>
        </div>
    );
}
else if (props.dish != null) 


  if (props.dish != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            {/* <CommentForm dishId={dishId} addComment={addComment} /> */}
            <RenderComments
              comments={props.comments}
              addComment={props.addComment}
              dishId={props.dish.id}
            />
            <CommentForm dishId={props.dishId} addComment={props.addComment} />
          </div>
        </div>
      </div>
    );
};

export default DishDetail;
