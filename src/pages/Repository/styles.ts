import styled from 'styled-components';


export const Header = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;

   a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #a8a8b3;
      transition: color 0.2s;

      &:hover {
         color: #666;
      }

      svg {
         margin-right: 4px;
      }
   }
`;

export const RepoInfo = styled.section`
   margin-top: 80px;

   header {
      display: flex;
      align-items: center;

      img {
         width: 120px;
         height: 120px;
         border-radius: 50%
      }

      div {
         margin-left: 25px;

         strong {
            font-size: 36px;
            color: #3d3d4d;
         }

         p {
            font-size: 18px;
            color: #737380;
            margin-top: 4px;
         }
      }
   }

   ul {
      display: flex;
      list-style: none;
      margin-top: 40px;

      li {
         & + li {
            margin-left: 80px;
         }

         strong {
            display: block;
            font-size: 36px;
            color: #3d3d4d;
         }

         span {
            display: block;
            margin-top: 4px;
            color: #6c6c80;
         }
      }
   }
`;

export const Issues = styled.div`
   margin: 80px 0;
   max-height: 500px;
   overflow-y: auto;
   overflow-x: hidden;

   a {
      background-color: #fff;
      border-radius: 5px;
      padding: 20px;
      margin-right: 20px;
      margin-left: 20px;
      display: block;
      text-decoration: none;

      display: flex;
      align-items: center;
      transition: transform .2s;

      & + a {
         margin-top: 15px;
      }

      &:hover {
         transform: translateX(10px);
      }

      div {
         flex: 1;
         margin: 0 15px;

         strong {
            font-size: 20px;
            color: #3d3d3d;
         }
         
         p {
            font-size: 18px;
            color: #a8a8d3;
            margin-top: 4px;
         }
      }

      svg {
         margin-left: auto;
         color: #cbcbd6;
      }
   }
`;
