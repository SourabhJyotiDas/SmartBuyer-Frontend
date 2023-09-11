import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myOrders } from "../../actions/orderAction";
import Loader from "../layout/Loader";
import { Link } from "react-router-dom";
import MetaData from "../layout/Metadata";
import { MdOutlineLaunch } from "react-icons/md";

const MyOrders = () => {
  const dispatch = useDispatch();

  const { loading, error, orders } = useSelector((state) => state.myOrders);
  const { user } = useSelector((state) => state.user);


  useEffect(() => {
    window.scrollTo(0, 0)
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(myOrders());
  }, [dispatch, error]);

  return (
    <Fragment>
      <MetaData title={`${user.name} - Orders`} />

      {loading ? (
        <Loader />
      ) : (
        <main className='w-[100%] mx-auto h-[100%] p-3 overflow-x-auto min-h-[80vh] lg:mx-auto lg:w-[80vw]'>
          <table className='w-auto text-center py-5'>
            <thead className="border-2 border-gray-100">
              <tr className='bg-blue-500 text-white font-semibold '>
                <th className="py-3">Order Id</th>
                <th>Status</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="">
              {orders &&
                orders.map((item) => (
                  <tr key={item._id} className="border-2 border-gray-500">
                    <td className="px-10 py-3">#{item._id}</td>
                    <td className="px-10">{item.orderStatus}</td>
                    <td className="px-10">{item.orderItems.length}</td>
                    <td className="px-10">{item.totalPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</td>
                    <td>
                      <Link to={`/order/${item._id}`}>
                        < MdOutlineLaunch className="text-2xl" />
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </main>
      )}
    </Fragment>
  );
};

export default MyOrders;
