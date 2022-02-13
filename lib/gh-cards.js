async function github_cards(user) {
    const github_cards_div = document.getElementById('github-cards');

    if(!github_cards_div) console.error('Missing \'github-cards\' div id.');
    if(user.typeof !== 'string') console.error('Invalid user');

    const fetch_repos = fetch(`https://api.github.com/users/${user}/repos`);
    const repos_commits = (await fetch_repos).json();
    (await repos_commits).forEach(async ({ id, name, full_name, description, url, language, stargazers_count }) => {
        github_cards_div.innerHTML += `
        <section id="card">
            <div class="card-components">
                <br>
                <a href="${url}" id="repo-title">${full_name}</a>
                <span>${stargazers_count}★</span>
                <div class="langs">
                    <span>${language}</span>
                </div>
                <div class="desc">
                <h2>${description}</h2>
                </div>
            </div>
        </section>

        <style>
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
/*・*/
:root {
    --base: #232136;
    --surface: #fffaf3;
    --overlay: #393552;
    --muted: #9893a5;
    --subtle: #797593;
    --text: #575279;
    --love: #b4637a;
    --gold: #ea9d34;
    --rose: #d7827e;
    --pine: #286983;
    --foam: #56949f;
    --iris: #907aa9;
    --hightlight: #44415a;
    --low: #2a283e;
    --love: #eb6f92;
}



.container {
    margin: auto;
    
}



h1 {
    color: #9893a5;
    font-family: Quicksand, sans-serif;
    /*margin-top: 20px;*/
    font-size: 24px;
    margin: 0;
}

#links {
    margin-top: 30px;
}

p {
    margin: 10px;
    color: #9ccfd8;
    font-family: Quicksand, sans-serif;
}

a {
    color: #9893a5;
    font-family: Quicksand, sans-serif;
    margin: 20px;
    text-decoration: none;
    transition: 0.3s;
    font-size: 20px;
}

a:hover {
    transition: 0.3s;
    opacity: 80%;
}

.projects-container {
    margin-top: 5%;
}

#card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 400px;
    min-height: 100px;
    margin: auto;
    text-align: left;
    background-color: var(--low);
    border-radius: 8px;
    display: block;
    margin-top: 30px;
}

.card-components {
    margin: 0;
}

br {
    margin: 0;
}

span {
    position: relative;
    margin: 0;
}

.langs {
    float: right;
    margin-top: 40px;
    margin-right: 15px;
}

h2 {
    color: #9893a5;
    font-family: Quicksand, sans-serif;
    margin: 20px;
    text-decoration: none;
    transition: 0.3s;
    font-size: 14px;
    font-weight: lighter;
}

span {
    color: #9ccfd8;
    font-family: Quicksand, sans-serif;
}
        </style>
        `
    })
}