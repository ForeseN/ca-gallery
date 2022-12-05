'use strict'

const gProjects = [
    {
        id: 'chess',
        name: 'Chess',
        title: 'Better push those boxes',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: 'none',
        publishedAt: 1668686400000,
        labels: ['Matrixes', 'keyboard events'],
    },
    {
        id: 'minesweeper',
        name: 'Minesweeper',
        title: 'Better push those boxes',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: 'https://foresen.github.io/Minesweeper/',
        publishedAt: 1669377600000,
        labels: ['Matrixes', 'Recursion', 'UI/UX'],
    },
    {
        id: 'pokerhouse',
        name: 'PokerHouse',
        title: 'Better push those boxes',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: 'https://foresen.github.io/PokerHouse-Bootstrap/',
        publishedAt: 1670155200000,
        labels: ['Bootstrap'],
    },
    {
        id: 'pacman',
        name: 'Pacman',
        title: 'Better push those boxes',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: 'none',
        publishedAt: 1668945600000,
        labels: ['Matrixes', 'keyboard events'],
    },
    {
        id: 'pixelperfectdesign',
        name: 'Pixel Perfect Design',
        title: 'Better push those boxes',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: 'none',
        publishedAt: 1669636800000,
        labels: ['HTML', 'CSS'],
    },
    {
        id: 'bookshop',
        name: 'Poker Bookshop',
        title: 'Better push those boxes',
        desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: 'https://foresen.github.io/Poker-Bookshop/',
        publishedAt: 1669896000000,
        labels: ['MVC', 'CRUD', 'UI/UX'],
    },
]

function getProjects() {
    return gProjects
}

function getProject(id) {
    return gProjects.find(project => project.id === id)
}
