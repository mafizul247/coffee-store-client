import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './CoffeeDetail.css'

const CoffeeDetail = () => {
    const coffee = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className='details'>
            <button onClick={() => navigate(-1)} className='back-btn'><FaArrowLeft /> Back</button>
            <div className='coffee-detail'>
                <img className='coffee-img' src={coffee.photo} alt={coffee.coffeeName} />
                <div>
                    <p><b>Cofee Name:</b> {coffee.coffeeName}</p>
                    <p><b>Chef Name:</b> {coffee.chef}</p>
                    <p><b>Supplier Name:</b> {coffee.supplier}</p>
                    <p><b>Category:</b> {coffee.category}</p>
                    <p><b>Coffee Taste:</b> {coffee.taste}</p>
                    <p><b>Coffee Price:</b> {coffee.price && parseFloat(coffee.price).toFixed(2)} Taka</p>
                    <p><b>Coffee Details:</b> {coffee.details} Taka</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetail;