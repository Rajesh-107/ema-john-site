import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Shipment.css';


const Shipment = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleNameBlur = e =>{
        setName(e.target.value);
    }  

    const handleAddressBlur = e => {
        setAddress(e.target.value);
    }
    const handlePhoneNumberBlur = e =>{
        setPhone(e.target.value);
    }
    const handleCreateUser = e => {
        e.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
    }

    

    return (
        <div className='form-container'>
            <div>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleCreateUser}>
            <div className="input-group">
                <label htmlFor="name">Your Name</label>
                <input onBlur={handleNameBlur} type="text" name="name" id=""  required/>
            </div>
            <div className="input-group">
                <label htmlFor="email">Your Email</label>
                <input value={user?.email} readOnly type="email" name="email" id=""  required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Address</label>
                <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
            </div>
            <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <input onBlur={handlePhoneNumberBlur}  type="text" name="phone" id="" required />
            </div>
            <p style={{color: 'red'}}> {error} </p>
            <input className='form-submit' type="submit" value="Add Shipping" />
            </form>
            </div>
        </div>
    );
};

export default Shipment;

