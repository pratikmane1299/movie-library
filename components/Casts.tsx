import Image from "next/image";

import { MovieDetailCastType } from "@/types/movies";
import { getProfileImagePath } from "@/utils";

type CastsPropsType = {
  cast: MovieDetailCastType[];
};

function Casts({ cast }: CastsPropsType) {
  return (
    <div className="w-full flex flex-col mt-4 lg:mt-0">
      <h6 className="mb-4 text-base font-semibold">Top Billed Cast</h6>
      <div className="w-full flex overflow-x-auto scroll-smooth">
        {cast.slice(0, 10).map((member) => (
          <div key={member.id} className="mr-4 flex-[0_0_10%]">
						<div className="flex flex-col">
            <Image
              alt={member.original_name}
              src={getProfileImagePath(member.profile_path)}
              width={300}
              height={100}
              className="mb-2 w-full h-[100px] rounded"
            />
            <span className="mb-1 text-sm font-normal">
              {member.original_name}
            </span>
            <span className="text-xs font-normal">{member.character}</span>
							</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Casts;
