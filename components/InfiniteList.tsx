"use client";
import {
  Fragment,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Spinner from "./Spinner";

type InfiniteListPropsType = {
  page: number;
  totalPages: number;
  total: number;
  onFetchNextPage: () => void;
  // onFetchNextPage: (page: number) => void;
};

function InfiniteList({
	page,
  children,
  total,
  totalPages,
  onFetchNextPage,
}: PropsWithChildren<InfiniteListPropsType>) {
  const loadingRef = useRef(null);

  const obseverCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && page < totalPages) {
        // if intersecting...
        onFetchNextPage();
      }
    },
    [page, totalPages, onFetchNextPage]
  );

  useEffect(() => {
    const loadingEl = loadingRef.current;
    const options = { root: null, rootMargin: "0px", threshold: 1 };

    const observer = new IntersectionObserver(obseverCallback, options);

    if (loadingEl) {
      observer.observe(loadingEl);
    }

    return () => {
      if (loadingEl) observer.unobserve(loadingEl);
    };
  }, [loadingRef, page, obseverCallback]);

  return (
    <Fragment>
      {children}
      <div ref={loadingRef} className="w-full flex justify-center py-10">
        {total > 0 && (
          <Fragment>
            {page < totalPages ? (
              <Spinner />
            ) : (
              <span>Hey there, you have reached to the bottom stop scrolling.</span>
            )}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export default InfiniteList;
