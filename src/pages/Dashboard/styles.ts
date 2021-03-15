import styled, { css } from 'styled-components';
import { shade } from 'polished';



interface FormProps {
   hasError: boolean;
}

export const Title = styled.h1`
   font-size: 48px;
   color: #3a3a3a;

   margin-top: 80px;
   max-width: 450px;
   line-height: 56px;
`;

export const Form = styled.form<FormProps>`
   margin-top: 40px;
   max-width: 700px;
   display: flex;

   input {
      flex: 1;
      height: 70px;
      padding: 0 25px;
      border: 2px solid #fff;
      border-right: 0;
      border-radius: 5px 0 0 5px;

      ${props => props.hasError && css`
         border-color: #c53030;
      ` }

      &::placeholder {
         color: #a8a8b3;
      }
   }

   button {
      width: 200px;
      height: 70px;
      background-color: #04d361;
      border: 0;
      border-radius: 0 5px 5px 0;
      color: #fff;
      border: 0;
      font-weight: bold;
      transition: background-color 0.2s ease;

      &:hover {
         background-color: ${shade(.2, '#04d361')};
      }
   }
`;

export const Repositories = styled.div`
   margin-top: 80px;
   max-width: 700px;

   a {
      background-color: #fff;
      border-radius: 5px;
      width: 100%;
      padding: 20px;
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

      img {
         width: 64px;
         height: 64px;
         border-radius: 50%;
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

export const Error = styled.span`
   display: block;
   color: #c53030;
   margin-top: 7px;
   margin-left: 2px;
`;
