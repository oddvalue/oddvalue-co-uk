import themes from './colors.json';

(async function () {
    themes.sort(() => 0.5 - Math.random());
    let currentTheme = null;

    const nextTheme = () => {
        const nextTheme = currentTheme + 1;

        if (! themes[nextTheme]) nextTheme = 0;

        return currentTheme = nextTheme;
    }

    const changeTheme = () => {
        const theme = themes[nextTheme()];
        if (Math.round(Math.random())) {
            document.body.style.setProperty('--primary', theme.color_one);
            document.body.style.setProperty('--secondary', theme.color_two);            
        } else {
            document.body.style.setProperty('--primary', theme.color_two);
            document.body.style.setProperty('--secondary', theme.color_one);
        }
    }

    setInterval(() => {
        changeTheme();
    }, 1000);
    changeTheme();  
})();