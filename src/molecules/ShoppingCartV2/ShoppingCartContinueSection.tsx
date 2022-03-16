import React from 'react';

interface ShoppingCartContinueSectionProps {
  section: React.ReactNode;
}

export default function ShoppingCartContinueSection({ section }: ShoppingCartContinueSectionProps) {
  return (
    <section className="telia-shopping-cart__section">
      <div className="telia-shopping-cart__section-inner telia-shopping-cart__continue-container">{section}</div>
    </section>
  );
}
