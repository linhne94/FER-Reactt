import React, { Component } from "react";
import DishDetail from "./DishdetailComponent";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import { Link } from "react-router-dom";

// function RenderMenuItem({ dish }) {
//   return (
//     <Card>
//       <Link to={`/menu/${dish.id}`}>
//         <CardImg width="100%" src={dish.image} alt={dish.name} />
//         {/* <CardImgOverlay> */}
//         <CardTitle>{dish.name}</CardTitle>
//         {/* </CardImgOverlay> */}
//       </Link>
//     </Card>
//   );
// }

import { Loading } from "./LoadingComponent";

function RenderMenuItem({ dish, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return (
      <Card>
        <Link to={`/menu/${dish.id}`}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          {/* <CardImgOverlay> */}
          <CardTitle>{dish.name}</CardTitle>
          {/* </CardImgOverlay> */}
        </Link>
      </Card>
    );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-3" key={dish.id}>
        <RenderMenuItem
          dish={dish}
          isLoading={props.dishesLoading}
          errMess={props.dishesErrMess}
        />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;