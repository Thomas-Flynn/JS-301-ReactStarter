import React from 'react';
import Home from './Home';
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
import JSXRules from '../concepts/JSXRules';
import PropsDemo from '../PropsDemo';
import ClassComponentDemo from '../ClassComponentDemo';
import LifeCycles from '../LifeCycles';
import TimePiecesApp from '../apps/TimePiecesApp';
import NytApp from '../apps/nyt-app/NytApp';
import ReactConceptsApp from '../apps/concept-list-app/ReactConceptsApp';
import MovieSearchApp from '../apps/movie-search-app/MovieApp';
import YouTubeSearchApp from '../apps/YouTubeApi/Video';
import GithubCardApp from '../apps/github-api-app/GithubApp';
import BitcoinApp from '../apps/bitcoin-app/BitcoinApp';
import GithubCardAppWithSearch from '../apps/github-api-app/GithubCardAppWithSearch';
import Resources from './Resources';

export const routes = [
    {
      path: '/' || '/home',
      exact: true,
      sidebar: () => <div>Home</div>,
      main: () => <Home />
    },
    {
      path: '/functionalcomponent',
      exact: true,
      main: () => < FunctionalComponentDemo />
      },
    {
      path: '/jsxrules',
      exact: true,
      main: () => < JSXRules />
      },
    {
      path: '/classcomponent',
      exact: true,
      main: () => < ClassComponentDemo />
      },
    {
      path: '/propsdemo',
      exact: true,
      main: () => < PropsDemo />
      },
    {
      path: '/lifecycles',
      exact: true,
      main: () => < LifeCycles />
      },
    {
      path: '/timer',
      exact: true,
      main: () => < TimePiecesApp />
    },
    {
      path: '/nytimes',
      exact: true,
      main: () => < NytApp />
    },
    {
      path: '/reactconceptslist',
      exact: true,
      main: () => <ReactConceptsApp />
    },
    {
      path: '/movie',
      exact: true,
      main: () => <MovieSearchApp />
    },
    {
      path: '/video',
      exact: true,
      main: () => <YouTubeSearchApp />
    },
    {
      path: '/githubsimpleapi',
      exact: true,
      main: () => <div><GithubCardApp /><br /><GithubCardAppWithSearch /></div>
    },
    {
      path: '/bitcoinapp',
      exact: true,
      main: () => <BitcoinApp />
    },
    {
      path: '/resources',
      exact: true,
      sidebar: () => <div>Works Cited</div>,
      main: () => <Resources />
    }
  ]