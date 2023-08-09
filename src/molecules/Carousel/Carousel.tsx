import React, { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
import cn from 'classnames';

import HardwareProductBox from '../HardwareProductBox';
import { Icon } from '../../atoms/Icon';
import { HardwareProductProps } from '../HardwareProductBox/HardwareProductBox';

interface CarouselProps {
  items: HardwareProductProps[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }: CarouselProps) => {
  type CarouselType = { [key in number]: HardwareProductProps[] } | null;
  const MIN_SWIPE_THRESHOLD = 100;

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
    if (width > 770) return 2;
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
    setTouchMoveX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const touchDistance = touchMoveX - touchStartX;
    if (Math.abs(touchDistance) < MIN_SWIPE_THRESHOLD) {
      return;
    } else if (touchDistance < MIN_SWIPE_THRESHOLD) {
      handlePageChange(false);
    } else if (touchDistance > MIN_SWIPE_THRESHOLD) {
      handlePageChange(true);
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
          className={cn('arrow-container', { 'arrow-container--hidden': currentPage === 1 })}
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
                  <HardwareProductBox key={item.name + item.brand + index} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className={cn('arrow-container', { 'arrow-container--hidden': currentPage === totalPages })}
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