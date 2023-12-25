async function getDatas() {
    const response = await fetch("./../../data/photographers.json");
    const photographers = await response.json();
    return photographers;
}

export {getDatas};




