import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* primary color */
    --clr-primary-1: hsl(195, 38%, 28%);
    --clr-primary-2: hsl(195, 39%, 40%);
    --clr-primary-3: hsl(195, 39%, 52%);
    --clr-primary-4: hsl(195, 39%, 68%);
    --clr-primary-5: hsl(195, 39%, 80%);
    --clr-primary-6: hsl(195, 40%, 96%);
    /* secondary color */
    --clr-secondary-1: hsl(170, 61%, 28%);
    --clr-secondary-2: hsl(170, 61%, 40%);
    --clr-secondary-3: hsl(170, 61%, 56%);
    --clr-secondary-4: hsl(170, 61%, 72%);
    --clr-secondary-5: hsl(170, 61%, 88%);
    --clr-secondary-6: hsl(170, 60%, 96%);
    /* extra colors */
    --clr-info-1: hsl(27, 87%, 67%);
    --clr-warning-1: hsl(43, 74%, 66%);
    --clr-danger-1: hsl(12, 76%, 61%);
    --clr-success: hsl(125, 67%, 35%);
    --clr-white: #fff;
    --clr-dark: #222;
    /* fonts */
    --ff-primary: 'Roboto', sans-serif;
    --ff-secondary: 'Open Sans', sans-serif;
    /* constant variables */
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
    color: var(--clr-dark);
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
    color: var(--clr-dark);
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
    background: var(--clr-secondary-5);
    color: var(--clr-dark);
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
    color: var(--clr-dark);
    background: var(--clr-secondary-3);
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
    background: var(--clr-info-1);
    margin-left: auto;
    margin-right: auto;
  }

  .section-title {
    margin-bottom: 4rem;
    text-align: center;
  }

  .bg-primary {
    background: var(--clr-primary-6);
  }

  /* pages */
  .blog-template,
  .projects-page,
  .blog-page,
  .error-page,
  .about-page,
  .contact-page {
    background: var(--clr-secondary-6);
    min-height: calc(100vh - 5rem - 9rem);
  }
`;

export default GlobalStyle;
