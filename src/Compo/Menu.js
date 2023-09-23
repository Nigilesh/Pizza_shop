import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Headers from './Header';
import Skeleton from 'react-loading-skeleton';

function PizzaList() {
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product))
  }
  const [products] = useState([
    {

      id: 1,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/10ddf620-ae20-477f-b4b2-9bce1ded021d_BlazingOnionPaprikacartmenu.jpeg ",
      name: 'Fiery Sausage & Paprika',
      description: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
      price: 179,
    },
    {
      id: 2,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/4d42a594-14be-48d2-ac4a-adcd0034a08f_FierySausagePaprikadef.jpeg ",
      name: 'Blazing Onion & Paprika',
      description: "Spiciest non veg pizza with spicy & herby chicken sausage and red paprika toppings on a new spicy peri peri sauce base.",
      price: 449,
    },
    {
      id: 3,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/0b10260e-cd5a-4dcd-a335-75100c33a919_Primavera_1.jpg",
      name: 'Primavera Gourmet Pizza',
      description: " Succulent zucchini, grilled mushrooms on a thin crust base with Italian sauce & bocconcini cheese to relish.",
      price: 669,
    },
    {
      id: 4,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/2afa9b37-04f1-4d10-b92f-b3bbdbf61445_SmokedChk_1.jpg",
      name: 'Smoked Chicken Gourmet Pizza',
      description: "For the veggie gourmet lovers. Succulent zucchini,  grilled mushrooms on a thin crust base with Italian sauce & bocconcini cheese to relish.",
      price: 846,
    },
    {
      id: 5,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/79bc3609-690b-440e-b8be-74694b1f3215_new_margherita_2502.jpg",
      name: 'Margherita',
      description: "For the veggie gourmet lovers. Succulent zucchini, fresh red & yellow bellpeppers and grilled mushrooms on a thin crust base with Italian sauce & bocconcini cheese to relish.",
      price: 239,
    },
    {
      id: 6,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/1b892978-f689-4199-90d2-47df4e261235_farmhouse.png",
      name: 'Farmhouse',
      description: "For the veggie gourmet lovers. Succulent zucchini, fresh red & yellow bellpeppers and grilled mushrooms on a thin crust base with Italian sauce & bocconcini cheese to relish.",
      price: 459,
    },
    {
      id: 7,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/f65964c6-de96-475d-a5a9-3f3698d66ee7_new_peppy_paneer.jpg",
      name: 'Peppy Paneer',
      description: "For the veggie gourmet lovers. Succulent zucchini, fresh red & yellow bellpeppers and grilled mushrooms on a thin crust base with Italian sauce & bocconcini cheese to relish.",
      price: 459,
    },
    {
      id: 8,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/5f8ad75f-22d0-4dfb-80e1-852fe2f1caf9_new_veg_extravaganza.jpg",
      name: 'Veg Extravaganza',
      description: "For the veggie gourmet lovers. Succulent zucchini, fresh red & yellow bellpeppers and grilled mushrooms on a thin crust base with Italian sauce & bocconcini cheese to relish.",
      price: 549,
    },
    {
      id: 9,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/8a9f4cab-4f46-4b71-8e9b-55bba0b96366_new_veggie_paradise.jpg",
      name: 'Veggie Paradise',
      description: "For the veggie gourmet lovers. Succulent zucchini, fresh red & yellow bellpeppers and grilled mushrooms on a thin crust base with Italian sauce & bocconcini cheese to relish.",
      price: 459,
    },
  ]);
  const [products1] = useState([
    {

      id: 10,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/17592352-028e-4c56-84f9-38564607bac1_MoroccanSpicePPVG_N.jpg",
      name: 'Moroccan Spice Pasta Pizza - Veg',
      description: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
      price: 329,
    },
    {

      id: 11,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/d9d123bc-2284-4e1c-b908-cca62ec5b2b8_new_fresh_veggie.jpg",
      name: 'Fresh Veggie',
      description: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
      price: 379,
    },
    {

      id: 12,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/0b10260e-cd5a-4dcd-a335-75100c33a919_Primavera_1.jpg",
      name: 'Primavera Gourmet Pizza      ',
      description: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
      price: 699,
    },
    {

      id: 13,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/4a407344-f1c3-42aa-81ce-3f8652c62b0d_MoroccanSpicePPNV_N.jpg",
      name: 'Moroccan Spice Pasta Pizza - Non Veg     ',
      description: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
      price: 499,
    },
    {

      id: 14,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/79bc3609-690b-440e-b8be-74694b1f3215_new_margherita_2502.jpg",
      name: 'Margherita',
      description: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
      price: 249,
    },
    {

      id: 15,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/1b892978-f689-4199-90d2-47df4e261235_farmhouse.png",
      name: 'Farmhouse',
      description: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
      price: 459,
    },
    {

      id: 16,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/8a9f4cab-4f46-4b71-8e9b-55bba0b96366_new_veggie_paradise.jpg",
      name: 'Primavera Gourmet Pizza      ',
      description: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
      price: 699,
    },
    {

      id: 17,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/1b892978-f689-4199-90d2-47df4e261235_farmhouse.png",
      name: 'Primavera Gourmet Pizza      ',
      description: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
      price: 699,
    },
    {

      id: 18,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/10ddf620-ae20-477f-b4b2-9bce1ded021d_BlazingOnionPaprikacartmenu.jpeg",
      name: 'Primavera Gourmet Pizza      ',
      description: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
      price: 699,
    },
  ])
  const [products2] = useState([
    {

      id: 19,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/b2fd890f-5889-4934-8586-1dbedb6fb856_new_chicken_golden_delight.jpg",
      name: 'Chicken Golden Delight',
      description: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
      price: 529,
    },
    {

      id: 20,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/b0bdc2e7-8860-4cc7-8029-fe556493076b_new_chicken_fiesta.jpg",
      name: 'Chicken Fiesta',
      description: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
      price: 529,
    },
    {

      id: 21,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/caa88590-9486-4a8b-be77-36e7403aa301_new_pepper_barbeque_chicken.jpg",
      name: 'Pepper Barbecue Chicken',
      description: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
      price: 429,
    },
    {

      id: 22,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/4a407344-f1c3-42aa-81ce-3f8652c62b0d_MoroccanSpicePPNV_N.jpg",
      name: 'Moroccan Spice Pasta Pizza - Non VegMoroccan Spice Pasta Pizza - Veg',
      description: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
      price: 429,
    },
    {

      id: 23,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/345f44fa-21df-4a0a-b354-876dc224f911_Keema.jpg",
      name: 'Chicken Keema Paratha Pizza',
      description: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
      price: 229,
    },
    {

      id: 24,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/4d42a594-14be-48d2-ac4a-adcd0034a08f_FierySausagePaprikadef.jpeg",
      name: 'Fiery Sausage & Paprika',
      description: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
      price: 449,
    },
    {

      id: 25,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/2afa9b37-04f1-4d10-b92f-b3bbdbf61445_SmokedChk_1.jpg",
      name: 'Smoked Chicken Gourmet Pizza',
      description: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
      price: 829,
    },
    {

      id: 26,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/e5710abe-2509-472a-987c-a8b13ec8c203_PIZ5157_1.jpg",
      name: 'Spiced Double Chicken',
      description: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
      price: 559,
    },
    {

      id: 27,
      image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/menu/1bd3b61b-4833-4b85-bf70-b38f9aa66e31_PIZ5159_1.jpg",
      name: 'The 5 Chicken Feast Pizza',
      description: "Hot & spicy pizza with onion & red paprika toppings and a new spicy peri peri sauce on a Domino's cheesy base.",
      price: 699,
    },
  ])
  
  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  // const filterProduct = (cat) => {
  //   const updatedList = data.filter((item) => item.category === cat);
  //   setFilter(updatedList);
  // };
  const ShowProducts = () => {
    return (
      <>

        {/* <div className="buttons text-center py-5  row">
          <div className="col-12">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>
        </div> */}
        {products.map((product) => {
          return (

            <div id={product.id} key={product.id} className="col-md-4 col-sm-2 col-xs-12 col-12 mb-5 px-5 mt-3">
              <div className="card text-center  h-25  w-100" key={product.id}>
                <img
                  className="card-img-top p-3 text-center"
                  src={product.image}
                  alt="Card"
                  height={200}

                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.name}
                  </h5>
                  <p className="card-text">
                    {product.description}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">₹ {product.price}</li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body ">
                  <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button className="btn btn-primary m-1" onClick={() => addProduct(product)} >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>


          );
        })}
      </>
    );
  };
  const ShowProducts2 = () => {
    return (
      <>

        {/* <div className="buttons text-center py-5  row">
          <div className="col-12">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>
        </div> */} <div className="row">
          <div className="col-12">
            <h3 className="display-5 ">
              VEG PIZZA </h3>
            <hr />
          </div>
        </div>
        {products1.map((product) => {
          return (

            <div id={product.id} key={product.id} className="col-md-4 col-sm-2 col-xs-12 col-12 mb-5 px-5 mt-3">
              <div className="card text-center  h-25  w-100" key={product.id}>
                <img
                  className="card-img-top p-3 text-center"
                  src={product.image}
                  alt="Card"
                  height={200}

                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.name}
                  </h5>
                  <p className="card-text">
                    {product.description}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">₹ {product.price}</li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body">
                  <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button className="btn btn-primary m-1" onClick={() => addProduct(product)} >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>


          );
        })}
      </>
    );
  };
  const ShowProducts3 = () => {
    return (
      <>

        {/* <div className="buttons text-center py-5  row">
          <div className="col-12">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>
        </div> */}
         <div className="row">
          <div className="col-12">
            <h3 className="display-5 ">
              NON-VEG PIZZA </h3>
            <hr />
          </div>
        </div>
        {products2.map((product) => {
          return (

            <div id={product.id} key={product.id} className="col-md-4 col-sm-2 col-xs-12 col-12 mb-5 px-5 mt-3">
              <div className="card text-center  h-25  w-100" key={product.id}>
                <img
                  className="card-img-top p-3 text-center"
                  src={product.image}
                  alt="Card"
                  height={200}

                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.name}
                  </h5>
                  <p className="card-text">
                    {product.description}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">₹ {product.price}</li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body ">
                  <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button className="btn btn-primary m-1" onClick={() => addProduct(product)} >
                    Add to Cart 
                  </button>
                </div>
              </div>
            </div>


          );
        })}
      </>
    );
  };
  return (
    <>
      <Headers></Headers>
      <section id="menu">

        <div className="container my-3 py-3">
          <div className="row">
            <div className="col-12">
              <h3 className="display-5 "> BESTSELLERS </h3>
              <hr />
            </div>
          </div>
          <div className="row  ms-4 ps-3 align-items-center">

            <ShowProducts />
            <ShowProducts2></ShowProducts2>
            <ShowProducts3></ShowProducts3>
          </div>
        </div>
      </section>
    </>
  );
};

export default PizzaList;