const search = document.querySelector('#searchit');
const matchList = document.querySelector('#match-list');

//search states.json and filter it
const searchStates = async searchText => {
    const res = await fetch(' ');
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
       
      `)  
    }
}

search.addEventListener('input', () => searchStates(search.value));
