document.addEventListener('DOMContentLoaded', async function () {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    try {
        const response = await fetch('https://api.github.com/users/lucasGleyfson');

        if (!response.ok) {
            throw new Error(`Erro ao buscar dados: ${response.status} - ${response.statusText}`);
        }

        const json = await response.json();

        nameElement.innerText = json.name || 'Nome não disponível';
        usernameElement.innerText = json.login || 'Usuário não disponível';
        avatarElement.src = json.avatar_url || '';
        followingElement.innerText = json.following || 0;
        followersElement.innerText = json.followers || 0;
        reposElement.innerText = json.public_repos || 0;
        linkElement.href = json.html_url || '#';
    } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error);
        nameElement.innerText = 'Erro ao carregar dados';
    }
});
