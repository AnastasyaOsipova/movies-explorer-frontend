import React from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props){

    const [value, setValue] = React.useState('');

    function handleChange(e) {
    setValue(e.target.value);
    }

    function handleClear() {
    setValue('');
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onSearchMovies(value);
    }


    return(
        <section className='search-form'>
            <form className='search-form__container' onSubmit={handleSubmit}>
            <input 
                required
                type="text"
                name="keyWord"
                value={value}
                onChange={handleChange}
                //onClear={handleClear}
                placeholder="Фильм"
                id='search-input'
                className='search-form__input'
                maxLength="40"/>
            <button type='submit' className='search-form__submit-button'>
                Поиск
            </button>
            </form>
            <FilterCheckbox isSelected={props.isSelected}
                            searchShortFilms={props.searchShortFilms}
                            searchAllFilms={props.searchAllFilms}
                            
                            />
        </section>
    )
}

export default SearchForm;