import React from 'react';

import Heading from '../../atoms/Heading/Heading';
import FocusBox from '../../molecules/FocusBox/FocusBox';
import Subscription from '../../molecules/Subscription/Subscription';

type State = any;

/**
 * Status: *should be deleted*.
 * Category: FocusBox
 *
 */
export default class FocusSubscription extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'isExpanded' does not exist on type 'Read... Remove this comment to see the full error message
      isExpanded: this.props.isExpanded ? this.props.isExpanded : false,
    };

    this.subscriptionContainerClick = this.subscriptionContainerClick.bind(this);
    this.closeSubscriptionClick = this.closeSubscriptionClick.bind(this);
  }
  subscriptionContainerClick() {
    if (!this.state.isExpanded) {
      this.setState({ isExpanded: true });
    }
  }
  closeSubscriptionClick(e: any) {
    e.stopPropagation();
    this.setState({ isExpanded: false });
  }
  render() {
    return (
      <div className="focus-subscription">
        <FocusBox>
          <div className="focus-subscription__main">
            <Subscription
              name="SMART Foobar"
              id="smartFoobar"
              dataAmount={1}
              dataUnit="GB"
              price={249}
              color="green"
              isStandalone={true}
            />

            <div className="focus-subscription__main-content">
              <Heading level={2} text="Kari Nordmann" className="focus-subscription__heading" />
              <dl className="description-list">
                <dt className="description-list__term">Telefonnummer:</dt>
                <dd className="description-list__details">9876 5432</dd>

                <dt className="description-list__term">Avtaletid:</dt>
                <dd className="description-list__details">01.01.2017 - 01.01.2018</dd>
              </dl>

              <ul className="list list--links">
                <li className="list__item">
                  <a className="list__link" href="#" target="_self">
                    SIM, PIN og PUK
                  </a>
                </li>
                <li className="list__item">
                  <a className="list__link" href="#" target="_self">
                    Sperringer
                  </a>
                </li>
                <li className="list__item">
                  <a className="list__link" href="#" target="_self">
                    Sjekk ditt forbruk
                  </a>
                </li>
                <li className="list__item">
                  <a className="list__link" href="#" target="_self">
                    Dine fakturaer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <section className="accordion accordion--open">
            <h3 className="accordion__header heading heading--level-3">
              <button
                className="accordion__header-button"
                aria-expanded="true"
                aria-controls="focus-subscription-accordion"
              >
                Om abonnement
              </button>
            </h3>
            <div className="accordion__panel" id="focus-subscription-accordion">
              <h4 className="heading heading--level-4">Skanning, texting og MMS</h4>
              <p>
                Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the
                world has never seen. Does everybody know that pig named Lorem Ipsum? She&#39;s a disgusting pig, right?
              </p>
              <h4 className="heading heading--level-4">Utland</h4>
              <p>
                We have so many things that we have to do better... and certainly ipsum is one of them. Despite the
                constant negative ipsum covfefe. Lorem Ipsum is the single greatest threat. We are not - we are not
                keeping up with other websites.
              </p>
            </div>
          </section>
        </FocusBox>
      </div>
    );
  }
}
