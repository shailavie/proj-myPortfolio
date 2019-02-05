'use strict';


// Projects 

var gProjs = [
    {
        id: getRandId(6),
        name: 'Rick and Morty',
        title: 'A memory game that will blow your mind',
        desc: 'Coding Academy Course Entery Task',
        labels:  ['fun', 'memory', 'game', 'rick', 'morty'],
        imgCover: 'img/portfolio/rickAndMorty.png',
        publishedAt: '2018-10-23',
        link : 'https://shailavie.github.io/proj-rickAndMorty/'
    },
    {
        id: getRandId(6),
        name: 'Book Store',
        title: 'A book store with randomly generated content',
        desc: 'a CRUDL task featuring randomly generated books',
        labels: ['crud', 'crudl', 'create', 'read', 'update', 'delete', 'list'],
        imgCover: 'img/portfolio/bookStore.png',
        publishedAt: '2019-02-04',
        link : 'https://shailavie.github.io/proj-bookStore/'
    },
    {
        id: getRandId(6),
        name: 'Game of Life',
        title: 'An interactive simulation of Conway\'s Game of Life',
        desc: 'A visual simulator of Conway\'s Game of Life',
        labels: ['game of life', 'simulator'],
        imgCover: 'img/portfolio/gameOfLife.png',
        publishedAt: '2019-01-23',
        link: 'https://shailavie.github.io/proj-gameOfLife/'
    },
    {
        id: getRandId(6),
        name: 'Pacman',
        title: 'Same old Pacman, written in simple JS/html/css',
        desc: 'The old arcade game in vanialla JS',
        labels: ['pacman', 'js'],
        imgCover: 'img/portfolio/pacman.png',
        publishedAt: '2019-01-22',
        link : 'https://shailavie.github.io/proj-pacman/'
    },
    {
        id: getRandId(6),
        name: 'Beat the Bender',
        title: 'Beat Bender at the Guess Me Game or buy him a beer',
        desc: 'A binary tree task in the form of a \'Guess Me game\', featuring Futurama\'s Bender',
        labels: ['guess', 'me', 'bender', 'binary', 'tree', 'game'],
        imgCover: 'img/portfolio/beatTheBender.png',
        publishedAt: '2019-02-02',
        link : 'https://shailavie.github.io/proj-guessMe/'
    },
    {
        id: getRandId(6),
        name: 'Mine Sweeper',
        title: 'The classic Mine Sweeper game',
        desc: 'My version of the classic mine-finding game. Search tiles to uncover clues and figure out where all the mines are',
        labels: ['minesweeper', 'mine', 'sweeper', 'js', 'classic', 'windows', 'game'],
        imgCover: 'img/portfolio/minesweeper.png',
        publishedAt: '2019-01-29',
        link : 'https://shailavie.github.io/proj-minesweeper/'
    }
    ]
    
    
    function getProjsForDisplay() {
      return gProjs;
    }
    
    function getProjById(projId){
      return gProjs.find(function(proj){
        return proj.id === projId;
      })
    }
    
