import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import './RegistrationFees.css';
import {EOIButton, RegisterButton} from '@site/src/components/EOIButton';

// export const PaymentGatewayURL = '/registration_closed';

const FeeInfoList = [
  {
    title: 'ALAA Conference Registration',
    description: (
      <>
      <table className='registrationFeeTable'>
          <tr>
              <th>Early Bird registration</th>
              <td>$350.00</td>
          </tr>
          <tr>
              <th>Regular Registration</th>
              <td>$400.00</td>
          </tr>
      </table>
      <p>
      <strong>EARLY BIRD REGISTRATIONS CLOSE on <i>16 May 2025</i></strong>
      </p>
      </>
    ),
  },
  {
    title: 'Gala Dinner',
    description: (
      <>
      <table className='registrationFeeTable'>
          <tr>
              <th>Gala Dinner</th>
              <td>$155.00</td>
          </tr>
      </table>
      <p>
        The Gala dinner will be held on the evening of <strong>3&nbsp;July 2025</strong> at the <b><i>Customs House, Brisbane</i></b>.  </p>
      <p>
        If you have not yet registered for the 
        Gala Dinner please register below.
      </p>
      <p>
        You are welcome to bring a partner to the Gala Dinner but you will need to register your partner separately.
      </p>
      </>
    ),
  },
];

const ButtonInfoList = [
  {
    instructions: (
      <RegisterButton buttonText='Conference and Gala Dinner Registration' />
    )
  }
];

// Used to set up the display of the registration fee information
function FeeInfo({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
      </div>
      <div className='text--justified padding-horiz--md'>
        {description}
      </div>
    </div>
  );
}

// Used to set up the display of the buttons
function ButtonInfo({instructions}) {
  return (
    <div className={clsx('col col--6')}>
      <div className='text--center padding-horiz--md'>
        {instructions}
      </div>
    </div>
  );
}

export function RegistrationFees() {
  return (
    <section className={styles.RFfeatures}>
      <div className="container">
        <div className="RFHeading">
          <h1>Registration Fees</h1>
        </div>
        <div className="row">
          {FeeInfoList.map((props, idx) => (
            <FeeInfo key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Returns the registration buttons
export function RegistrationInstructions() {
  return (
    <section className={styles.RFfeatures}>
      <div className="container">
        <div className="row">
          {ButtonInfoList.map((props, idx) => (
            <ButtonInfo key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
