import React from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(){

    const [value, setValue] = React.useState('');

    function handleChange(e) {
    setValue(e.target.value);
    }

  function handleClear() {
    setValue('');
    }

    function handleSubmit(e) {
        e.preventDefault();
    }


    return(
        <div className='search-form'>
            <form className='search-form__container'>
            <input 
                required
                type="text"
                name="search"
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
                onClear={handleClear}
                placeholder="Фильм"
                id='search-input'
                className='search-form__input'
                maxLength="40"/>
            <button type='submit' className='search-form__submit-button'>
                Поиск
            </button>
            </form>
            <FilterCheckbox/>
        </div>
    )
}

export default SearchForm;