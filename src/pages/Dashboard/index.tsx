import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories, Error } from './styles';
import logo from '../../assets/logo.svg';

import api from '../../services/api';


interface Repo {
   full_name: string;
   description: string;
   owner: 
   {
      login: string;
      avatar_url: string;
   }
}

const Dashboard: React.FC = () => {
   const [newRepo, setNewRepo] = useState('');
   const [error, setError] = useState('');
   const [repos, setRepos] = useState<Repo[]>(() =>
   {
      const storagedRepos = localStorage.getItem('@gitexpy:repos');
      if (storagedRepos) {
         return JSON.parse(storagedRepos);
      }
      else {
         return [];
      }
   });


   useEffect(() => {
      localStorage.setItem('@gitexpy:repos', JSON.stringify(repos));
   },
   [repos]);

   const add = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();

      if (!newRepo) 
      {
         setError('Digite o autor/nome do respositório');
         return;
      }

      try {
         const response = await api.get<Repo>(`repos/${newRepo}`);
         const repo = response.data;

         setRepos([...repos, repo]);
         setNewRepo('');
         setError('');
      }
      catch (err) {
         setError('Erro na busca do repositório');
      }
   };

   return (
      <React.Fragment>
         <img src={logo} />
         <Title>Dashboard</Title>

         <Form hasError={!!error} onSubmit={add}>
            <input 
               placeholder="Repositório"
               onChange={e => setNewRepo(e.target.value)}
            />
            <button type="submit">Pesquisar</button>
         </Form>

         { error && <Error>{error}</Error> }

         <Repositories>
            {repos.map(repo => (
               <Link key={repo.full_name} to={`/repository/${repo.full_name}`}>
                  <img src={repo.owner.avatar_url}/>
                  <div>
                     <strong>{repo.full_name}</strong>
                     <p>{repo.description}</p>
                  </div>
                  <FiChevronRight size={20}/>
               </Link>
            ))} 
         </Repositories>
      </React.Fragment>
   );
}


export default Dashboard;
