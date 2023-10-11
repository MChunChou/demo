/* eslint-disable */
import React, {useState, useEffect, useRef} from 'react';

const ROW_HEIGHT = 50;
const ITEM_COUNT = 100000;
const CONTAINER_HEIGHT = 500;

const VirtualizedList = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const containerRef = useRef(null);
  const itemContainerRef = useRef(null);

  const handleScroll = () => {
    const container = containerRef.current;
    const itemContainer = itemContainerRef.current;
    if (!container || !itemContainer) {
      return;
    }

    const scrollTop = container.scrollTop;
    const visibleStartIndex = Math.floor(scrollTop / ROW_HEIGHT);
    const visibleEndIndex = visibleStartIndex + Math.ceil(CONTAINER_HEIGHT / ROW_HEIGHT);
    setStartIndex(visibleStartIndex);
    setEndIndex(visibleEndIndex);
    itemContainer.style.transform = `translate3d(0, ${visibleStartIndex * ROW_HEIGHT}px, 0)`;
  };

  useEffect(() => {
    handleScroll();
  }, []);

  const items = new Array(ITEM_COUNT).fill(null).map((_, i) => `Item ${i}`);

  return (
    <div
      ref={containerRef}
      style={{height: `${CONTAINER_HEIGHT}px`, overflow: 'auto'}}
      onScroll={handleScroll}
    >
      <div ref={itemContainerRef} style={{height: `${ITEM_COUNT * ROW_HEIGHT}px`, position: 'relative'}}>
        {items.slice(startIndex, endIndex).map((item, index) => (
          <div
            key={startIndex + index}
            style={{height: `${ROW_HEIGHT}px`, position: 'absolute', top: `${index * ROW_HEIGHT}px`, left: 0, right: 0}}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualizedList;
