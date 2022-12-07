import React from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props){

    const [value, setValue] = React.useState('');

    React.useEffect(() =>{const keyWord=localStorage.getItem('keyWord');
                            if(!props.isSaved && keyWord) {
                                setValue(keyWord) 
                            }}
    ,[])

    function handleChange(e) {
    setValue(e.target.value);
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