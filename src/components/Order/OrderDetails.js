import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/Metadata";
import { Link, useParams } from "react-router-dom";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import Loader from "../layout/Loader";

const OrderDetails = () => {
  const params = useParams()
  const { order, error, loading } = useSelector((state) => state.orderDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getOrderDetails(params.id));
  }, [dispatch, error, params.id]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Order Details" />
          <div className="min-h-[80vh]">
            <div className="p-5">
              <p className="md:flex md:justify-center md:items-center">
                Order : #{order && order._id}
              </p>
              <p className="text-center font-semibold text-xl underline">Shipping Info</p>
              <div className="my-5 md:flex md:flex-col md:justify-center md:items-center">
                <div className="flex space-x-3">
                  <p>Name:</p>
                  <span>{order.user && order.user.name}</span>
                </div>
                <div className="flex space-x-3">
                  <p>Phone:</p>
                  <span>
                    {order.shippingInfo && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div className="flex space-x-3">
                  <p>Address:</p>
                  <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                  </span>
                </div>
              </div>
              <p className="text-center font-semibold text-xl underline">Payment</p>
              <div className="my-5 md:flex md:flex-col md:justify-center md:items-center">
                <div>
                  <p
                    className={
                      order.paymentInfo &&
                        order.paymentInfo.status === "succeeded"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                      ? "PAID"
                      : "NOT PAID"}
                  </p>
                </div>

                <div className="flex space-x-3">
                  <p>Amount:</p>
                  <span>{order.totalPrice && order.totalPrice}</span>
                </div>
              </div>

              <p className="text-center font-semibold text-xl underline">Order Status</p>
              <div className="my-3 md:flex md:flex-col md:justify-center md:items-center">
                <div>
                  <p
                    className={
                      order.orderStatus && order.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.orderStatus && order.orderStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5">
              <p className="text-center font-semibold text-xl underline">Order Items:</p>
              <div className="my-3 md:flex md:flex-col md:justify-center md:items-center">
                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <div key={item.product}>
                      <div className="flex items-center space-x-3">
                        <img className="h-[60px]" src={item.image} alt="Product" />
                        <div>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>{" "}
                        </div>
                      </div>
                      <span className="text-center flex items-center justify-center">
                        {item.quantity} X ₹{item.price} ={" "}
                        <b>₹{item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;
