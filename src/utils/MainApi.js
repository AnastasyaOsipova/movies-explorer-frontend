class MainApi {
    constructor(config) {
      this._url = config.url;
      this._headers = config.headers;
    }
  
    _checkResponce(res) {
      return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getSavedMovies() {
      return fetch(`${this._url}movies/`, {
        method: "GET",
        headers: this._headers,
      }).then(this._checkResponce);
    }
  
    saveMovie(data) {
      return fetch(`${this._url}movies/`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify(data),
      }).then(this._checkResponce);
    }

    deleteMovie(movie) {
        return fetch(`${this._url}movies/${movie._id}`, {
          method: "DELETE",
          headers: this._headers,
        }).then(this._checkResponce);
      }
  
    getUserInfoApi() {
      return fetch(`${this._url}users/me/`, {
        method: "GET",
        headers: this._headers,
      }).then(this._checkResponce);
    }
  
    updateUserInfo(name, email) {
      return fetch(`${this._url}users/me/`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({name, email}),
      }).then(this._checkResponce);
    }
  
    changeMovieSaveStatus(movie, isLiked) {
      if (isLiked) {
        return mainApi.deleteMovie(movie);
      } else {
        return mainApi.saveMovie(movie);
      }
    }

    updateToken() {
        this._headers = {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        }
      } 
    }
    
  
   
  
  const mainApi = new MainApi({
    url: "https://api.movies-explorer.molch.nomoredomains.icu/",
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
      },
  });
  
  export default mainApi;
  