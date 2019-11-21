import React, {Component, Fragment} from "react";

export default class BlogDetail extends Component {
  render() {
    return (
      <Fragment>
        <h1>{this.props.match.params.article}</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque architecto fugiat, tempore quae modi natus. Iure aliquam deserunt illum. Voluptas inventore aliquid facere ratione neque? A laboriosam sed ea eligendi facere ipsam neque dignissimos itaque at tempore est, cupiditate, tempora nesciunt distinctio quasi recusandae praesentium eum sapiente culpa alias in harum animi? Ab quos laborum neque quia rerum dignissimos nemo, est, explicabo cum, sint voluptatum! Cupiditate qui eum quidem tenetur numquam ad consequuntur ea necessitatibus!</p>
        <p>Sapiente a animi sequi ipsam. Porro dolore nisi quisquam adipisci, cum doloremque amet doloribus. Placeat quo ipsa deleniti voluptates voluptatibus. Blanditiis aliquid expedita suscipit nobis libero. Minima ullam ut, nesciunt harum ratione voluptatum fuga corrupti, in architecto, ea iure. Minus sed delectus perspiciatis, veritatis tempore et atque sit placeat quasi eveniet porro. Numquam impedit sapiente magnam minima corporis hic tenetur quis perferendis, sit assumenda dignissimos temporibus dolorum exercitationem praesentium repudiandae deserunt tempore culpa. Dolorem, ea!</p>
      </Fragment>
    );
  }
}