import React from 'react';
import './Card.css';

// Plan Icons Component
interface PlanIconsProps {
  planType?: 'Starter' | 'Individual' | 'Teams';
}

const PlanIcons: React.FC<PlanIconsProps> = ({ planType = 'Starter' }) => {
  if (planType === 'Individual') {
    return (
      <div className="plan-icon plan-icon--individual">
        <div className="plan-icon__square plan-icon__square--top-left"></div>
        <div className="plan-icon__square plan-icon__square--bottom-left"></div>
        <div className="plan-icon__square plan-icon__square--top-right"></div>
        <div className="plan-icon__square plan-icon__square--bottom-right"></div>
      </div>
    );
  }
  
  if (planType === 'Teams') {
    return (
      <div className="plan-icon plan-icon--teams">
        <div className="plan-icon__square plan-icon__square--top-left"></div>
        <div className="plan-icon__square plan-icon__square--middle-left"></div>
        <div className="plan-icon__square plan-icon__square--bottom-center"></div>
        <div className="plan-icon__square plan-icon__square--top-center"></div>
        <div className="plan-icon__square plan-icon__square--middle-right"></div>
        <div className="plan-icon__square plan-icon__square--center"></div>
        <div className="plan-icon__square plan-icon__square--bottom-right"></div>
      </div>
    );
  }
  
  return (
    <div className="plan-icon plan-icon--starter">
      <div className="plan-icon__square plan-icon__square--left"></div>
      <div className="plan-icon__square plan-icon__square--right"></div>
    </div>
  );
};

// Card Props Interface
export interface CardProps {
  /**
   * The plan type
   */
  plan?: 'Starter' | 'Individual' | 'Teams';
  /**
   * The plan price
   */
  price?: number;
  /**
   * The plan price per period
   */
  pricePeriod?: string;
  /**
   * Number of seats/users
   */
  seats?: number;
  /**
   * Whether seats can be edited
   */
  canEditSeats?: boolean;
  /**
   * Next billing amount
   */
  nextBillingAmount?: number;
  /**
   * Renewal date
   */
  renewalDate?: string;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Click handler for the action button
   */
  onActionClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  plan = 'Starter',
  price = 0,
  pricePeriod = '/Month',
  seats = 1,
  canEditSeats = false,
  nextBillingAmount = 0,
  renewalDate = 'Sep 07, 2024',
  className = '',
  onActionClick,
}) => {
  const getPlanPrice = () => {
    switch (plan) {
      case 'Individual':
        return 20;
      case 'Teams':
        return 49;
      default:
        return 0;
    }
  };

  const getSeatsText = () => {
    if (plan === 'Teams') {
      return `${seats} Monthly seats`;
    }
    return '1 Monthly seat';
  };

  const getUpgradeText = () => {
    if (plan === 'Starter' || plan === 'Individual') {
      return 'Upgrade to Teams unlock multiple seats';
    }
    return '';
  };

  const getNextBillingAmount = () => {
    if (plan === 'Teams') {
      return price * seats;
    }
    return nextBillingAmount;
  };

  const actualPrice = price || getPlanPrice();
  const actualNextBilling = getNextBillingAmount();

  return (
    <div className={`card ${className}`}>
      <div className="card__container">
        {/* Card Header */}
        <div className="card__header">
          <div className="card__header-title">
            <div className="card__header-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#6d6d6e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 13.2H12.01M8.8 13.2H8.81M15.2 13.2H15.21" stroke="#6d6d6e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="card__header-text">Plan</div>
          </div>
          <div className="card__header-action">
            <button 
              className="card__action-button"
              onClick={onActionClick}
            >
              <span className="card__action-text">Edit</span>
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className="card__body">
          <div className="card__content">
            {/* Plan Info */}
            <div className="card__plan">
              <div className="card__plan-icon">
                <PlanIcons planType={plan} />
              </div>
              <div className="card__plan-name">{plan}</div>
            </div>

            {/* Price Info */}
            <div className="card__price-section">
              <div className="card__price">
                <span className="card__price-currency">$</span>
                <span className="card__price-amount">{actualPrice}</span>
                <span className="card__price-period">{pricePeriod}</span>
              </div>

              {/* Seats Info */}
              <div className="card__seats">
                <div className="card__seats-divider"></div>
                <div className="card__seats-info">
                  <div className="card__seats-count">
                    {plan === 'Teams' ? (
                      <div className="card__seats-teams">
                        <span className="card__seats-multiplier">x</span>
                        <span className="card__seats-number">{seats}</span>
                        <span className="card__seats-text">Monthly seats</span>
                        {canEditSeats && (
                          <button className="card__seats-edit">
                            <span>Edit</span>
                          </button>
                        )}
                      </div>
                    ) : (
                      <>
                        <span className="card__seats-number">1</span>
                        <span className="card__seats-text">Monthly seat</span>
                      </>
                    )}
                  </div>
                  {getUpgradeText() && (
                    <div className="card__seats-upgrade">
                      {getUpgradeText()}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="card__footer">
          <div className="card__footer-left">
            <div className="card__footer-price">
              <span className="card__footer-currency">$</span>
              <span className="card__footer-amount">{actualNextBilling}</span>
            </div>
            <div className="card__footer-label">Next plan bill</div>
          </div>
          <div className="card__footer-right">
            <div className="card__footer-renewal">Renews on</div>
            <div className="card__footer-date">{renewalDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
