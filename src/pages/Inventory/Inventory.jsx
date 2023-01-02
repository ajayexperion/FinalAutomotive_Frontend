import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import classes from '../UserProfile/UserProfile.module.css';

function Inventory() {
  const [prodOrData, setOrgData] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const searchInpRef = useRef();
  const [status, setStatus] = useState(true);
  const [inputValue, setInputValue] = useState();
  const [indexer, setindexer] = useState('');

  const auth = `${JSON.parse(sessionStorage.getItem('jwt'))}`;
  const httpClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/product/',
    headers: {
      // Authorization : `Bearer ${JSON.parse( sessionStorage.getItem('jwt'))}`
      Authorization: auth,
    },
  });
  useEffect(() => {
    httpClient.get('displayproduct/')
      .then((response) => {
        console.log(response.data);
        if (response.data?.detail == 'Unauthenticated!') {
          alert('Session expired Plz login again');
        } else {
          setProductDetails(response.data);
          setOrgData(response.data);
        }
      });
  }, []);

  const handleSearch = () => {
    if (searchInpRef.current.value.length >= 3) {
      const resp = productDetails.filter((data) => data.productName.includes(searchInpRef.current.value));
      setProductDetails([...resp]);
    } else {
      setProductDetails(prodOrData);
    }
  };
  const handleChangeText = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };
  const handleEdit = (i) => {
    setStatus(false);
    setindexer(i);
  };
  const handleSave = (i, prodId) => {
    console.log(prodId);
    setStatus(true);
    setindexer(i);
    axios.put(`http://127.0.0.1:8000/product/updateproduct/${prodId}`, {
      name: productDetails[i].productName,
      price: productDetails[i].productPrice,
      quantity: JSON.parse(inputValue),
    })
      .then(() => {
        alert('Product Updated success');
      });
    // call the api by passing
  };

  const printdetails = () => {
    window.open('http://127.0.0.1:8000/product/printproductdetails/', '_blank', 'noopener,noreferrer');
  };
  return (
    <div className={classes.profile}>
      <input type="text" placeholder="Search.." className="mt-5" ref={searchInpRef} onChange={handleSearch} />
      <table className="table table-striped position-relative start-0">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col"><strong>NO</strong></th>
            <th scope="col"><strong>PRODUCT NAME</strong></th>
            <th scope="col"><strong>PRODUCT PRICE</strong></th>
            <th scope="col"><strong>PRODUCT QUANITY</strong></th>
            <th>&emsp</th>
          </tr>
        </thead>
        <tbody>
          {productDetails.map((object, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{object.productName}</td>
              <td>{object.productPrice}</td>
              <td>{object.productQuantity}</td>
              <td>
                <input
                  disabled={status || i != indexer}
                  type="number"
                  onChange={(event) => handleChangeText(event)}
                />
              </td>
              <td>

                {
                    (status || i != indexer) && (
                      <button type="button" onClick={() => { handleEdit(i); }}>Edit</button>
                    )

                  }
                {
                    (!status && i == indexer) && (
                      <button type="button" onClick={() => { handleSave(i, object.id); }}>Save</button>
                    )

                  }
              </td>

            </tr>
          ))}
        </tbody>

        <div>
          <button
            type="button"
            className="btn btn-success"
            onClick={printdetails}
          >
            PRINT PRODUCT DETAILS
          </button>
        </div>

      </table>

    </div>

  );
}
export default Inventory;
