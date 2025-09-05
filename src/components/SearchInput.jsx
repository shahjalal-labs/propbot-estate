import { MapPin, Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="relative w-72 sm:min-w-[620px]">
      {/* Left Icon */}
      <MapPin
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        size={20}
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search properties..."
        className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white "
      />

      {/* Right Icon */}
      <Search
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        size={20}
      />
    </div>
  );
}
