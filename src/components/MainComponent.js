import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Route, Redirect, Routes, Navigate, useParams } from "react-router-dom";
import Contact from './ContactComponentV2';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Login from "./Login";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Provider } from "react-redux";
import store from "../shared/store";
import Counter from "../shared/Counter"

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[1]}
        />
      );
    };

    const DishWithId = () => {
      const { dishId } = useParams();
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.dishId === parseInt(dishId, 10)
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route
            exact
            path="/menu"
            element={
              <Menu
                dishes={this.state.dishes}
                onClick={(dishId) => this.onDishSelect(dishId)}
              />
            }
          />
          <Route exact path="/contactus" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/menu/:dishId" element={<DishWithId />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}



export default Main;