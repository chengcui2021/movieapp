import Link from 'next/link';

interface IPaginate {
  currentPage: number;
  totalPages: number;
  pageType: string;
}

const Paginate = ({ currentPage, totalPages, pageType }: IPaginate) => {
  return (
    <div className="mt-6 mb-6 flex justify-center gap-4">
      {currentPage > 1 && (
        <Link href={`/${pageType}/?page=${Number(currentPage) - 1}`}>
          <a
            rel=""
            className="text-md bg-slate-800 py-2 px-5 font-normal text-white"
          >
            Prev
          </a>
        </Link>
      )}
      {totalPages} {currentPage}
      {currentPage < totalPages && (
        <Link href={`/${pageType}/?page=${Number(currentPage) + 1}`}>
          <a
            rel=""
            className="rounded-l bg-cyan-900 py-2 px-4 font-bold text-white"
          >
            Next
          </a>
        </Link>
      )}
    </div>
  );
};

export default Paginate;
