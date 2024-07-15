import React from "react";
import BannerSection from "../../../BannerSection";
import BreadImg from "../../../../../src/assets/img/breadcrumb/breadcrumb.jpg";
import { Link } from "react-router-dom";
import Subscribe from "../../../Body/Subscribe";


const Cart = () => {
  return (
    <>
      <BannerSection img={BreadImg} title="Cart" name="Cart" />
      <section className="cart-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="#">
                <div
                  className="table-content table-responsive wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                  style={{
                    visibility: "visible",
                    animationDuration: "0.9s",
                    animationDelay: "0.3s",
                    animationName: "tpfadeUp",
                  }}
                >
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-thumbnail">
                          <Link>
                            <img src="assets/img/cart/cart-1.png" alt="cart" />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link>specialone 4 Inch 820W</Link>
                        </td>
                        <td className="product-price">
                          <span className="amount">$180.00</span>
                        </td>
                        <td className="product-quantity">
                          <span className="cart-minus">-</span>
                          <input className="cart-input" type="text" value="1" />
                          <span className="cart-plus">+</span>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">$760.00</span>
                        </td>
                        <td className="product-remove">
                          <Link>
                            <i className="fa fa-times"></i>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail">
                          <Link>
                            <img src="assets/img/cart/cart-2.png" alt="cart" />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link>specialone 4 Inch 820W</Link>
                        </td>
                        <td className="product-price">
                          <span className="amount">$1260.50</span>
                        </td>
                        <td className="product-quantity">
                          <span className="cart-minus">-</span>
                          <input className="cart-input" type="text" value="1" />
                          <span className="cart-plus">+</span>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">$90.50</span>
                        </td>
                        <td className="product-remove">
                          <Link>
                            <i className="fa fa-times"></i>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail">
                          <Link>
                            <img src="assets/img/cart/cart-3.png" alt="cart" />
                          </Link>
                        </td>
                        <td className="product-name">
                          \<Link>specialone 4 Inch 820W</Link>
                        </td>
                        <td className="product-price">
                          <span className="amount">$180.00</span>
                        </td>
                        <td className="product-quantity">
                          <span className="cart-minus">-</span>
                          <input className="cart-input" type="text" value="1" />
                          <span className="cart-plus">+</span>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">$760.00</span>
                        </td>
                        <td className="product-remove">
                          <Link>
                            <i className="fa fa-times"></i>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail">
                          <Link>
                            <img src="assets/img/cart/cart-4.png" alt="cart" />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link>specialone 4 Inch 820W</Link>
                        </td>
                        <td className="product-price">
                          <span className="amount">$1260.50</span>
                        </td>
                        <td className="product-quantity">
                          <span className="cart-minus">-</span>
                          <input className="cart-input" type="text" value="1" />
                          <span className="cart-plus">+</span>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">$90.50</span>
                        </td>
                        <td className="product-remove">
                          <Link>
                            <i className="fa fa-times"></i>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="coupon-all">
                      <div className="coupon">
                        <input
                          id="coupon_code"
                          className="input-text"
                          name="coupon_code"
                          value
                          placeholder="Coupon code"
                          type="text"
                        />
                        <button
                          className="it-btn"
                          name="apply_coupon"
                          type="submit"
                        >
                          <span>Apply coupon</span>
                        </button>
                      </div>
                      <div className="coupon2">
                        <button
                          className="it-btn"
                          name="update_cart"
                          type="submit"
                        >
                          <span>Update cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-md-5 ">
                    <div className="cart-page-total">
                      <h2>Cart totals</h2>
                      <ul className="mb-20">
                        <li>
                          Subtotal <span>$250.00</span>
                        </li>
                        <li>
                          Total <span>$250.00</span>
                        </li>
                      </ul>
                      <Link className="it-btn">
                        <span>Proceed to checkout</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Subscribe/>
    </>
  );
};

export default Cart;
