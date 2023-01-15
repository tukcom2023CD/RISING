import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { ChatMessage } from "page/QuesChatPage";

function useFetch(query: string, page: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState<ChatMessage[]>([]);

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      await axios.get<ChatMessage[]>('http://localhost:8080').then(res => {
        setList((prev: any[]) => [...prev, ...res.data]);
      });
      setLoading(false);
    } catch (err: any) {
      setError(err);
    }
  }, [query, page]);

  useEffect(() => {
    sendQuery();
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default useFetch;