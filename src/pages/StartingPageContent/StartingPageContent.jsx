import { Link } from 'react-router-dom';
import classes from './StartingPageContent.module.css';

function StartingPageContent() {
  return (
    <div>
      <section className={classes.starting}>

        <div className={classes.about}>
          {/* <h2>About Us!</h2> */}
          <h2>A Complete Garage Management System</h2>
          <p>We are In The Business Of Helping You Start Your Business</p>

          {/* <Link to='/auth'>Get Started</Link> */}
          <Link to="/auth">
            <button type="button" className={classes.btn}>Get Started</button>
          </Link>
        </div>

        {/* <h1>Welcome on Board!</h1> */}
      </section>
      {/* <section>
<div className={classes.about}>
<h2>About Us!</h2>
<h1 className={classes.heading}>
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
        </h1>
<p>Automotive is a web application for garage management.
   Automotive is the best software for managing your garage job card, estimate, invoice,
    income, expenses, inventory sell and buys parts and customer interactions</p>
</div>
</section> */}
    </div>
  );
}

export default StartingPageContent;
