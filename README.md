# GitHub Cards
A simple projects card visualizer made for vanilla js.

## How to use?

Clone the repo:\
`git clone https://github.com/UsboKirishima/github-cards.git && cd github-cards`

Create the index.html file:\
`touch index.html`

Import base code: 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Github Cards</title>
</head>
<body onload="github_cards('UsboKirishima')"><!--In the tag body add the propriety 'onload="github_cards('github_username')"'-->
    <!--Define div with "github-cards" id-->
    <div id="github-cards"></div>
    <!--Import library-->
    <script src="./lib/gh-cards.js"></script>
</body>
</html>
```

Insert your gh name in the function argument:
```html
<body onload="github_cards('MyGithubName')"></body>
```

Create github-cards div:
```html
<div id="github-cards"></div>
```
Import the library: 
```html
<script src="./lib/gh-cards.js">
```