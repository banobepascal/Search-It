const search = document.querySelector('#inputBox');
const matchList = document.querySelector('#result');

//search states.json and filter it
const searchStates = async searchText => {
    const res = await fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json');
    const states = await res.json();

    // get matches to current text input
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex) || state.abbr.match(regex); 
    });

    if (searchText.length === 0) {
        matches = [];
    }

    outputHtml(matches);
};

// show results in html
const outputHtml = matches => {
    if(matches.length > 0){
      const html = matches.map(match => `
       <div>
       <h3> city: ${match.city} </h3>
       <h4>state: ${match.state}</h4>
       <h5>growth_from_2000_to_2013: ${match.growth_from_2000_to_2013}</h5></div>
      `).join('');
      
      matchList.innerHTML = html;
    }
}

search.addEventListener('input', () => searchStates(search.value));
