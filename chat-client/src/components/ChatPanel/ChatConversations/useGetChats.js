import { useEffect, useState } from 'react'
import axios from 'axios';
export default function useGetChats(pageNumber) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [chats, setChats] = useState([]);
    const [hasMore, setHasMore] = useState(false);


    useEffect(() => {
        setLoading(true);
        setError(false);
        axios({
            method: 'GET',
            url: "http://localhost:8080/api/chats",
            params: { _page: pageNumber, _limit: 20 },
        }).then(res => {
            console.log(res);
            setChats(prevChats => {
                return [...res.data.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1), ...prevChats]
            })
            setHasMore(res.data.length > 0)
            setLoading(false)
        }).catch(e => {
            setError(true);
        })

    }, [pageNumber])

    return { loading, error, chats, hasMore };
}
