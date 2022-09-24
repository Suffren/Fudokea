import React, { useState, useEffect, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function useURLParams(getData) {
  const location = useLocation();
  const history = useHistory();

  const [page, setPage] = useState(1);

  useEffect(() => {
    let page;
    if (location.search) {
      const urlParams = new URLSearchParams(location.search);

      if (urlParams.has('page')) {
        const paramPage = params.get('page');
        page = !Number.isNaN(paramPage) && paramPage > 0 ? paramPage : 1;
        setPage(parseInt(page, 10));
      }
    }
  
    getData(page);
  }, [])

  const onPageChange = useCallback(
    event => {
      const page = event.current + 1;
      const params = new URLSearchParams(location.search);

      getData(page);
      setPage(page);

      params.set('page', page);
      history.push({
        pathname: location.pathname,
        search: params.toString(),
      });
    },
    [location],
  );

  return { page, onPageChange }
}