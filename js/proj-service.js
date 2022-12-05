'use strict'

const gProjects = [
    {
        id: 'chess',
        name: 'Chess',
        title: 'Better push those boxes',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: 'projs/chess',
        publishedAt: 1448693940000,
        labels: ['Matrixes', 'keyboard events'],
    },
    {
        id: 'minesweeper',
        name: 'Minesweeper',
        title: 'Better push those boxes',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: 'projs/minesweeper',
        publishedAt: 1448693940000,
        labels: ['Matrixes', 'Recursion', 'UI/UX'],
    },
    {
        id: 'pokerhouse',
        name: 'PokerHouse',
        title: 'Better push those boxes',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: 'projs/pokerhouse',
        publishedAt: 1448693940000,
        labels: ['Bootstrap'],
    },
    {
        id: 'pacman',
        name: 'Pacman',
        title: 'Better push those boxes',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: 'projs/chess',
        publishedAt: 1448693940000,
        labels: ['Matrixes', 'keyboard events'],
    },
    {
        id: 'pixelperfectdesign',
        name: 'Pixel Perfect Design',
        title: 'Better push those boxes',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: 'projs/minesweeper',
        publishedAt: 1448693940000,
        labels: ['HTML', 'CSS'],
    },
    {
        id: 'bookshop',
        name: 'Poker Bookshop',
        title: 'Better push those boxes',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: 'projs/pokerhouse',
        publishedAt: 1448693940000,
        labels: ['MVC', 'CRUD', 'UI/UX'],
    },
]

function getProjects() {
    return gProjects
}

function getProject(id) {
    return gProjects.find(project => project.id === id)
}
