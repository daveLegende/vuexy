import { CoreMenu } from '@core/types';

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  {
    id: 'tournois',
    title: 'Tournois',
    // translate: 'MENU.TOURNOIS',
    type: 'item',
    icon: 'award',
    url: 'tournois'
  },
  {
    id: 'teams',
    title: 'Équipes',
    // translate: 'MENU.TEAMS',
    type: 'item',
    icon: 'users',
    url: 'teams'
  },
  {
    id: 'matchs',
    title: 'Matchs',
    // translate: 'MENU.MATCHS',
    type: 'collapsible', // Permet d'avoir un sous-menu
    icon: 'calendar',
    children: [
      {
        id: 'matchs-en-cours',
        title: 'En cours',
        // translate: 'MENU.MATCHS_EN_COURS',
        type: 'item',
        url: 'matchs/en-cours'
      },
      {
        id: 'matchs-a-venir',
        title: 'À venir',
        // translate: 'MENU.MATCHS_A_VENIR',
        type: 'item',
        url: 'matchs/a-venir'
      },
      {
        id: 'matchs-termines',
        title: 'Terminés',
        // translate: 'MENU.MATCHS_TERMINES',
        type: 'item',
        url: 'matchs/termines'
      }
    ]
  },
  {
    id: 'users',
    title: 'Utilisateurs',
    // translate: 'MENU.USERS',
    type: 'item',
    icon: 'user',
    url: 'users'
  },
  {
    id: 'gerants',
    title: 'Gérants',
    // translate: 'MENU.GERANTS',
    type: 'item',
    icon: 'briefcase',
    url: 'gerants'
  },
  {
    id: 'tickets',
    title: 'Tickets',
    // translate: 'MENU.TICKETS',
    type: 'item',
    icon: 'tickets',
    url: 'tickets'
  },
  {
    id: 'poules',
    title: 'Poules',
    // translate: 'MENU.POULES',
    type: 'item',
    icon: 'layers',
    url: 'poules'
  },
  {
    id: 'transactions',
    title: 'Transactions',
    // translate: 'MENU.TRANSACTIONS',
    type: 'item',
    icon: 'dollar-sign',
    url: 'transactions'
  }
];
