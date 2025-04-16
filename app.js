const jokes = document.querySelector('#jokes');
const btn = document.querySelector('#btn-pesan');


const addjoke = async()=> {
    const jokeText = await getJokes();
    const newLI = document.createElement('li');


    newLI.append(jokeText); 
    jokes.appendChild(newLI);
};






const getJokes = async() => {
    try {
        const config = {
            headers: {
                Accept: 'application/json',
            },
        };


    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
    
    
    }catch (error){

        return 'No jokes available!';
    }

};

button.addEventListener('click', addjoke);

