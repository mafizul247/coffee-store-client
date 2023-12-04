import React from 'react';
import './AddCoffee.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const AddCoffee = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const coffeeName = form.coffeeName.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const photo = form.photo.value;

        const addCoffee = { coffeeName, chef, supplier, taste, category, details, price: parseFloat(price), photo };
        // console.log(addCoffee);
        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCoffee)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your coffee has been add",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    event.target.reset();
                }
            })
    }

    return (
        <>
            <div className='add-section'>
                <button onClick={() => navigate(-1)} className='btn btn-back'><FaArrowLeft /> Back</button>
                <h3 className='add-coffee'>Add A Coffee</h3>
                <p className='add-dec'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleSubmit}>
                    <div className='coffees'>
                        <div className='coffee'>
                            <label className='labelCoffee' >Coffee Name</label>
                            <input className='inputCoffee' type="text" name="coffeeName" placeholder='Enter coffee name' />
                        </div>
                        <div className='coffee'>
                            <label className='labelCoffee' >Chef Name</label>
                            <input className='inputCoffee' type="text" name="chef" placeholder='Enter Chef name' />
                        </div>
                    </div>
                    <div className='coffees'>
                        <div className='coffee'>
                            <label className='labelCoffee' >Supplier Name</label>
                            <input className='inputCoffee' type="text" name="supplier" placeholder='Enter Supplier name' />
                        </div>
                        <div className='coffee'>
                            <label className='labelCoffee'>Taste</label>
                            <input className='inputCoffee' type="text" name="taste" placeholder='Enter Taste name' />
                        </div>
                    </div>
                    <div className='coffees'>
                        <div className='coffee'>
                            <label className='labelCoffee'>Category Name</label>
                            <select name="category" id="category" className='inputCoffee'>
                                <option value="Black Coffee">Black Coffee</option>
                                <option value="Hot Coffe">Hot Coffee</option>
                                <option value="Normal Coffee">Normal Coffee</option>
                            </select>
                        </div>
                        <div className='coffee'>
                            <label className='labelCoffee'>Details</label>
                            <input className='inputCoffee' type="text" name="details" placeholder='Enter Details' />
                        </div>
                    </div>
                    <div className='coffees'>
                        <div className='coffee'>
                            <label className='labelCoffee' >Coffee Price</label>
                            <input className='inputCoffee' type="text" name="price" placeholder='Enter Supplier name' />
                        </div>
                        <div className='coffee'>
                            <label className='labelCoffee'>Coffee URL</label>
                            <input className='inputCoffee' type="url" name="photo" placeholder='Enter COffee URL' />
                        </div>
                    </div>
                    <div className='sub-btn'>
                        <input type="submit" value="Add Coffee" className='addACoffee' />
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddCoffee;