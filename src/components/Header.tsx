import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1 pl-5 text-3xl font-bold">
        {sessionData?.user?.name ? `Notes for ${sessionData.user.name}` : ""}
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown-end dropdown">
          {sessionData?.user ? (
            <label
              tabIndex={0}
              onClick={() => void signOut()}
              htmlFor=""
              className="btn-ghost btn-circle avatar btn"
            >
              <div className="w-10 rounded-full">
                <Image
                  height={40}
                  width={40}
                  src={sessionData?.user?.image ?? ""}
                  alt={sessionData?.user?.name ?? ""}
                />
              </div>
            </label>
          ) : (
            <button
              className="btn-ghost rounded-btn btn"
              onClick={() => void signIn()}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
