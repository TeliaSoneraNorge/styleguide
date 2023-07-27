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
  const [carousel, setCarousel] = useState<CarouselType>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);

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

  const handleArrowClick = (left: boolean) => {
    const nextPage = left ? currentPage - 1 : currentPage + 1;
    if (nextPage === 0) {
      setCurrentPage(totalPages);
    } else if (nextPage > totalPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(nextPage);
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

  if (!carousel) return;

  return (
    <section className="carousel">
      <div className="main-section">
        {totalPages > 1 && (
          <div
            className="arrow-container"
            onClick={() => {
              handleArrowClick(true);
            }}
          >
            <Icon icon="arrow-small-left" />
          </div>
        )}
        <div className="slides">
          {Object.values(carousel)?.map((currentCarouselPage, index) => (
            <div
              key={index}
              className={cn('slide', { 'slide--active': index + 1 === currentPage })}
              style={{
                opacity: index + 1 === currentPage ? 1 : 0,
                transform: `translateX(-${(currentPage - 1) * 100}%)`,
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
        {totalPages > 1 && (
          <div
            className="arrow-container"
            onClick={() => {
              handleArrowClick(false);
            }}
          >
            <Icon icon="arrow-small-right" />
          </div>
        )}
      </div>
      {renderPagesIndicator()}
    </section>
  );
};
