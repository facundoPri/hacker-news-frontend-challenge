import useSWRInfinite from "swr/infinite";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data.hits);

const getKey = (pageIndex, previousPageData, selectedNews, pageSize) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end
  return `https://hn.algolia.com/api/v1/search_by_date?query=${selectedNews}&hitsPerPage=${pageSize}&page=${pageIndex}`;
};

export const useNews = (selectedNews: string) => {
  const PAGE_SIZE = 10;

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (...args) => getKey(...args, selectedNews, PAGE_SIZE),
    fetcher
  );

  const news = data ? [].concat(...data) : [];
  console.log(data);
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = false;
  const isRefreshing = isValidating && data && data.length === size;

  return {
    news,
    data,
    isLoadingInitialData,
    isLoadingMore,
    isEmpty,
    isReachingEnd,
    isRefreshing,
    size,
    setSize,
  };
};
