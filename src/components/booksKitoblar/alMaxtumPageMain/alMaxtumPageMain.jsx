import { useState } from "react";
import { useInfiniteQuery } from "react-query";

const posts = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
  { id: 3, title: "post 3" },
  { id: 4, title: "post 4" },
  { id: 5, title: "post 5" },
  { id: 6, title: "post 6" },
  { id: 7, title: "post 7" },
  { id: 8, title: "post 8" },
  { id: 9, title: "post 9" },
  { id: 10, title: "post 10" },
  { id: 11, title: "post 11" },
  { id: 12, title: "post 12" },
];

const fetchPost = async (page) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return posts.slice((page - 1) * 2, page * 2);
};

export default function AlMaxtumPageMain() {
  const [titleData, setTitleData] = useState(true);
  const [textData, setTextData] = useState(false);

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    "query",
    async ({ pageParam = 1 }) => {
      const response = await fetchPost(pageParam);
      return response;
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
      initialData: {
        pages: [posts.slice(0, 1)],
        pageParams: [1],
      },
    }
  );

  const loadMore = () => {
    setTextData(true);
    setTitleData(false);
    setTimeout(() => {
      setTitleData(true);
      setTextData(false);
    }, 2000);
    fetchNextPage();
  };

  return (
    <div style={{ marginTop: "50px" }} className="px-[60px]" id="sections">
      {data?.pages.map((page, i) => (
        <div key={i}>
          {page.map((post) => (
            <div key={post.id} id="slides" className="post text-[#fff]">
              {titleData && <h1>{post.title}</h1>}
              {textData && <h1>Loading...</h1>}
            </div>
          ))}
        </div>
      ))}
      <button onClick={loadMore} disabled={isFetchingNextPage}>
        {isFetchingNextPage ? (
          <h1
            id="text"
            className="text-[20px] text-[#fff] fixed bottom-0 top-50"
          ></h1>
        ) : (
          <h1 className="text-[20px] text-[#fff] fixed right-12 top-[620px] hover:text-[green] hover:underline">
            Load More
          </h1>
        )}
      </button>
    </div>
  );
}
