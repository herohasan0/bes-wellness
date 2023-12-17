import BellIcon from "@/Components/Icons/BellIcon";
import MessageIcon from "@/Components/Icons/MessageIcon";
import SearchIcon from "@/Components/Icons/SearchIcon";
import PageLayout from "@/Components/PageLayout";
import ScoreComponent from "@/Components/ScoreComponent";
import Image from "next/image";

export default function Home() {
  return (
    <PageLayout>
      <div className="">
        <h5 className="text-2xl mb-2 uppercase">KİŞİSEL BİLGİLER</h5>
        <p className="mb-4 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="flex w-full">
        {/* <div className="w-80 h-[80vh] relative">
          <Image fill src="/img/doctor-illustration.png" />
        </div> */}
        <div className="w-full">
          <div className="flex items-center w-full space-x-2">
            <div className="flex items-center relative w-full">
              <div className="absolute left-4">
                <SearchIcon />
              </div>
              <input
                className="bg-gray-200/70 py-3 pl-11 w-full rounded"
                placeholder="Seach anything..."
              />
            </div>
            <div className="border border-gray-400 p-2.5 cursor-pointer rounded">
              <BellIcon />
            </div>
            <div className="border border-gray-400 p-2.5 cursor-pointer rounded">
              <MessageIcon />
            </div>
            {/* search */}
            {/* notification */}
          </div>

          <div>{/* metrics */}</div>

          <div>
            <ScoreComponent />
            <div>
              <div>{/* wellness chat bot */}</div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
