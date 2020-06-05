import { useEffect, useState } from "react";
import axios from "axios";

export const UseScroll = (query, pageNumber) => {
  useEffect(() => {
    axios({
      method: "GET",
      url: "",
      params: { q: query, page: pageNumber },
    }).then((res) => res.q);
  }, [pageNumber, query]);
};
