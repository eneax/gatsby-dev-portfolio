import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* dark shades of primary color*/
    /* --clr-primary-1: hsl(43, 86%, 17%); */
    --clr-primary-1: hsl(184, 91%, 17%);
    --clr-primary-2: hsl(185, 84%, 25%);
    --clr-primary-3: hsl(185, 81%, 29%);
    --clr-primary-4: hsl(184, 77%, 34%);
    --clr-primary-5: #2caeba;
    /* lighter shades of primary color */
    --clr-primary-6: hsl(185, 57%, 50%);
    --clr-primary-7: hsl(184, 65%, 59%);
    --clr-primary-8: hsl(184, 80%, 74%);
    --clr-primary-9: hsl(185, 94%, 87%);
    --clr-primary-10: hsl(186, 100%, 94%);
    /* darkest grey - used for headings */
    --clr-grey-1: hsl(209, 61%, 16%);
    --clr-grey-3: hsl(209, 34%, 30%);
    --clr-grey-4: hsl(209, 28%, 39%);
    /* grey used for paragraphs */
    --clr-grey-5: hsl(210, 22%, 49%);
    --clr-grey-8: hsl(210, 31%, 80%);
    --clr-grey-9: hsl(212, 33%, 89%);
    --clr-grey-10: hsl(210, 36%, 96%);
    --clr-green-dark: hsl(125, 67%, 35%);
    --clr-red-dark: hsl(360, 67%, 44%);
    --clr-red-light: hsl(360, 71%, 66%);
    --clr-white: #fff;
    --ff-primary: 'Roboto', sans-serif;
    --ff-secondary: 'Open Sans', sans-serif;
    --transition: all 0.3s linear;
    --spacing: 0.2rem;
    --radius: 0.25rem;
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    --max-width: 1170px;
    --fixed-width: 700px;
  }

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: var(--ff-secondary);
    background: var(--clr-white);
    color: var(--clr-grey-1);
    line-height: 1.5;
    font-size: 0.875rem;
    margin-top: 5rem;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
    font-family: var(--ff-primary);
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 0.875rem;
  }
  p {
    margin-bottom: 1.25rem;
    color: var(--clr-grey-3);
  }
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1rem;
    }
    body {
      font-size: 1rem;
    }
    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }

  .btn {
    text-transform: uppercase;
    background: var(--clr-primary-5);
    color: var(--clr-primary-9);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 700;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
  }
  .btn:hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-8);
  }
  .center-btn {
    display: block;
    width: 12rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
  
  
  .section {
    padding: 5rem 0;
  }
  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  @media screen and (min-width: 992px) {
    .section-center {
      width: 95vw;
    }
  }

  .underline {
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background: var(--clr-primary-5);
    margin-left: auto;
    margin-right: auto;
  }
  .section-title {
    margin-bottom: 4rem;
    text-align: center;
  }
  .bg-grey {
    background: var(--clr-grey-10);
  }

  /* pages */
  .blog-template,
  .projects-page,
  .blog-page,
  .error-page,
  .about-page,
  .contact-page {
    background: var(--clr-grey-10);
    min-height: calc(100vh - 5rem - 9rem);
  }
`;

export default GlobalStyle;
