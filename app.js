const search = document.getElementById('inputBox');
const matchList = document.getElementById('result');

//search states.json and filter it
const searchStates = async searchText => {
    const res = await fetch('city.json');
    const states = await res.json();

    // get matches to current text input
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.city.match(regex) || state.state.match(regex); 
    });

    if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = '';
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
       <h5>population: ${match.population}</h5>
       <h6>growth_from_2000_to_2013: ${match.growth_from_2000_to_2013}</h6></div>
      `).join('');
      
      matchList.innerHTML = html;
    }
}

search.addEventListener('input', () => searchStates(search.value));
