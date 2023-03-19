import { MovieDetailKeywordType } from "@/types/movies";

type MovieSummaryPropsType = {
  status: string;
  language: string;
  budget: number;
  revenue: number;
  keywords: MovieDetailKeywordType[];
};

function MovieSummary({
  keywords,
  status,
  language,
  revenue,
  budget,
}: MovieSummaryPropsType) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col">
        <span className="text-base font-medium">Status</span>
        <span className="text-sm font-light">{status}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-base font-medium">Language</span>
        <span className="text-sm font-light">{language}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-base font-medium">Budget</span>
        <span className="text-sm font-light">$ {budget}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-base font-medium">Revenue</span>
        <span className="text-sm font-light">$ {revenue}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-base font-medium">Keywords</span>
        <div className="flex flex-wrap gap-2">
          {keywords.length > 0
            ? keywords.map((keyword) => (
                <span
                  key={keyword.id}
                  className="text-sm font-extralight block w-fit px-1 py-0.5 bg-gray-600 text-white rounded"
                >
                  {keyword.name}
                </span>
              ))
            : "-"}
        </div>
      </div>
    </div>
  );
}

export default MovieSummary;
