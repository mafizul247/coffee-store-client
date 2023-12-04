import React, { useEffect, useState } from 'react';
import { FaCoffee, FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Product.css'

import coffeeImg1 from './../../assets/images/1.png'
import Swal from 'sweetalert2';

const Product = () => {
    const [coffees, setCoffes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/coffees')
            .then(res => res.json())
            .then(data => {
                setCoffes(data);
            })
    }, []);

    const handleDelete = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure delete?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = coffees.filter(coffee => coffee._id != id)
                            setCoffes(remaining);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className='populor-porducts'>
            <div className="product-title">
                <p><small>--- Sip & Savor ---</small></p>
                <h2>Our Popular Products</h2>
                <Link to='/add-coffee' className='btn coffee-add'>Add Coffee <FaCoffee /></Link>
            </div>
            <div className='products'>
                {
                    coffees?.map(coffee => <div key={coffee?._id} className='product'>
                        <img className='coffee-img' src={coffee?.photo} alt="Coffee" />
                        <div className='coffee-content'>
                            <p><b>Name:</b>  {coffee?.coffeeName}</p>
                            <p><b>Chef:</b>  {coffee?.chef}</p>
                            <p><b>Price</b>  {coffee.price && parseFloat(coffee?.price).toFixed(2)} Taka</p>
                        </div>
                        <div className='action'>
                            <Link to={`/detail/${coffee?._id}`}><FaEye className='icon view' /></Link>
                            <Link to={`/edit/${coffee?._id}`}><FaEdit className='icon edit' /></Link>
                            <FaTrashAlt onClick={() => handleDelete(coffee?._id)} className='icon delete' />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Product;