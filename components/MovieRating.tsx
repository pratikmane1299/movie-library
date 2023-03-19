type MovieRatingPropsType = {
	rating: number;
}

function MovieRating({ rating }: MovieRatingPropsType) {
	return (
    <div className="bg-slate-900 h-12 w-12 p-1 text-white rounded-full cursor-pointer">
			<div className="border-2 h-10 w-10 p-1 flex items-center justify-center border-green-600 rounded-full">
				<span className="text-xs font-medium">
      		{rating}%
				</span>
			</div>
    </div>
  );
}

export default MovieRating