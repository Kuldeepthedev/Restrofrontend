import React, { useEffect } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IconContext } from "react-icons";
import './Dash.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProductAction } from '../../Actions/getProductAction';
import { deleteProductAction } from '../../Actions/deleteProductAction';

function Dashintro() {
  const { loading, error, data } = useSelector(state => state.data);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProductAction());
  }, [dispatch]);

  const handleDeleteProduct = async (_id) => {
    try {
      await dispatch(deleteProductAction(_id)); 
      dispatch(getProductAction()); 
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <>
      <section>
        <h1>Menu Dashboard</h1>
        <div className="feature_section">
          {/* Input fields for adding a new product */}
        </div>
        <div className="data_table">
          <IconContext.Provider
            value={{
              color: "red",
              className: "global-class-name",
              size: "1.4em"
            }}
          >
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Item Name</th>
                  <th colSpan={2}>ETA</th>
                </tr>
              </thead>
              <tbody>
                {data && data.map((item) => (
                  
                  <tr key={item._id}>
                    <td>{item.category}</td>
                    <td>{item.itemname}</td>
                    <td>{item.eta}</td>
                    <td><MdOutlineDeleteOutline onClick={() => handleDeleteProduct(item._id)} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </IconContext.Provider>
        </div>
      </section>
    </>
  );
}

export default Dashintro;
