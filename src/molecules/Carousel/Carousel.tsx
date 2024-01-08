import React, { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
import cn from 'classnames';

import HardwareProductBox from '../HardwareProductBox';
import { Icon } from '../../atoms/Icon';
import { HardwareProductProps } from '../HardwareProductBox/HardwareProductBox';

type CarouselItem = HardwareProductProps & {
  redirectUrl?: string;
  price?: number;
  priceSuffix?: string;
  priceDescription?: string;
  priceDisclaimerLine1?: string;
  priceDisclaimerLine2?: string;
};

interface CarouselProps {
  items: CarouselItem[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }: CarouselProps) => {
  type CarouselType = { [key in number]: CarouselItem[] } | null;
  const MIN_SWIPE_THRESHOLD = 50;

  const [carousel, setCarousel] = useState<CarouselType>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchMoveX, setTouchMoveX] = useState(0);

  const resolveCarouselSize = useCallback(() => {
    const width = window.innerWidth;
    if (width > 1600) return 4;
    if (width > 1300) return 3;
    if (width >= 370) return 2;
    return 1;
  }, []);

  const updateCarouselSize = useCallback(() => {
    const itemsInPage = resolveCarouselSize();
    setItemsPerPage(itemsInPage);
    const length = items.length;

    if (length > itemsInPage) {
      const maxPages = Math.ceil(length / itemsInPage);
      setTotalPages(maxPages);

      const pages: CarouselType = {};
      for (let i = 0; i < maxPages; i++) {
        const startIndex = i * itemsInPage;
        const lastIndex = Math.min(startIndex + itemsInPage, length);
        pages[i + 1] = items.slice(startIndex, lastIndex);
      }
      setCarousel(pages);
      if (currentPage > totalPages) {
        setCurrentPage(1);
      }
    } else {
      setCarousel({ 1: items });
      setTotalPages(1);
      setCurrentPage(1);
    }
  }, [items, resolveCarouselSize]);

  useEffect(() => {
    updateCarouselSize();
    const handleResize = () => {
      updateCarouselSize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateCarouselSize]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    setTouchMoveX(touchStartX - e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const finishingTouch = e.changedTouches[0].clientX;
    if (touchStartX < finishingTouch - MIN_SWIPE_THRESHOLD) {
      handlePageChange(true);
    } else if (touchStartX > finishingTouch + MIN_SWIPE_THRESHOLD) {
      handlePageChange(false);
    }
    setTouchStartX(0);
    setTouchMoveX(0);
  };

  const handlePageChange = (left: boolean) => {
    if (!(left && currentPage === 1) && !(!left && currentPage === totalPages)) {
      setCurrentPage(left ? currentPage - 1 : currentPage + 1);
    }
  };

  const handlePageBubbleClick = (pageNumber: number) => {
    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPagesIndicator = () => {
    const pagesArray = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }

    if (pagesArray.length === 1) {
      return <></>;
    }

    return (
      <div className="pages-indicator">
        {pagesArray.map((pageNumber) => (
          <span
            key={pageNumber}
            className={cn('page-bubble', {
              'page-bubble--current': pageNumber === currentPage,
            })}
            onClick={() => {
              handlePageBubbleClick(pageNumber);
            }}
          ></span>
        ))}
      </div>
    );
  };

  if (!carousel) return null;

  return (
    <section className="telia-carousel">
      <div className="main-section">
        <div
          className={cn('arrow-container arrow-container--left', { 'arrow-container--hidden': currentPage === 1 })}
          onClick={() => {
            handlePageChange(true);
          }}
        >
          <Icon icon="arrow-small-left" />
        </div>
        <div
          className="slides"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {Object.values(carousel)?.map((currentCarouselPage, index) => (
            <div
              key={index}
              className={cn('slide', { 'slide--active': index + 1 === currentPage })}
              style={{
                opacity: index + 1 === currentPage ? 1 : 0,
                transform: `translateX(calc(-${(currentPage - 1) * 100}% + ${touchMoveX}px))`,
                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
              }}
            >
              <div
                className={cn('slide-items', {
                  'slide-items--center': currentCarouselPage.length < itemsPerPage || itemsPerPage === 1,
                })}
              >
                {currentCarouselPage.map((item, index) => (
                  <a className="product-link" href={item?.redirectUrl}>
                    <HardwareProductBox key={item.name + item.brand + index} {...item}>
                      <div>
                        {item.priceDescription && <div>{item.priceDescription}</div>}
                        {item.price && (
                          <div className="product-price">
                            <div className="price-text">{item.price}</div>
                            <div className="additional-info">
                              <span>,-&nbsp;</span>
                              {item.priceSuffix && <div className="suffix">{item.priceSuffix}</div>}
                            </div>
                          </div>
                        )}
                        {item.priceDisclaimerLine1 && (
                          <div className="hardware-product-box__product-price-disclaimer">
                            {item.priceDisclaimerLine1}
                            {item.priceDisclaimerLine2 && (
                              <>
                                <br />
                                {item.priceDisclaimerLine2}
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    </HardwareProductBox>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className={cn('arrow-container arrow-container--right', {
            'arrow-container--hidden': currentPage === totalPages,
          })}
          onClick={() => {
            handlePageChange(false);
          }}
        >
          <Icon icon="arrow-small-right" />
        </div>
      </div>
      {renderPagesIndicator()}
    </section>
  );
};
