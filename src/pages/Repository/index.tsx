import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useParams, Link } from 'react-router-dom';

import api from '../../services/api';
import logo from '../../assets/logo.svg';

import { Header, RepoInfo, Issues } from './styles';


interface RepoParams {
   name: string;
}

interface Repo {
   full_name: string;
   description: string;
   stargazers_count: number;
   forks_count: number;
   open_issues_count: number;
   owner: 
   {
      login: string;
      avatar_url: string;
   }
}

interface Issue {
   id: number;
   title: string;
   author: string;
   html_url: string;
   use: {
      login: string;
   }
}

const Repository: React.FC = () => {
   const { name } = useParams<RepoParams>();

   const [repo, setRepo] = useState<Repo | null>(null);
   const [issues, setIssues] = useState<Issue[]>([]);


   useEffect(() => 
   {
      const load = async () => {
         api.get(`repos/${name}`).then(response => {
            setRepo(response.data);
         });
         api.get(`repos/${name}/issues`).then(response => {
            setIssues(response.data);
         });
      }

      load();
   },
   [name]);
 
   return (
      <React.Fragment>
         <Header>
            <img src={logo}/>
            <Link to="/">
               <FiChevronLeft size={20}/>
               Voltar
            </Link>
         </Header>

         { repo && (
            <RepoInfo>
               <header>
                  <img src={repo.owner.avatar_url} alt=""/>
                  <div>
                     <strong>{repo.full_name}</strong>
                     <p>{repo.description}</p>
                  </div>
               </header>
               <ul>
                  <li>
                     <strong>{repo.stargazers_count}</strong>
                     <span>stars</span>
                  </li>
                  <li>
                     <strong>{repo.forks_count}</strong>
                     <span>forks</span>
                  </li>
                  <li>
                     <strong>{repo.open_issues_count}</strong>
                     <span>issues</span>
                  </li>
               </ul>
            </RepoInfo>
         ) }

         <Issues>
            { issues.map(issue => {
               <a key={issue.id} href={issue.html_url} target="_blank">
                  <div>
                     <strong>{issue.title}</strong>
                     <p>{issue.author}</p>
                  </div>
               <FiChevronRight size={20}/>
               </a>
            }) }
         </Issues>
      </React.Fragment>
   )
};


export default Repository;
