import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCpq9koxa25i8PVXi3KTog7GFw4ZJ2JmOo';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('.container'));