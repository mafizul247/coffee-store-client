import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeEdit = () => {
    const { id } = useParams();
    const [coffee, setCoffee] = useState({});
    const navigate = useNavigate();
    // console.log(coffee);
    useEffect(() => {
        fetch(`http://localhost:5000/coffees/${id}`)
            .then(res => res.json())
            .then(data => {
                setCoffee(data)
            })
    }, [id]);

    const handleUpdate = (event) => {
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
        fetch(`http://localhost:5000/coffees/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCoffee)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your coffee price has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <div className='add-section'>
                <button onClick={() => navigate(-1)} className='btn btn-back'><FaArrowLeft /> Back</button>
                <h3 className='add-coffee'>Update {coffee.coffeeName}</h3>
                <form onSubmit={handleUpdate}>
                    <div className='coffees'>
                        <div className='coffee'>
                            <label className='labelCoffee' >Coffee Name</label>
                            <input className='inputCoffee' type="text" name="coffeeName" placeholder='Enter coffee name' defaultValue={coffee.coffeeName} />
                        </div>
                        <div className='coffee'>
                            <label className='labelCoffee' >Chef Name</label>
                            <input className='inputCoffee' type="text" name="chef" placeholder='Enter Chef name' defaultValue={coffee.chef} />
                        </div>
                    </div>
                    <div className='coffees'>
                        <div className='coffee'>
                            <label className='labelCoffee' >Supplier Name</label>
                            <input className='inputCoffee' type="text" name="supplier" placeholder='Enter Supplier name' defaultValue={coffee.supplier} />
                        </div>
                        <div className='coffee'>
                            <label className='labelCoffee'>Taste</label>
                            <input className='inputCoffee' type="text" name="taste" placeholder='Enter Taste name' defaultValue={coffee.taste} />
                        </div>
                    </div>
                    <div className='coffees'>
                        <div className='coffee'>
                            <label className='labelCoffee'>Category Name</label>
                            <select name="category" id="category" className='inputCoffee' >
                                <option value={coffee.category}>{coffee.category}</option>
                                <option value="Black Coffee">Black Coffee</option>
                                <option value="Hot Coffe">Hot Coffee</option>
                                <option value="Normal Coffee">Normal Coffee</option>
                            </select>
                        </div>
                        <div className='coffee'>
                            <label className='labelCoffee'>Details</label>
                            <input className='inputCoffee' type="text" name="details" placeholder='Enter Details' defaultValue={coffee.details} />
                        </div>
                    </div>
                    <div className='coffees'>
                        <div className='coffee'>
                            <label className='labelCoffee' >Coffee Price</label>
                            <input className='inputCoffee' type="text" name="price" placeholder='Enter Supplier name' defaultValue={coffee.price && parseFloat(coffee.price).toFixed(2)} />
                        </div>
                        <div className='coffee'>
                            <label className='labelCoffee'>Coffee URL</label>
                            <input className='inputCoffee' type="url" name="photo" placeholder='Enter COffee URL' defaultValue={coffee.photo} />
                        </div>
                    </div>
                    <div className='sub-btn'>
                        <input type="submit" value="Update Coffee" className='addACoffee' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CoffeeEdit;