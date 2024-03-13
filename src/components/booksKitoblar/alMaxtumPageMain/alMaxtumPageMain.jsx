// .jsx

import { useInfiniteQuery } from "react-query";

const posts = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
  { id: 3, title: "post 3" },
  { id: 4, title: "post 4" },
  { id: 5, title: "post 5" },
  { id: 6, title: "post 6" },
];

const fetchPost = async (page) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return posts.slice((page - 1) * 2, page * 2);
};

export default function AlMaxtumPageMain() {
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

  return (
    <div style={{ marginTop: "50px" }} className="px-[60px]" id="sections">
      {data?.pages.map((page, i) => (
        <div key={i}>
          {page.map((post) => (
            <div id="slides" key={post.id} className="text-[#fff]">
              {post.title}
            </div>
          ))}
        </div>
      ))}
      <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
        {isFetchingNextPage ? (
          <h1 className="text-[20px] text-[#fff] fixed bottom-0 top-50">
            Loading more..
          </h1>
        ) : data?.pages.length < 3 ? (
          <h1 className="text-[20px] text-[#fff] fixed right-12 top-[660px] hover:text-[green] hover:underline">
            Loading more
          </h1>
        ) : (
          <h1 className="text-[red]">Nothing more to load</h1>
        )}
      </button>
    </div>
  );
}
