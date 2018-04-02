import React from 'react';
import GithubCardList from './GithubCardList';
import { GithubUserData } from './github_user';

const GithubApp = function () {
    return (
        <div className="main">
            <div className="mainDiv">
                <GithubCardList cards={GithubUserData}/>
            </div>
        </div>
    )
}

export default GithubApp;