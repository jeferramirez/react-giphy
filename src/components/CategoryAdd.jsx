import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
const { Search } = Input;


const CategoryAdd = ( {setCategory}) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputValue = (value) => {
        setInputValue(value);
    };
    
    const handlSubmit = (e) => {

        e.preventDefault();
        if (inputValue.trim().length > 2) {
           setCategory( categorias => [ inputValue, ...categorias]);
           setInputValue(''); 
        }

    }

	return (
        <>
        <form onSubmit= {handlSubmit}>
		<div>
        <Search placeholder="Buscar ..." onSearch={handleInputValue} enterButton />
		</div>

        </form>
        </>
	);
};


export default CategoryAdd;

CategoryAdd.propTypes = {
    setCategory : PropTypes.func.isRequired
}

