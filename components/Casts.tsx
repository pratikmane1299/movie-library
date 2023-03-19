import Image from "next/image";

import { MovieDetailCastType } from "@/types/movies";
import { getProfileImagePath } from "@/utils";

type CastsPropsType = {
  cast: MovieDetailCastType[];
};

function Casts({ cast }: CastsPropsType) {
  return (
    <div className="w-full flex flex-col">
      <h6 className="mb-4 text-base font-semibold">Top Billed Cast</h6>
      <div className="w-full flex gap-3 overflow-x-auto">
        {cast.slice(0, 10).map((member) => (
          <div className="w-[100px] flex flex-col">
            <Image
              alt={member.original_name}
              src={getProfileImagePath(member.profile_path)}
              width={300}
              height={100}
              className="mb-2 w-full h-[100px]  rounded"
            />
            <span className="mb-1 text-sm font-normal">
              {member.original_name}
            </span>
            <span className="text-xs font-normal">{member.character}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Casts;
