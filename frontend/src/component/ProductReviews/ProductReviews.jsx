import React, { Fragment, useEffect, useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
import "./ProductReviews.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAllReviews,
  deleteReviews,
} from "../../actions/productAction";
import { useAlert } from "react-alert";
import { Button } from "mdbreact";
import MetaData from "../layout/MetaData";
import DeleteIcon from "@material-ui/icons/Delete";
import { DELETE_REVIEW_RESET } from "../../constants/productConstants";

import SideBar from "./Sidebar";

const ProductReviews = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error: deleteError, isDeleted } = useSelector((state) => state.review);
  const { error, reviews, loading } = useSelector((state) => state.productReviews);
  const [productId, setProductId] = useState("");

  const deleteReviewHandler = (reviewId) => {
    dispatch(deleteReviews(reviewId, productId));
  };

  const productReviewsSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getAllReviews(productId));
  };

  useEffect(() => {
    if (productId.length === 24) {
      dispatch(getAllReviews(productId));
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Review Deleted Successfully");
      history.push("/admin/reviews");
      dispatch({ type: DELETE_REVIEW_RESET });
    }
  }, [dispatch, alert, error, deleteError, history, isDeleted, productId]);

  const columns = [
    { label: "Review ID", field: "id", width: 200 },
    { label: "User", field: "user", width: 200 },
    { label: "Comment", field: "comment", width: 350 },
    { label: "Rating", field: "rating", width: 180 },
    { label: "Actions", field: "actions", width: 150 },
  ];

  const rows = [];

  reviews &&
    reviews.forEach((item) => {
      rows.push({
        id: item._id,
        rating: item.rating,
        comment: item.comment,
        user: item.name,
        actions: (
          <Button onClick={() => deleteReviewHandler(item._id)}>
            <DeleteIcon />
          </Button>
        ),
      });
    });

  const data = {
    columns,
    rows,
  };

  return (
    <Fragment>
      <MetaData title={`ALL REVIEWS - Admin`} />
      <div className="dashboard">
        <SideBar />
        <div className="productReviewsContainer">
          <form className="productReviewsForm" onSubmit={productReviewsSubmitHandler}>
            <h1 className="productReviewsFormHeading">ALL REVIEWS</h1>
            <div>
              <input
                type="text"
                placeholder="Product Id"
                required
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              />
            </div>
            <Button
              color="primary"
              type="submit"
              disabled={loading || productId === ""}
            >
              Search
            </Button>
          </form>
          {reviews && reviews.length > 0 ? (
            <MDBDataTableV5
              striped
              hover
              data={data}
              searching={false}
              entriesOptions={[10, 20, 30]}
              entries={10}
              pagesAmount={4}
              autoHeight
            />
          ) : (
            <h1 className="productReviewsFormHeading">No Reviews Found</h1>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductReviews;
